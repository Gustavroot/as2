/*
 * File: app/view/containerSubcategorias.js
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

Ext.define('MyApp.view.containerSubcategorias', {
    extend: 'Ext.Container',
    alias: 'widget.containersubcategorias',

    config: {
        id: 'containerSubcategorias',
        itemId: 'containerSubcategorias',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerSubcategorias',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerSubcategorias',
                        itemId: 'myimage30',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Esta linea es para cambiar al tab Inicio
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp(viewDelQuePasoHaciaSubcategorias));
                            //Con esta linea se remueve lo q haya en subcategorias, para evitar sobrecarga
                            Ext.getStore("storeSubcategorias").removeAll();
                        },
                        baseCls: 'botonAtras',
                        height: '80%',
                        id: 'botonAtrasContainerSubcategorias',
                        right: '2%',
                        top: '10%',
                        ui: 'action-round',
                        width: '15%'
                    }
                ]
            },
            {
                xtype: 'image',
                height: '33%',
                id: 'imagenBannerEmpresaPrincipalCategoria',
                itemId: 'myimage29',
                left: '25%',
                top: '67%',
                width: '50%'
            },
            {
                xtype: 'container',
                height: '0.5%',
                id: 'containerRayaSeparadoraContainerSubcategorias',
                style: 'background-color: black',
                top: '66%',
                width: '100%'
            },
            {
                xtype: 'list',
                height: '66%',
                id: 'listaViewSubcategorias',
                itemId: 'listaViewSubcategorias',
                width: '100%',
                layout: {
                    type: 'fit'
                },
                itemTpl: [
                    '<div>{nombre} ({contiene})',
                    '</div>'
                ],
                loadingText: 'Cargando...',
                store: 'storeSubcategorias',
                grouped: true,
                indexBar: {
                    id: 'indexBarSubcategorias',
                    itemId: 'indexBarSubcategorias',
                    width: '5%'
                },
                plugins: [
                    {
                        autoPaging: true,
                        loadMoreText: 'Cargar más...',
                        noMoreRecordsText: 'Final',
                        type: 'listpaging'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onImagenToolbarContainerSubcategoriasTap',
                event: 'tap',
                delegate: '#imagenToolbarContainerSubcategorias'
            },
            {
                fn: 'onImagenBannerEmpresaPrincipalCategoriaTap',
                event: 'tap',
                delegate: '#imagenBannerEmpresaPrincipalCategoria'
            },
            {
                fn: 'onListaViewSubcategoriasItemTap',
                event: 'itemtap',
                delegate: '#listaViewSubcategorias'
            }
        ]
    },

    onImagenToolbarContainerSubcategoriasTap: function(img, e, options) {
        //Para devolverse hacia container Inicio dando click en el Logo Didi
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    },

    onImagenBannerEmpresaPrincipalCategoriaTap: function(img, e, options) {
        //Al darle click al banner inferior por debado del listado de Subcategorias,
        //deberia enviar hacia la descripcion de la empresa dueña de ese banner
        funcionParaAbrirDescEmpresa(Ext.getStore("storeCategorias").getAt(Ext.getStore("storeCategorias").find("nombre",Ext.getStore("storeSubcategorias").first().get("categoria"),false,true,true)).get("idCliente"),"containerSubcategorias");
    },

    onListaViewSubcategoriasItemTap: function(dataview, index, target, record, e, options) {
        Ext.getCmp("containerSubcategorias").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

        //Con estas lineas, se pasa hacia el view de Listado total de las empresas
        //pertenecientes a la subcategoria a la cual se le dio click
        //Primero se especifica el PHP, luego se envia el extraParam y por ultimo load
        Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setUrl("http://www.didicr.com/php/cliente/cliente.php");

        //Ext.getStore("storeListaEmpresasEnSubcategoria").loadPage();


        Ext.getStore("storeListaEmpresasEnSubcategoria").loadPage(1);



        Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setExtraParam('subParam',record.get("idSubcategoria"));
        viewDelQuePasoHaciaListadoTotalEmpresas="containerSubcategorias";
        Ext.getStore("storeListaEmpresasEnSubcategoria").load();
    }

});