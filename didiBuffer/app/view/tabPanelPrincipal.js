/*
 * File: app/view/tabPanelPrincipal.js
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

Ext.define('MyApp.view.tabPanelPrincipal', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabpanelprincipal',

    requires: [
        'MyApp.view.containerLogIn',
        'MyApp.view.containerInicio',
        'MyApp.view.containerEventos',
        'MyApp.view.containerMapaSolicitudTaxi',
        'MyApp.view.containerCategorias',
        'MyApp.view.containerAppDidiRapidos',
        'MyApp.view.containerMapaPrincipal',
        'MyApp.view.containerMapa',
        'MyApp.view.containerOfertas',
        'MyApp.view.containerAyuda',
        'MyApp.view.containerSubcategorias',
        'MyApp.view.containerListaEmpresasEnSubcategoria',
        'MyApp.view.containerDescripcionEmpresa',
        'MyApp.view.containerSubEventos',
        'MyApp.view.containerDescripcionEventos',
        'MyApp.view.containerFormularioGeolocalizacion',
        'MyApp.view.containerModuloReservaciones',
        'MyApp.view.containerMapaEventos',
        'MyApp.view.containerCalendarioEventos',
        'MyApp.view.containerBusquedaAvanzada',
        'MyApp.view.containerPromocionEmpresa',
        'MyApp.view.containerNotificacionesPerfilUsuario',
        'MyApp.view.containerReservasPerfilUsuario',
        'MyApp.view.containerFavoritosEmpresasPerfilUsuario',
        'MyApp.view.containerFavoritosEventosPerfilUsuario',
        'MyApp.view.containerPerfilPerfilUsuario'
    ],

    config: {
        id: 'tabPanelPrincipal',
        itemId: 'tabPanelPrincipal',
        style: 'background-color: black',
        layout: {
            animation: 'flip',
            type: 'card'
        },
        tabBar: {
            border: 0,
            docked: 'bottom',
            hidden: true,
            style: 'background: #3E3737'
        },
        items: [
            {
                xtype: 'containerlogin',
                hidden: true,
                title: 'login',
                iconCls: 'info'
            },
            {
                xtype: 'containerinicio',
                title: 'Inicio',
                iconCls: 'botonInicioTabpanel'
            },
            {
                xtype: 'containereventos',
                title: 'Eventos',
                iconCls: 'botonEventoTabpanel'
            },
            {
                xtype: 'containermapasolicitudtaxi',
                title: 'DiDiTaxi',
                iconCls: 'botonDidiTaxiTabpanel'
            },
            {
                xtype: 'containercategorias',
                hidden: true,
                title: 'categorias',
                iconCls: 'info'
            },
            {
                xtype: 'containerappdidirapidos',
                hidden: true,
                title: 'appDidiRapidos',
                iconCls: 'info'
            },
            {
                xtype: 'containerMapaPrincipal',
                hidden: true,
                title: 'mapaPrincipal',
                iconCls: 'maps'
            },
            {
                xtype: 'containermapa',
                title: 'Mapa',
                iconCls: 'botonMapaTabpanel'
            },
            {
                xtype: 'containerofertas',
                hidden: true,
                title: 'Ofertas',
                iconCls: 'download'
            },
            {
                xtype: 'containerayuda',
                title: 'Ayuda',
                iconCls: 'botonAyudaTabpanel'
            },
            {
                xtype: 'containersubcategorias',
                hidden: true,
                title: 'subcts',
                iconCls: 'info'
            },
            {
                xtype: 'containerlistaempresasensubcategoria',
                hidden: true,
                title: 'listaEmpresasEnSubcategoria',
                iconCls: 'info'
            },
            {
                xtype: 'containerdescripcionempresa',
                hidden: true,
                title: 'descripcionEmpresa',
                iconCls: 'info'
            },
            {
                xtype: 'containersubeventos',
                hidden: true,
                title: 'subEvento',
                iconCls: 'info'
            },
            {
                xtype: 'containerdescripcioneventos',
                hidden: true,
                title: 'descripcionEvento',
                iconCls: 'info'
            },
            {
                xtype: 'containerformulariogeolocalizacion',
                hidden: true,
                title: 'formularioGeolocalizacion',
                iconCls: 'info'
            },
            {
                xtype: 'containermoduloreservaciones',
                hidden: true,
                title: 'moduloReservaciones',
                iconCls: 'info'
            },
            {
                xtype: 'containermapaeventos',
                title: 'mapaEventos',
                iconCls: 'info'
            },
            {
                xtype: 'containercalendarioeventos',
                title: 'calendarioEventos',
                iconCls: 'info'
            },
            {
                xtype: 'containerbusquedaavanzada',
                hidden: true,
                title: 'busquedaAvanzada',
                iconCls: 'info'
            },
            {
                xtype: 'containerPromocionEmpresa',
                hidden: true,
                title: 'productosEmpresa',
                iconCls: 'info'
            },
            {
                xtype: 'containernotificacionesperfilusuario',
                hidden: true,
                title: 'notificacionesPerfilUsuario',
                iconCls: 'info'
            },
            {
                xtype: 'containerreservasperfilusuario',
                hidden: true,
                title: 'reservasPerfilUsuario',
                iconCls: 'info'
            },
            {
                xtype: 'containerfavoritosempresasperfilusuario',
                hidden: true,
                title: 'favoritosEmpresasPerfilUsuario',
                iconCls: 'info'
            },
            {
                xtype: 'containerfavoritoseventosperfilusuario',
                hidden: true,
                title: 'favoritosEventosPerfilUsuario',
                iconCls: 'info'
            },
            {
                xtype: 'containerperfilperfilusuario',
                hidden: true,
                title: 'perfilPerfilUsuario',
                iconCls: 'info'
            }
        ],
        listeners: [
            {
                fn: 'onTabPanelPrincipalActiveItemChange',
                event: 'activeitemchange'
            }
        ]
    },

    onTabPanelPrincipalActiveItemChange: function(container, value, oldValue, options) {
        //Este primer if permite que, cuando se pase a Eventos, se cargue el carousel,
        //y que ademas el elemento Activo sea el primero del store
        if(value==Ext.getCmp("containerEventos")){
            Ext.getStore("storeEventos").load();
        }


        //Con este if se hacen varias cosas... se oculta el tabBar, se carga el store de
        //categorias para que salga en el dataview inferior, tambien dependiendo de 
        //adonde se venga, se oculta o no el dataview inferior, y finalmente se le
        //quita al mapa el uso del currentLocation
        if(value==Ext.getCmp("containerMapaPrincipal")){
            Ext.getCmp("tabPanelPrincipal").getTabBar().setHidden(1);
            tabDelQueSePasaHaciaTabMapa=oldValue;
            Ext.getStore("storeCategorias").load();
            if(oldValue==Ext.getCmp("containerDescripcionEmpresa") || oldValue==Ext.getCmp("containerListaEmpresasEnSubcategoria")){
            }
            else{
                Ext.getCmp("dataViewDidiMapaPrincipalEnTabPanel").setHidden(0);
            }
            Ext.getCmp("mapaContainerMapa").setUseCurrentLocation(0);
        }



        if(value==Ext.getCmp("containerMapaSolicitudTaxi")){
            viewDelQuePasoHaciaDidiTaxi=oldValue;
        }



        //Esto hace que, cuando se ingrese a containerMapaEventos, el mapa de eventos
        //desde la primera vez que se ve no tenga curent location Activado... para
        //evitar que se este devolviendo a la posicion actual
        if(value==Ext.getCmp("containerMapaEventos")){

            Ext.getCmp("mapaCercaniaEventos").setUseCurrentLocation(0);
        }



        //Esto hace que, cuando se ingrese a containerMapaEventos, el mapa de eventos
        //desde la primera vez que se ve no tenga curent location Activado... para
        //evitar que se este devolviendo a la posicion actual
        if(value==Ext.getCmp("containerMapaSolicitudTaxi")){
            Ext.getCmp("mapaSolicitudTaxi").setUseCurrentLocation(0);
        }







        if(value==Ext.getCmp("containerNotificacionesPerfilUsuario")){
            viewDelQuePasoHaciaContainerNotificacionesPerfilUsuario=oldValue;
        }


        if(value==Ext.getCmp("containerReservasPerfilUsuario")){
            viewDelQuePasoHaciaContainerReservasPerfilUsuario=oldValue;
        }



        if(value==Ext.getCmp("containerFavoritosEmpresasPerfilUsuario")){
            viewDelQuePasoHaciaContainerFavoritosEmpresasPerfilUsuario=oldValue;
        }


        if(value==Ext.getCmp("containerFavoritosEventosPerfilUsuario")){
            viewDelQuePasoHaciaContainerFavoritosEventosPerfilUsuario=oldValue;
        }


        if(value==Ext.getCmp("containerPerfilPerfilUsuario")){
            viewDelQuePasoHaciaContainerPerfilPerfilUsuario=oldValue;
        }








        //Con este if, si de esta saliendo de Eventos, entonces se descarga el store
        //que tiene la informacion de eventos, y ademas se deja Eventos para que la pro-
        //xima vez que se ingrese, este normal
        if(oldValue==Ext.getCmp("containerEventos")){
            Ext.getCmp("containerPrincipalEventos").setMasked(false);

            Ext.getStore("storeEventos").removeAll();
            Ext.getCmp("carouselEventos").removeAll();
        }


        //Con este if se limpia el view de descripcion Empresa
        if(oldValue==Ext.getCmp("containerDescripcionEmpresa")){
            //    Ext.getCmp("botonMapaContainerBotonesDescEmpresa").setHidden(0);
            //    Ext.getCmp("botonEnlaceWebContainerBotonesDescEmpresa").setHidden(0);
            //    Ext.getCmp("botonFacebookContainerBotonesDescEmpresa").setHidden(0);
            //    Ext.getCmp("botonDidiRapidosContainerBotonesDescEmpresa").setHidden(0);
        }


        //Con el siguiente if, se remueven los elementos en los stores para el view
        //de Mapa, al salirse de el... PENSARLO BIEN
        if(oldValue==Ext.getCmp("containerMapa")){
            //Ext.getStore("storeListadoTotalDeLasEmpresas").removeAll();
        }


        //En caso de estar navegando en la busqueda por Categoria, se borran las listas
        //en cualquiera de los dos listados posibles... PENSARLO BIEN
        if(oldValue==Ext.getCmp("containerSubcategorias") && value!=Ext.getCmp("containerListaEmpresasEnSubcategoria") ){
            //Ext.getStore("storeSubcategorias").removeAll();
        }


        //Con este codigo, si se pasa de la lista de empresas, a la empresa, entonces
        //no se limpia la lista de empresas, pero si se sale hacia otro tab, entonces
        //si se limpia
        if(oldValue==Ext.getCmp("containerListaEmpresasEnSubcategoria") && value!=Ext.getCmp("containerDescripcionEmpresa") ){
            if(value==Ext.getCmp("containerMapaPrincipal")){
            }
            else{
                Ext.getStore("storeListaEmpresasEnSubcategoria").removeAll();
            }
        }


        //Con este codigo, si se sale del container de descr Eventos, se limpia ese store
        //... PENSARLO BIEN
        if(value==Ext.getCmp("containerDescripcionEventos")){
        }




        if(value==Ext.getCmp("containerSubcategorias")){
            if(oldValue.getId()=="containerInicio"){
                //        alert("fae;");
                Ext.getCmp("imagenBannerEmpresaPrincipalCategoria").setLeft("25%");
                Ext.getCmp("imagenBannerEmpresaPrincipalCategoria").setWidth("50%");
            }

            else if(oldValue.getId()=="containerCategorias"){
                //        aler("fa'ekjf a");
                Ext.getCmp("imagenBannerEmpresaPrincipalCategoria").setLeft("0%");
                Ext.getCmp("imagenBannerEmpresaPrincipalCategoria").setWidth("100%");
            }


            //imagenBannerEmpresaPrincipalCategoria
        }






        if(value==Ext.getCmp("containerInicio")){
            //    alert("feert");
        }


        //alert("fetp");
        oldValue.setMasked(false);
        //Ext.getCmp("containerPrincipalEventos").setMasked(false);


    }

});