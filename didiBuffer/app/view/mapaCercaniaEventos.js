/*
 * File: app/view/mapaCercaniaEventos.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.mapaCercaniaEventos', {
    extend: 'Ext.Map',
    alias: 'widget.mapacercaniaeventos',

    requires: [
        'MyApp.view.override.mapaCercaniaEventos'
    ],

    config: {
        id: 'mapaCercaniaEventos',
        itemId: 'mapaCercaniaEventos',
        useCurrentLocation: true,
        mapOptions: {
            zoom: 14,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: true
        },
        listeners: [
            {
                fn: 'onMapaCercaniaEventosMaprender',
                event: 'maprender'
            }
        ],
        items: [
            {
                xtype: 'dataview',
                height: '20%',
                id: 'dataViewDidiMapaEventos',
                top: '80%',
                width: '100%',
                layout: {
                    type: 'hbox'
                },
                scrollable: 'horizontal',
                inline: {
                    wrap: false
                },
                itemTpl: [
                    '<div style="margin-right: 0%; margin-left: 0%;">',
                    '    <img src="{imagen}" width="80%" height="80%" />',
                    '</div>',
                    ''
                ],
                loadingText: 'Cargando...',
                store: 'storeCategoriasEventos'
            }
        ]
    },

    onMapaCercaniaEventosMaprender: function(map, gmap, options) {
        //Con estas lineas, se coloca un pin para referencia de la ubicacion del usuario,
        //es decir, se indica la ubicacion propia
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function(position){
                //Se borra el pin anterior... inicialmente esta bien hacer esto porque se ha
                //creado este pin en el launch
                markerPosActualEventos.setMap(null);
                //Se crea un objeto de posicion con la ubicacion actual propia
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                //Se crea el pin y se asigna al mapa Eventos
                markerPosActualEventos=new google.maps.Marker({ //se quito el var del frente
                    position: pos,
                    map: gmap,
                    draggable: false
                });
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({location: pos}, function(results, status){ciudad=( results[0].address_components[0].long_name);});
            }
            );
        }
    },

    processStoreEventos: function(listaStoreEventos) {

        directionsDisplay.setMap(null);

        //alert(listaStoreEventos.length);

        //Ciclo para separar cada elemento del store.
        for (var iEventos = 0, lnEventos = listaStoreEventos.length; iEventos < lnEventos; iEventos++){
            //Esta variable consiste en los datos del paquete de informacion del store
            var datoEventos = listaStoreEventos[iEventos].data;
            //Este es un llamado a addMarker para que haga el agregado del pin
            this.addMarkerEventos(datoEventos);  // Se llama a la función que muestra el marcador.
        }


        Ext.getCmp("mapaCercaniaEventos").setMasked(false);


    },

    addMarkerEventos: function(datoEventos) {
        funcionTrazadoDeLineaEntrePuntos=function(latPointEventos, lngPointEventos){

            pointEventosIntermediario = new google.maps.LatLng(parseFloat(latPointEventos),parseFloat(lngPointEventos));

            rendererOptions = {
                draggable: false,
                suppressMarkers: true,
                polylineOptions: {strokeColor: 'black'}

            };

            directionsDisplay.setMap(null);

            directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
            directionsService = new google.maps.DirectionsService();

            directionsDisplay.setMap(Ext.getCmp("mapaCercaniaEventos").getMap());

            request = {
                origin: posActual,
                destination: pointEventosIntermediario,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };

            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        };







        //Se crea el objeto de Icon para el icono del pin
        var iconParaMarkerCategoriaEventos=new google.maps.MarkerImage(Ext.getStore("storeCategoriasEventos").getAt(Ext.getStore("storeCategoriasEventos").find("idEventoCategorias",datoEventos.categoriaEvento,false,true,true)).get("imagen"),null,null,null,new google.maps.Size(45,45));
        //Se crea el infowindow
        var infoWindowEventos = new google.maps.InfoWindow(),  //Se crea casilla de información del marcador.
        pointEventos = new google.maps.LatLng(
        datoEventos.latitud,
        datoEventos.longitud
        ),
        //Se crea el marker
        markerEventos = new google.maps.Marker({
            map: this.getMap(),
            position: pointEventos,
            icon: iconParaMarkerCategoriaEventos
        });
        //Despues de crear el marker, se ingresa en el arreglo de los markers para este
        //mapa
        markersMapaEventos.push(markerEventos);




        //Este metodo permite obtener la distancia entre varios puntos origen y varios
        //puntos destino... esto da una matriz de todas las distancias de las combinaciones
        //posibles
        serviceCalculoDistanciasMapaEventos.getDistanceMatrix(
        {
            //Este es el punto inicial
            origins: [pointEventos],
            //Este es el otro punto para sacar la distancia entre ambos
            destinations: [posActual],
            //Este es el modo de viaje entre ambos puntos
            travelMode: google.maps.TravelMode.DRIVING,
            avoidHighways: false,
            avoidTolls: false
            //Esta funcion lo que hace es que, en el arreglo duracionesHastaEmpresas se van
            //guardando los tiempos que se dura hasta cada empresa, y en distanciasHastaEmpresa
            //se van guardando las distancias hasta cada empresa
        }, function(response,status){if(status==google.maps.DistanceMatrixStatus.OK){var origins=response.originAddresses;var destinations=response.destinationAddresses;for(var i=0;i<origins.length;i++){var results=response.rows[i].elements;for(var j=0;j<results.length;j++){duracionesHastaEventos[datoEventos.idEvento]=(results[j].duration.text); distanciasHastaEvento[datoEventos.idEvento]=(results[j].distance.text);}}}});



            arrayPointEventos[datoEventos.idEvento]=pointEventos;



            //Se agrega un controlador a los markers
            google.maps.event.addListener(markerEventos, "click", function() {
                //Primero se creo un string con el nombre del view del cual se pasa hacia descr
                //empresa
                stringContainerDelQueSePasaEventos='"containerMapaEventos"';
                /*
                alert(arrayPointEventos[datoEventos.idEvento].lat());
                alert(arrayPointEventos[datoEventos.idEvento].lng());
                alert(posActual.lat());
                alert(posActual.lng());
                */        

                //Otro string, para el texto de lo que se hara al dar click a uno de los botones
                //que aparecen en el infowindow
                stringParaAgregarFuncionPrimerBotonEventos="onclick='funcionParaAbrirDescripcionEventos("+datoEventos.idEvento+","+stringContainerDelQueSePasaEventos+");'";
                //        stringParaAgregarFuncionBotonIr="onclick='funcionTrazadoDeLineaEntrePuntos("+posActual+","+pointEventos+");'";
                stringParaAgregarFuncionBotonIr="onclick='funcionTrazadoDeLineaEntrePuntos("+arrayPointEventos[datoEventos.idEvento].lat()+","+arrayPointEventos[datoEventos.idEvento].lng()+");'";
                //Otro string, para el texto de lo que se hara al dar click a uno de los botones
                //que aparecen en el infowindow
                //Se agrega el contenido al infowindow
                infoWindowEventos.setContent("<center><p>"+datoEventos.nombre+"</p></center><p><input "+stringParaAgregarFuncionPrimerBotonEventos+" type='button' id='botonParaInfoWindowEventos' value='Ir a descripción' style='font-family: texgyrechorus; background-color:#A9F5BC; padding:3px; color:green; height:10%; width: 90%;'></p>"+"<p><input "+stringParaAgregarFuncionBotonIr+" type='button' id='botonParaIr' value='Ir' style='background-color:#A9F5BC; padding:3px; color:green; height:10%; width: 90%;'></p>"+"<p> Distancia: "+distanciasHastaEvento[datoEventos.idEvento]+"</p>"+"<p> Duracion: "+duracionesHastaEventos[datoEventos.idEvento]+"</p>");
                //Finalmente, se abre la infowindow
                infoWindowEventos.open(this.getMap(), markerEventos);
            });








            //---------------------------------------------------------------------------------
            //Esta variable es de tipo LatLngBounds, y se le aplica .extend(LatLng) para
            //ir autoajustando el mapa y que quepan todos los pines en el
            limitesMapaEventos.extend(pointEventos);
            //Se aplica fitBounds al mapa con el objeto limitesMapaPrincipal, el cual
            //autoajusta el mapa con los limites adecuados
            Ext.getCmp("mapaCercaniaEventos").getMap().fitBounds(limitesMapaEventos);

            //Con este codigo se permite que el mapa se vuelva a centrar en la posicion
            //actual propia
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                function(position){
                    //Se crea un objeto de posicion, con latitud y longitud actuales
                    posActual = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    //Ext.getCmp("mapaContainerMapa").setMapCenter({latitude: posActual.lat(), longitude: posActual.lng()});
                }
                );
            }



            map_centerEventos = limitesMapaEventos.getCenter();
            Ext.getCmp("mapaCercaniaEventos").setMapCenter(map_centerEventos);







            //funcionTrazadoDeLineaEntrePuntos(posActual,pointEventos);






            /*
            var puntosEntreViaje=[pointEventos,posActual];
            var lineaTrayectoUnion=new google.maps.Polyline({
            path:puntosEntreViaje,
            geodesic: true,
            strokeColor:"#0000FF",
            strokeOpacity:0.9,
            strokeWeight:2
            });

            lineaTrayectoUnion.setMap(this.getMap());
            */






    }

});