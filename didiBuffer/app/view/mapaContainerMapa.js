/*
 * File: app/view/mapaContainerMapa.js
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

Ext.define('MyApp.view.mapaContainerMapa', {
    extend: 'Ext.Map',
    alias: 'widget.mapacontainermapa',

    requires: [
        'MyApp.view.override.mapaContainerMapa'
    ],

    config: {
        id: 'mapaContainerMapa',
        itemId: 'mapaContainerMapa',
        useCurrentLocation: true,
        mapOptions: {
            zoom: 14,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: true
        },
        listeners: [
            {
                fn: 'onMapaContainerMapaMaprender',
                event: 'maprender'
            },
            {
                fn: 'onImagenLogoDidiMapaPrincipalEnTabPanelTap',
                event: 'tap',
                delegate: '#imagenLogoDidiMapaPrincipalEnTabPanel'
            }
        ],
        items: [
            {
                xtype: 'image',
                height: '13%',
                html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                id: 'imagenLogoDidiMapaPrincipalEnTabPanel',
                itemId: 'myimage27',
                left: '30%',
                width: '40%'
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    //Con este codigo se permite que el mapa se vuelva a centrar en la posicion
                    //actual propia
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                        function(position){
                            //Se crea un objeto de posicion, con latitud y longitud actuales
                            posActual = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                            Ext.getCmp("mapaContainerMapa").setMapCenter({latitude: posActual.lat(), longitude: posActual.lng()});
                        }
                        );
                    }


                },
                height: '5%',
                id: 'botonVolverPosActualMapaPrincipal',
                left: '38%',
                top: '13%',
                ui: 'confirm-round',
                width: '18%',
                text: '<p style="font-size: 40%;"> Ir a pos </p> <p style="font-size: 40%;"> actual </p>'
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    //Primero se hace visible el tabBar nuevamente
                    Ext.getCmp("tabPanelPrincipal").getTabBar().setHidden(0);
                    //Luego, si se viene del tab de containerMapa, entonces quiere decir que ahi
                    //se tomo la decision de cual mapa se queria ver, y se prefiere retornar al
                    //containerInicio que a ahi
                    if(tabDelQueSePasaHaciaTabMapa==Ext.getCmp("containerMapa")){
                        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
                    }
                    else{
                        Ext.getCmp("tabPanelPrincipal").setActiveItem(tabDelQueSePasaHaciaTabMapa);
                    }


                    directionsDisplay.setMap(null);


                },
                baseCls: 'botonAtras',
                height: '5%',
                id: 'botonAtrasDidiMapaPrincipalEnTabPanel',
                right: '2%',
                top: '1.5%',
                ui: 'action-round',
                width: '10%'
            },
            {
                xtype: 'dataview',
                height: '20%',
                id: 'dataViewDidiMapaPrincipalEnTabPanel',
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
                    '',
                    ''
                ],
                store: 'storeCategorias'
            },
            {
                xtype: 'container',
                height: '10%',
                id: 'containerInfoCategoriaEnMapaPrincipal',
                right: '2%',
                top: '12%',
                width: '30%'
            }
        ]
    },

    onMapaContainerMapaMaprender: function(map, gmap, options) {


        //Con estas lineas, se coloca un pin para referencia de la ubicacion del usuario,
        //es decir, se indica la ubicacion propia
        //Estas lineas van en este maprender para que cada vez que se renderiza el mapa entonces
        //se vuelve a actualizar el pin a la posicion actual
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            function(position){
                //Se borra el pin anterior... inicialmente esta bien hacer esto porque 
                //se ha creado este pin en el launch
                markerPosActualPrincipal.setMap(null);
                //Se crea un objeto de posicion con la ubicacion actual propia
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                //Se crea el pin y se asigna al mapa Eventos
                markerPosActualPrincipal=new google.maps.Marker({ //se quito el var del frente
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

    onImagenLogoDidiMapaPrincipalEnTabPanelTap: function(img, e, options) {
        //TOdo logo de DIdi redirige hacia containerInicio
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
        //Al salir del mapa, hay que hacer visible el tabBar nuevamente
        Ext.getCmp("tabPanelPrincipal").getTabBar().setHidden(0);
    },

    processStore: function(listaStore) {

        directionsDisplay.setMap(null);

        //alert(listaStore.length);
        if(listaStore.length!==0){
            Ext.getCmp("containerInfoCategoriaEnMapaPrincipal").setHtml("<center><p style='font-size: 100%;'> Categoría: </p> <p style='font-size: 100%;'> "+listaStore[0].get("categoria")+" </p>"+"<p style='font-size: 100%;'> "+listaStore.length+" </p>"+"</center>");
        }

        //Ciclo para separar cada elemento del store.
        for (var i = 0, ln = listaStore.length; i < ln; i++) {
            //Esta variable consiste en los datos del paquete de informacion del store
            var dato = listaStore[i].data;
            //Este es un llamado a addMarker para que haga el agregado del pin
            this.addMarker(dato);  // Se llama a la función que muestra el marcador.
        }


        Ext.getCmp("mapaContainerMapa").setMasked(false);

    },

    addMarker: function(dato) {
        funcionTrazadoDeLineaEntrePuntos=function(latPointEmpresas, lngPointEmpresas){

            pointEmpresasIntermediario = new google.maps.LatLng(parseFloat(latPointEmpresas),parseFloat(lngPointEmpresas));

            rendererOptions = {
                draggable: false,
                suppressMarkers: true,
                polylineOptions: {strokeColor: 'black'}
            };

            directionsDisplay.setMap(null);

            directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
            directionsService = new google.maps.DirectionsService();

            directionsDisplay.setMap(Ext.getCmp("mapaContainerMapa").getMap());

            request = {
                origin: posActual,
                destination: pointEmpresasIntermediario,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };

            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        };




        if(dato.tipoPlan<4){
            //Se crea el objeto de Icon para el icono del pin... y dependiendo
            //del tipo de Plan, se le permite tener el dibujo del pin personalizado
            if(dato.tipoPlan==1){
                var iconParaMarkerCategoria=new google.maps.MarkerImage(dato.logo,null,null,null,new google.maps.Size(45,45));
            }
            else{
                var iconParaMarkerCategoria=new google.maps.MarkerImage(Ext.getStore("storeCategorias").getAt(Ext.getStore("storeCategorias").find("nombre",dato.categoria,false,true,true)).get("imagen"),null,null,null,new google.maps.Size(45,45));
            }
            //Se crea el infowindow
            var infoWindow = new google.maps.InfoWindow(),  //Se crea casilla de información del marcador.
            point = new google.maps.LatLng(
            dato.latitud,
            dato.longitud
            ),
            //Se crea el marker
            marker = new google.maps.Marker({
                map: this.getMap(),
                position: point,
                //icon: iconParaMarker
                //icon: "http://www.didicr.com/imagenes/categorias/categorias_auto.png"
                icon: iconParaMarkerCategoria
            });


            //Despues de crear el marker, se ingresa en arreglo
            markersMapaPrincipal.push(marker);


            //Este metodo permite obtener la distancia entre varios puntos origen y varios
            //puntos destino... esto da una matriz de todas las distancias de las combinaciones
            //posibles
            serviceCalculoDistanciasMapaPrincipal.getDistanceMatrix(
            {
                //Este es el punto inicial
                origins: [point],
                //Este es el otro punto para sacar la distancia entre ambos
                destinations: [posActual],
                //Este es el modo de viaje entre ambos puntos
                travelMode: google.maps.TravelMode.DRIVING,
                avoidHighways: false,
                avoidTolls: false
                //Esta funcion lo que hace es que, en el arreglo duracionesHastaEmpresas se van
                //guardando los tiempos que se dura hasta cada empresa, y en distanciasHastaEmpresa
                //se van guardando las distancias hasta cada empresa
            }, function(response,status){if(status==google.maps.DistanceMatrixStatus.OK){var origins=response.originAddresses;var destinations=response.destinationAddresses;for(var i=0;i<origins.length;i++){var results=response.rows[i].elements;for(var j=0;j<results.length;j++){duracionesHastaEmpresas[dato.idCliente]=(results[j].duration.text); distanciasHastaEmpresa[dato.idCliente]=(results[j].distance.text);}}}});


                arrayPointEmpresas[dato.idCliente]=point;



                //Se agrega un controlador a los markers
                google.maps.event.addListener(marker, "click", function() {
                    //Primero se creo un string con el nombre del view del cual se pasa hacia descr
                    //empresa
                    stringContainerDelQueSePasa='"containerMapaPrincipal"';
                    //Otro string, para el texto de lo que se hara al dar click a uno de los botones
                    //que aparecen en el infowindow
                    stringParaAgregarFuncionPrimerBoton="onclick='funcionParaAbrirDescEmpresa("+dato.idCliente+","+stringContainerDelQueSePasa+");'";
                    //Otro string, para el texto de lo que se hara al dar click a uno de los botones
                    //que aparecen en el infowindow
                    stringParaNumeroTelefonicoEmpresa='"'+dato.telefono+'"';
                    stringParaAgregarFuncionSegundoBoton="onclick='funcionParaLlamarAUnNumeroTelefonico("+stringParaNumeroTelefonicoEmpresa+");'";
                    stringParaAgregarFuncionBotonIrMapaPrincipal="onclick='funcionTrazadoDeLineaEntrePuntos("+arrayPointEmpresas[dato.idCliente].lat()+","+arrayPointEmpresas[dato.idCliente].lng()+");'";
                    //Se agrega el contenido al infowindow
                    infoWindow.setContent("<center><p>"+dato.nombre+"</p></center><p><input "+stringParaAgregarFuncionPrimerBoton+" type='button' id='botonParaInfoWindow' value='Ir a descripción' style='font-size: 100%; background-color:#A9F5BC; padding:3px; color:green; height:10%; width: 90%;'></p> <p><input "+stringParaAgregarFuncionSegundoBoton+" type='button' id='botonParaInfoWindow2' value='Llamar' style='font-size: 100%; background-color:#A9F5BC; padding:3px; color:green; height:10%; width: 90%;'></p>"+"<p><input "+stringParaAgregarFuncionBotonIrMapaPrincipal+" type='button' id='botonParaIrMapaPrincipal' value='Ir' style='background-color:#A9F5BC; padding:3px; color:green; height:10%; width: 90%;'></p>"+"<p> Distancia: "+distanciasHastaEmpresa[dato.idCliente]+"</p>"+"<p> Duracion: "+duracionesHastaEmpresas[dato.idCliente]+"</p>");
                    //Finalmente, se abre la infowindow
                    infoWindow.open(this.getMap(), marker);
                });


                //---------------------------------------------------------------------------------
                //Esta variable es de tipo LatLngBounds, y se le aplica .extend(LatLng) para
                //ir autoajustando el mapa y que quepan todos los pines en el
                limitesMapaPrincipal.extend(point);
                //Se aplica fitBounds al mapa con el objeto limitesMapaPrincipal, el cual
                //autoajusta el mapa con los limites adecuados
                Ext.getCmp("mapaContainerMapa").getMap().fitBounds(limitesMapaPrincipal);


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



                map_centerPrincipal = limitesMapaPrincipal.getCenter();
                Ext.getCmp("mapaContainerMapa").setMapCenter(map_centerPrincipal);
                //map.panToBounds(bounds);
                //map.fitBounds(bounds);


            }    









    }

});