/*
 * File: app.js
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

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'modelCarouselInicio',
        'modelDidiRapidos',
        'modelCategorias',
        'modelEventos',
        'modelSelectFieldContainerMapa',
        'modelListadoTotalDeLasEmpresas',
        'modelSubcategorias',
        'modelListaEmpresasEnSubcategoria',
        'modelEmpresaEnDescripcionEmpresa',
        'modelDescripcionEventos',
        'modelSubEventos',
        'modelEstadoEnvio',
        'modelCategoriasEventos',
        'modelProvinciasBusquedaAvanzada',
        'modelCantonBusquedaAvanzada',
        'modelReservaEvento',
        'modelEnvioSolicitudReserva',
        'modelCancelarReservaPerfilUsuario',
        'modelEnvioAgregadoFavoritosPerfilUsuario',
        'modelEnvioAgregadoFavoritosEmpresasPerfilUsuario',
        'modelModuloDetalleDescripcionEmpresa',
        'modelPromocionEmpresa',
        'modelConfigDidiReserva',
        'modelInfoUsuarioLoginFacebook',
        'modelRefrescadoLatLngPosTaxista',
        'modelCambioEstadoSolicitudTaxi'
    ],
    stores: [
        'storeCarouselInicio',
        'storeDidiRapidos',
        'storeCategorias',
        'storeEventos',
        'storeSelectFieldContainerMapa',
        'storeListadoTotalDeLasEmpresas',
        'storeSubcategorias',
        'storeListaEmpresasEnSubcategoria',
        'storeEmpresaEnDescripcionEmpresa',
        'storeDescripcionEventos',
        'storeSubEventos',
        'storeEnvioSolicitudTaxi',
        'storeCategoriasEventos',
        'storeProvinciasBusquedaAvanzada',
        'storeCantonBusquedaAvanzada',
        'storeEnvioSolicitudReserva',
        'storeReservaEvento',
        'storeCancelarReservaPerfilUsuario',
        'storeEnvioAgregadoFavoritosPerfilUsuario',
        'storeExtraccionFavoritosPerfilUsuario',
        'storeEnvioAgregadoFavoritosEmpresasPerfilUsuario',
        'storeExtraccionFavoritasEmpresasPerfilUsuario',
        'storeVerificadoEventoFavoritosPerfilUsuario',
        'storeVerificadoEmpresaFavoritaPerfilUsuario',
        'storeModuloDetalleDescripcionEmpresa',
        'storePromocionEmpresa',
        'storeSubEventosMapa',
        'storeConfigDidiReserva',
        'storeInfoUsuarioLoginFacebook',
        'storeRefrescadoLatLngPosTaxista',
        'storeCambioEstadoSolicitudTaxi'
    ],
    views: [
        'tabPanelPrincipal',
        'containerInicio',
        'containerLogIn',
        'BASURERO',
        'containerCategorias',
        'containerAppDidiRapidos',
        'containerEventos',
        'containerMapaPrincipal',
        'mapaCercaniaEventos',
        'mapaContainerMapa',
        'containerAyuda',
        'containerOfertas',
        'containerSubcategorias',
        'containerListaEmpresasEnSubcategoria',
        'containerDescripcionEmpresa',
        'containerSubEventos',
        'containerDescripcionEventos',
        'containerFormularioGeolocalizacion',
        'containerModuloReservaciones',
        'containerMapaSolicitudTaxi',
        'containerMapa',
        'containerMapaEventos',
        'containerBusquedaAvanzada',
        'containerPromocionEmpresa',
        'containerPrincipalDeApp',
        'containerNotificacionesPerfilUsuario',
        'containerReservasPerfilUsuario',
        'containerFavoritosEmpresasPerfilUsuario',
        'containerFavoritosEventosPerfilUsuario',
        'containerPerfilPerfilUsuario'
    ],
    icon: './resources/icon/iconoDidi.png',
    name: 'MyApp',
    controllers: [
        'controladorDataViewDidiRapidos',
        'controladorDataViewCategorias',
        'controladorDataViewListaEmpresasEnSubcategoria',
        'controladorListaCatEventos',
        'controladorDataViewDidiMapaPrincipalEnTabPanel',
        'controladorDataViewDidiMapaEventos',
        'controladorDataviewCategoriasBusquedaAvanzada',
        'controladorListaSubategoriasBusquedaAvanzada',
        'controladorProvinciasBusquedaAvanzada',
        'controladorCantonBusquedaAvanzada',
        'controladorListaReservasPerfilUsuario',
        'controladorListaFavoritosEventosPerfilUsuario',
        'controladorListaFavoritosEmpresasPerfilUsuario'
    ],

    launch: function() {
        //AQUI VAN DEFINIDAS TODAS LAS FUNCIONES QUE SE PUEDAN DEFINIR AQUI


        try{
            //FACEBOOK SDK
            //--------------------------------------------------------------------------------------------------------------------------------------
            window.fbAsyncInit = function() {
                // init the FB JS SDK
                FB.init({
                    appId      : '343895802382049', // App ID from the App Dashboard
                    channelUrl : '//www.didicr.com/channel.html', // Channel File for x-domain communication
                    status     : true, // check the login status upon init?
                    cookie     : true, // set sessions cookies to allow your server to access the session?
                    xfbml      : true  // parse XFBML tags on this page?
                });
            };
            testAPI = function(){
                FB.api('/me', function(response) {

                    /*
                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('nombreCompletoFbParam',response.name);
                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('idUserFbParam',response.id);
                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('emailUsuarioFbParam',response.email);
                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('edadUsuarioFbParam',response.birthday);
                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('profilePicUsuarioFbParam',response.picture);
                    Ext.getStore("storeInfoUsuarioLoginFacebook").load();
                    */


                    Ext.Msg.alert('Aviso', 'Sesión iniciada correctamente.', Ext.emptyFn);
                    Ext.getCmp("botonDespliegueInfoPerfilUsuario").setText(response.name);
                    //---------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Ext.getCmp("containerLogIn").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});
                    //Se carga LOAD el store para carousel y DiDiRapidos
                    Ext.getStore("storeCarouselInicio").load();
                    //Con el siguiente codigo se agregan controladores a las imagenes inferiores en Eventos,
                    //asi como las correspondientes url/html de ellas
                    /*
                    contadorParaConfigurarImagenesCatEventos=1;
                    Ext.getStore("storeCategoriasEventos").each(function (record) {
                    Ext.getCmp("imagenCatEventos"+contadorParaConfigurarImagenesCatEventos).addListener('tap',funcionDarTapImagenesEventos);
                    Ext.getCmp("imagenCatEventos"+contadorParaConfigurarImagenesCatEventos).setHtml("<img src='"+record.get("imagen")+"' height='100%' width='100%'>");
                    contadorParaConfigurarImagenesCatEventos=contadorParaConfigurarImagenesCatEventos+1;
                    });
                    */
                    //Funcion para ir cambiando las imagenes en eventos
                    var funcionCambioEstadoCarousel = function() {
                        var task = Ext.create('Ext.util.DelayedTask', function() {
                            //console.log('hi');
                            Ext.getCmp("carouselEventos").next();
                            if(Ext.getCmp("carouselEventos").getActiveIndex()==Ext.getCmp("carouselEventos").getItems().length-2){Ext.getCmp("carouselEventos").setActiveItem(0);}
                            funcionCambioEstadoCarousel.call(this);
                        }, this);
                        task.delay(5000);
                    };
                    //Esta es la funcion que hace que cambien las imagenes en el carousel Inicio
                    funcionCambioEstadoCarousel();
                    //---------------------------------ESTA VARIABLE posActual HAY QUE UTILIZARLA EN VARIOS LUGARES-------------------------
                    //Funcion para ir cambiando las imagenes en eventos
                    var funcionGuardadoPosActual = function() {
                        var taskPosActual = Ext.create('Ext.util.DelayedTask', function() {
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(
                                function(position){
                                    //Se crea un objeto de posicion, con latitud y longitud actuales
                                    posActual = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                                }
                                );
                            }
                            funcionGuardadoPosActual.call(this);
                        }, this);
                        taskPosActual.delay(500);
                    };
                    //Esta es la funcion que hace que se refresque la variable que almacena la posicion actual
                    funcionGuardadoPosActual();    
                    //---------------------------------------------------------------------------------------------------------------------------------------------------------------        
                });
            };
            //login function
            login = function() {
                //    alert("fgey");
                FB.login(function(response) {
                    if (response.authResponse) {
                        // connected
                        //alert('Su información: '+response.name+','+response.authResponse.userID+','+response.authResponse.accessToken+','+response.authResponse.expiresIn+','+response.authResponse.signedRequest);
                        testAPI();
                    } else {
                        Ext.Msg.alert('Aviso', 'Sesión no iniciada.', Ext.emptyFn);
                    }
                });
            };
            // Load the SDK's source Asynchronously
            // Note that the debug version is being actively developed and might 
            // contain some type checks that are overly strict. 
            // Please report such bugs using the bugs tool.
            (function(d, debug){
                var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement('script'); js.id = id; js.async = true;
                js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
                ref.parentNode.insertBefore(js, ref);
            }(document, /*debug*/ false));
            //--------------------------------------------------------------------------------------------------------------------------------------
        }
        catch(e){
            //
        }








        /////-----------------------------IMPORTANTISIMO
        idPerfilUsuarioDidi=3;
        /////-----------------------------IMPORTANTISIMO









        //-----------------------PARA RESETEAR LINEAS ROUTES GOOGLE MAPS
        rendererOptions = {
            draggable: true
        };

        directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);





        //Variable global de box message que sirve para cambiar el IDIOMA al msg.alert y msg.confirm
        extMessageBox = Ext.MessageBox;
        Ext.apply(extMessageBox, {
            YES: { text: 'Sí', itemId: 'yes', ui: 'action' }
        });
        Ext.apply(extMessageBox, {
            YESNO: [Ext.MessageBox.NO, Ext.MessageBox.YES]
        });




        //Este objeto LatLngBounds permite autoajustar el zoom para contener a todos los pines en el mapa
        limitesMapaPrincipal = new google.maps.LatLngBounds();
        limitesMapaEventos = new google.maps.LatLngBounds();

        //Service de google maps Matrix
        serviceCalculoDistanciasMapaPrincipal = new google.maps.DistanceMatrixService();
        serviceCalculoDistanciasMapaEventos = new google.maps.DistanceMatrixService();

        //Arreglo de distancias hasta empresas y de duraciones hasta empresas, ademas de variables intermediarias
        distanciasHastaEmpresa=[];
        //distanciasHastaEmpresa[dato.idCliente]
        duracionesHastaEmpresas=[];
        distanciaHastaEmpresaVariable=0;
        tiempoHastaEmpresaVariable=0;


        //Arreglo de distancias hasta eventos y de duraciones hasta empresas, ademas de variables intermediarias
        distanciasHastaEvento=[];
        //distanciasHastaEmpresa[dato.idCliente]
        duracionesHastaEventos=[];
        distanciaHastaEventoVariable=0;
        tiempoHastaEventoVariable=0;






        //Arreglo para guardar markers
        markersMapaEventos=[];

        //Arreglo para guardar markers
        markersMapaPrincipal=[];

        //Cargo el store de categorias Eventos para poder utilizarlo en la parte in-
        //ferior del view de Eventos en donde van las 8 imagenes correspondientes
        Ext.getStore("storeCategoriasEventos").load();

        //Esta iniciacion es para que no haya problema en el load de
        //storeEmpresaEnDescripcionEmpresa
        botonClickeadoEnListadoTotalEmpresas="";

        //Funcion para abrir alguna pagina web
        funcionParaAbrirPaginaWeb=function(direccionWebAAccesar,idObjetoClickeado){
            window.open(direccionWebAAccesar);
            //    Ext.getCmp("containerInicio").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

        };

        //Funcion para abrir view descripcion empresa
        funcionParaAbrirDescEmpresa=function(idCliente,viewPrevioADescEmpresas){
            //    alert("aeiou");
            viewDelQueSePasaHaciaDescripcionEmpresa=viewPrevioADescEmpresas;
            botonClickeadoEnListadoTotalEmpresas="";
            //alert(viewDelQueSePasaHaciaDescripcionEmpresa);
            //    alert(idCliente);
            Ext.getStore("storeEmpresaEnDescripcionEmpresa").getProxy().setExtraParam('idCliente',idCliente);
            Ext.getStore("storeEmpresaEnDescripcionEmpresa").load();
        };

        //-------------------------------------------------------------------------------------
        //Funcion para abrir view descripcion empresa
        funcionParaAbrirSubEventos=function(viewPrevioASubEventos){
            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerSubEventos"));
            viewDelQueSePasaHaciaSubEventos=viewPrevioASubEventos;
        };

        //Esta funcion se realiza al dar click a las imagenes en Eventos
        funcionDarTapImagenesEventos=function(idCatEvent){

            //    alert("feg");
            Ext.getCmp("containerEventos").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

            //alert("fio");
            funcionParaAbrirSubEventos("containerEventos");

            Ext.getStore("storeSubEventos").loadPage(1);

            Ext.getStore("storeSubEventos").getProxy().setExtraParam('categoriaEventoParam',idCatEvent);
            Ext.getStore("storeSubEventos").load();
        };

        //-------------------------------------------------------------------------------------

        //Funcion para abrir view descripcion empresa
        funcionParaAbrirDescripcionEventos=function(nombreDescripcionEvento,viewPrevioADescripcionEventos){
            //    Ext.getCmp("containerInicio").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});
            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerDescripcionEventos"));
            viewDelQueSePasaHaciaDescripcionEventos=viewPrevioADescripcionEventos;
            Ext.getStore("storeDescripcionEventos").getProxy().setExtraParam('idEventoSolicitado',nombreDescripcionEvento);
            Ext.getStore("storeDescripcionEventos").load();
        };











        //Funcion para poner los markers en un mapa
        funcionParaIntroducirMarkersEnMapa=function(storeDelQueSeExtraenEmpresas, mapaEnElQueIngresoMarkers){
            //    alert("fewer");
            //Con este codigo se ponen los pines de las empresas ubicadas en el mapa
            //principal
            if(storeDelQueSeExtraenEmpresas=="storeListadoTotalDeLasEmpresas"){
                while(markersMapaPrincipal[0]){
                    markersMapaPrincipal.pop().setMap(null);
                }
            }
            else if(storeDelQueSeExtraenEmpresas=="storeSubEventosMapa"){
                while(markersMapaEventos[0]){
                    markersMapaEventos.pop().setMap(null);
                }
            }
            Ext.getStore(storeDelQueSeExtraenEmpresas).load({     //Se carga el store.
                scope: this,
                callback: function(records) {  //Se recorre el store.
                    if(mapaEnElQueIngresoMarkers.getId()=="mapaContainerMapa"){
                        //Este objeto LatLngBounds permite autoajustar el zoom para contener a todos los pines en el mapa
                        limitesMapaPrincipal = new google.maps.LatLngBounds();
                        limitesMapaPrincipal.extend(posActual);
                        contadorParaExtraccionDuracionYDistanciaEmpresas=0;
                        distanciasHastaEmpresa=[];
                        duracionesHastaEmpresas=[];
                        arrayPointEmpresas=[];
                        mapaEnElQueIngresoMarkers.processStore(records);
                    }
                    else if(mapaEnElQueIngresoMarkers.getId()=="mapaCercaniaEventos"){
                        //Este objeto LatLngBounds permite autoajustar el zoom para contener a todos los pines en el mapa
                        limitesMapaEventos = new google.maps.LatLngBounds();
                        limitesMapaEventos.extend(posActual);
                        //contadorParaExtraccionDuracionYDistanciaEmpresas=0;
                        distanciasHastaEvento=[];
                        duracionesHastaEventos=[];
                        arrayPointEventos=[];
                        directionsDisplay.setMap(null);
                        mapaEnElQueIngresoMarkers.processStoreEventos(records);
                    }
                }
            });
        };


        //Funcion para llamar a un numero telefonico
        funcionParaLlamarAUnNumeroTelefonico=function(numeroTelefonico){
            window.open('tel:+506-'+numeroTelefonico);
        };


        //Se crea este marker, para luego poder ser borrado por el mapa de cercania
        //eventos
        markerPosActualEventos=new google.maps.Marker({
            draggable: false
        });


        //Se crea este marker, para luego poder ser borrado por el mapa Principal
        markerPosActualPrincipal=new google.maps.Marker({
            draggable: false
        });


        markerPosActualDidiTaxi=new google.maps.Marker({
            draggable: false
        });




        Ext.create('MyApp.view.containerPrincipalDeApp', {fullscreen: true});
    }

});
