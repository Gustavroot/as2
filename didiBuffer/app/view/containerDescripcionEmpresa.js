/*
 * File: app/view/containerDescripcionEmpresa.js
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

Ext.define('MyApp.view.containerDescripcionEmpresa', {
    extend: 'Ext.Container',
    alias: 'widget.containerdescripcionempresa',

    config: {
        id: 'containerDescripcionEmpresa',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerDescripcionEmpresa',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerDescripcionEmpresa',
                        itemId: 'myimage5',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Esta linea es para cambiar al tab Inicio
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp(viewDelQueSePasaHaciaDescripcionEmpresa));
                            //Con esta linea se remueve lo q haya en subcategorias, para evitar sobrecarga
                            Ext.getStore("storeEmpresaEnDescripcionEmpresa").removeAll();
                        },
                        baseCls: 'botonAtras',
                        height: '80%',
                        id: 'botonAtrasContainerDescripcionEmpresa',
                        right: '2%',
                        top: '10%',
                        ui: 'action-round',
                        width: '15%'
                    }
                ]
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    /*
                    var fechaDelDiaDeHoyParaAgregadoEmpresasFavoritas=new Date();
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").getProxy().setUrl("http://www.didicr.com/php/didiFavorito/insertaEmpresaFavorita.php");
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").getProxy().setExtraParam('idEmpresaParam', Ext.getStore("storeDescripcionEventos").first().get("idCliente"));
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").getProxy().setExtraParam('idUsuarioParam', 3);
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").getProxy().setExtraParam('fechaUsuarioEmpresaFavoritaParam', fechaDelDiaDeHoyParaAgregadoEmpresasFavoritas);
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").load();

                    Ext.Msg.alert('Aviso', 'Este es su empresa número '+Ext.getStore("storeEnvioAgregadoFavoritosPerfilUsuario").first().get("estado")+' agregada', Ext.emptyFn);
                    */


                    var fechaDelDiaDeHoyParaAgregadoEmpresasFavoritas=new Date();
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").getProxy().setUrl("http://www.didicr.com/php/didiFavorito/insertaEmpresaFavorita.php");
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").getProxy().setExtraParam('idClienteParam', Ext.getStore("storeEmpresaEnDescripcionEmpresa").first().get("idCliente"));
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").getProxy().setExtraParam('idUsuarioParam', idPerfilUsuarioDidi);
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").getProxy().setExtraParam('fechaUsuarioEmpresaFavoritaParam', fechaDelDiaDeHoyParaAgregadoEmpresasFavoritas);
                    Ext.getStore("storeEnvioAgregadoFavoritosEmpresasPerfilUsuario").load();

                    //Ext.getStore("storeEnvioAgregadoFavoritosPerfilUsuario").first().get("estado")+
                    Ext.Msg.alert('Aviso', 'Empresa agregada.', Ext.emptyFn);

                    this.disable();



                },
                height: '10%',
                id: 'botonFavoritosContainerDescripcionEmpresa',
                left: '2%',
                top: '2%',
                ui: 'confirm',
                width: '16%',
                iconCls: 'favorites',
                iconMask: true
            },
            {
                xtype: 'container',
                height: '20%',
                id: 'containerTituloDescripcionEmpresa',
                left: '20%',
                top: '0%',
                width: '55%'
            },
            {
                xtype: 'image',
                height: '40%',
                id: 'imagenPrincipalDescripcionEmpresa',
                left: '6.25%',
                top: '20%',
                width: '65%'
            },
            {
                xtype: 'container',
                height: '35%',
                id: 'containerInfoDescripcionEmpresa',
                top: '65%',
                width: '75%'
            },
            {
                xtype: 'container',
                height: '100%',
                id: 'containerBotonesDescripcionEmpresa',
                itemId: 'containerBotonesDescripcionEmpresa',
                right: '2%',
                width: '20%',
                layout: {
                    type: 'vbox'
                },
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'spacer',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Se agrega la funcionalidad de llamar cuando se presiona este bootn
                            window.open('tel:+506-'+Ext.getStore("storeEmpresaEnDescripcionEmpresa").first().get("telefono"));
                        },
                        baseCls: 'botonLlamar',
                        height: 50,
                        id: 'botonLlamarContainerBotonesDescEmpresa',
                        itemId: 'botonLlamarContainerBotonesDescEmpresa',
                        ui: 'action-round',
                        width: '100%',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer',
                        id: 'spacerLlamarDescEmpresa',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp("containerDescripcionEmpresa").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

                            //Finalmente, se pasa hacia el view de mapa
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerMapaPrincipal"));
                            //Antes de pasa al mapa para esta Empresa, se crea un arreglo para almacenar
                            //el paquete de informacion, pero en arreglo, correspondiente con el marker
                            //para esta empresa
                            arregloParaRecordsEnStoreDescEmpresa=[];
                            arregloParaRecordsEnStoreDescEmpresa.push(Ext.getStore("storeEmpresaEnDescripcionEmpresa").first());
                            //Antes de agregar ese marker, se borran los q ya hay
                            while(markersMapaPrincipal[0]){
                                markersMapaPrincipal.pop().setMap(null);
                            }
                            //Se hace un setMapCenter, para que el mapa este centrado en la empresa actual de
                            //descripcion empresa
                            //Ext.getCmp("mapaContainerMapa").setMapCenter({ latitude: Ext.getStore("storeEmpresaEnDescripcionEmpresa").first().get("latitud"), longitude: Ext.getStore("storeEmpresaEnDescripcionEmpresa").first().get("longitud") });

                            //Estas lineas son para que funcione el autoajuste del mapa para que se vean todos los pines
                            limitesMapaPrincipal = new google.maps.LatLngBounds();
                            limitesMapaPrincipal.extend(posActual);
                            contadorParaExtraccionDuracionYDistanciaEmpresas=0;
                            distanciasHastaEmpresa=[];
                            duracionesHastaEmpresas=[];








                            //Este retraso es necesario, ya que de las otras 2 maneras de accesar al mapa para poner el
                            //pin de una empresa, no son problematicas, ya que se hace un .load() y por lo tanto hay una
                            //espera que opaca la eliminacion del uso del currentLocation, pero en este caso de hacerlo
                            //desde descripcion empresa, el problema es que no hay un .load() y por lo tanto no hay tal
                            //espera que opaque esa eliminacion del uso del currentLocation
                            var funcionRetrasoEnLlamadoAlProcessStoreMapaPrincipal = function() {
                                var taskPosActual = Ext.create('Ext.util.DelayedTask', function() {
                                    Ext.getCmp("mapaContainerMapa").processStore(arregloParaRecordsEnStoreDescEmpresa);
                                }, this);
                                taskPosActual.delay(500);
                            };
                            //Esta es la funcion que hace que se refresque la variable que almacena la posicion actual
                            funcionRetrasoEnLlamadoAlProcessStoreMapaPrincipal();













                            //Luego, se llama al processStore para que haga el agregado del pin
                            //Ext.getCmp("mapaContainerMapa").processStore(arregloParaRecordsEnStoreDescEmpresa);
                            //Despues, se hace que aparezca el dataView con las categorias, esto por si la
                            //ultima vez que se ingreso en este mapa se le habia dado hidden(1)
                            Ext.getCmp("dataViewDidiMapaPrincipalEnTabPanel").setHidden(1);

                        },
                        baseCls: 'botonMapa',
                        height: 50,
                        id: 'botonMapaContainerBotonesDescEmpresa',
                        itemId: 'botonMapaContainerBotonesDescEmpresa',
                        ui: 'confirm-round',
                        width: '100%',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer',
                        id: 'spacerMapaDescEmpresa',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Con este llamado a esta funcion, se abre la pagina web correspondiente a la
                            //de la empresa para la cual se ha ingresado a su descripcion
                            funcionParaAbrirPaginaWeb(Ext.getStore("storeEmpresaEnDescripcionEmpresa").first().get("web"),"botonEnlaceWebContainerBotonesDescEmpresa");
                        },
                        baseCls: 'botonWeb',
                        height: 50,
                        id: 'botonEnlaceWebContainerBotonesDescEmpresa',
                        itemId: 'botonEnlaceWebContainerBotonesDescEmpresa',
                        ui: 'decline-round',
                        width: '100%',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer',
                        id: 'spacerEnlaceDescEmpresa',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Provisional
                            Ext.Msg.alert('Aviso', 'Hacia el facebook de la empresa.', Ext.emptyFn);
                        },
                        baseCls: 'botonFacebook',
                        height: 50,
                        id: 'botonFacebookContainerBotonesDescEmpresa',
                        itemId: 'botonFacebookContainerBotonesDescEmpresa',
                        ui: 'action-round',
                        width: '100%'
                    },
                    {
                        xtype: 'spacer',
                        id: 'spacerFacebookDescEmpresa',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp("containerDescripcionEmpresa").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

                            //Hacia el view con los productos de la empresa
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerPromocionEmpresa"));
                            viewDelQuePasoHaciaContainerProductosEmpresa="containerDescripcionEmpresa";

                            Ext.getCmp("carouselPromocionEmpresa").removeAll();
                            Ext.getStore("storePromocionEmpresa").load();
                        },
                        baseCls: 'botonPromocion',
                        height: 50,
                        id: 'botonPromocionContainerBotonesDescEmpresa',
                        itemId: 'botonPromocionContainerBotonesDescEmpresa',
                        ui: 'decline-round',
                        width: '100%',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer',
                        id: 'spacerPromocionDescEmpresa',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp("containerDescripcionEmpresa").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

                            //alert("faerg;");


                            //Se pasa al tab del modulo de reservaciones

                            Ext.getCmp("dateFieldReservacionRestaurante").enable();
                            Ext.getCmp("selectFieldHoraReservaRestaurante").enable();


                            viewDelQuePasoAlViewDeReserva="containerDescripcionEmpresa";



                            //Se configura para que aparezca automaticamente la fecha del evento
                            var fechaParaDidiReserva= new Date();
                            //var fechaParaDidiReservaString= Ext.getStore("storeDescripcionEventos").first().get("fecha");
                            //fechaParaDidiReserva.setFullYear(parseFloat(fechaParaDidiReservaString.slice(0,4)),parseFloat(fechaParaDidiReservaString.slice(5,7))-1,parseFloat(fechaParaDidiReservaString.slice(8)));
                            Ext.getCmp("dateFieldReservacionRestaurante").setValue(fechaParaDidiReserva);

                            Ext.getCmp("selectFieldHoraReservaRestaurante").setPlaceHolder(fechaParaDidiReserva.getHours()+":"+fechaParaDidiReserva.getMinutes()+":00");



                            /*
                            if(fechaParaDidiReserva.getHours()>12){
                            //    alert("is");
                            if(fechaParaDidiReserva.getMinutes()<10){
                                horaReservaEmpresa=fechaParaDidiReserva.getHours()-12;
                                Ext.getCmp("selectFieldHoraReservaRestaurante").setPlaceHolder(horaReservaEmpresa+":"+"0"+fechaParaDidiReserva.getMinutes()+" "+"p.m.");
                            }
                            horaReservaEmpresa=fechaParaDidiReserva.getHours()-12;
                            Ext.getCmp("selectFieldHoraReservaRestaurante").setPlaceHolder(horaReservaEmpresa+":"+fechaParaDidiReserva.getMinutes()+" "+"p.m.");

                        }
                        else{
                            if(fechaParaDidiReserva.getMinutes()<10){
                                alert(fechaParaDidiReserva.getMinutes());
                                Ext.getCmp("selectFieldHoraReservaRestaurante").setPlaceHolder(fechaParaDidiReserva.getHours()+":"+fechaParaDidiReserva.getMinutes()+" "+"a.m.");
                            }
                            Ext.getCmp("selectFieldHoraReservaRestaurante").setPlaceHolder(fechaParaDidiReserva.getHours()+":"+fechaParaDidiReserva.getMinutes()+" "+"a.m.");
                        }
                        */



                        Ext.getStore("storeConfigDidiReserva").getProxy().setExtraParam('idClienteParam',Ext.getStore("storeEmpresaEnDescripcionEmpresa").first().get("idCliente"));
                        Ext.getStore("storeConfigDidiReserva").load();


                        //{'idClienteParam': 1}


                        },
                        baseCls: 'botonDescReserva',
                        height: 50,
                        id: 'botonReservaContainerBotonesDescEmpresa',
                        itemId: 'botonReservaContainerBotonesDescEmpresa',
                        ui: 'decline-round',
                        width: '100%',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer',
                        id: 'spacerReservaDescEmpresa',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp("containerDescripcionEmpresa").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

                            //Con estas lineas, se pasa hacia el view de Listado total de las empresas
                            //pertenecientes a la subcategoria a la cual se le dio click
                            //Primero se especifica el PHP, luego se envia el extraParam y por ultimo load
                            Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setUrl("http://www.didicr.com/php/sucursal/clienteSucursal.php");
                            Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setExtraParam('sucursalParam',Ext.getStore("storeEmpresaEnDescripcionEmpresa").first().get("idCliente"));
                            viewDelQuePasoHaciaListadoTotalEmpresas="containerDescripcionEmpresa";
                            Ext.getStore("storeListaEmpresasEnSubcategoria").load();



                        },
                        baseCls: 'botonSucursal',
                        height: 50,
                        id: 'botonSucursalesContainerBotonesDescEmpresa',
                        itemId: 'botonSucursalesContainerBotonesDescEmpresa',
                        ui: 'decline-round',
                        width: '100%',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer',
                        id: 'spacerSucursalesDescEmpresa',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Con estas lineas, se pasa hacia el view de Listado total de las empresas
                            //pertenecientes a la subcategoria a la cual se le dio click
                            //Primero se especifica el PHP, luego se envia el extraParam y por ultimo load
                            Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setUrl("http://www.didicr.com/php/sucursal/clienteSucursal.php");
                            Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setExtraParam('sucursalParam',Ext.getStore("storeEmpresaEnDescripcionEmpresa").first().get("idCliente"));
                            viewDelQuePasoHaciaListadoTotalEmpresas="containerDescripcionEmpresa";
                            Ext.getStore("storeListaEmpresasEnSubcategoria").load();



                        },
                        baseCls: 'botonPresupuesto',
                        height: 50,
                        id: 'botonPresupuestoContainerBotonesDescEmpresa',
                        itemId: 'botonPresupuestoContainerBotonesDescEmpresa',
                        ui: 'decline-round',
                        width: '100%',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer',
                        id: 'spacerPresupuestoDescEmpresa',
                        maxHeight: 20,
                        minHeight: 20,
                        width: 10
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onImagenToolbarContainerDescripcionEmpresaTap',
                event: 'tap',
                delegate: '#imagenToolbarContainerDescripcionEmpresa'
            }
        ]
    },

    onImagenToolbarContainerDescripcionEmpresaTap: function(img, e, options) {
        //Todo logo de Didi al dalre click va de vuelta a containerInicio
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    }

});