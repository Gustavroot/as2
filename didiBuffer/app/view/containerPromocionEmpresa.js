/*
 * File: app/view/containerPromocionEmpresa.js
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

Ext.define('MyApp.view.containerPromocionEmpresa', {
    extend: 'Ext.Container',
    alias: 'widget.containerPromocionEmpresa',

    config: {
        id: 'containerPromocionEmpresa',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerPromocionEmpresa',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerPromocionEmpresa',
                        itemId: 'myimage18',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Se devuleve hacia containerInicio, ya que se esta en busqueda
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp(viewDelQuePasoHaciaContainerProductosEmpresa));
                        },
                        baseCls: 'botonAtras',
                        height: '80%',
                        id: 'botonAtrasContainerPromocionEmpresa',
                        right: '2%',
                        top: '10%',
                        ui: 'action-round',
                        width: '15%'
                    }
                ]
            },
            {
                xtype: 'carousel',
                height: '100%',
                id: 'carouselPromocionEmpresa',
                left: '8%',
                width: '84%'
            },
            {
                xtype: 'image',
                height: '15%',
                html: '<img src="./resources/images/arrow_right.png" width="100%" height="100%">',
                id: 'imagenMoverDerechaCarouselPromocionEmpresaX',
                itemId: 'myimage46',
                right: 0,
                top: '40%',
                width: '8%'
            },
            {
                xtype: 'image',
                height: '15%',
                html: '<img src="./resources/images/arrow_left.png" width="100%" height="100%">',
                id: 'imagenMoverIzquierdaCarouselPromocionEmpresa',
                itemId: 'myimage44',
                left: '0%',
                top: '40%',
                width: '8%'
            }
        ],
        listeners: [
            {
                fn: 'onImagenToolbarContainerGeolocalizacionTap1',
                event: 'tap',
                delegate: '#imagenToolbarContainerPromocionEmpresa'
            },
            {
                fn: 'onImagenMoverDerechaCarouselPromocionEmpresaXTap',
                event: 'tap',
                delegate: '#imagenMoverDerechaCarouselPromocionEmpresaX'
            },
            {
                fn: 'onImagenMoverDerechaCarouselPromocionEmpresaTap1',
                event: 'tap',
                delegate: '#imagenMoverIzquierdaCarouselPromocionEmpresa'
            }
        ]
    },

    onImagenToolbarContainerGeolocalizacionTap1: function(img, e, options) {
        //Todo logo de Didi redirige hacia containerInicio
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    },

    onImagenMoverDerechaCarouselPromocionEmpresaXTap: function(img, e, options) {
        //alert("faweghj");

        if(Ext.getCmp("carouselPromocionEmpresa").getActiveIndex()<(Ext.getCmp("carouselPromocionEmpresa").getInnerItems().length-1)){
            Ext.getCmp("carouselPromocionEmpresa").next();
        }

    },

    onImagenMoverDerechaCarouselPromocionEmpresaTap1: function(img, e, options) {
        if(Ext.getCmp("carouselPromocionEmpresa").getActiveIndex()>0){
            Ext.getCmp("carouselPromocionEmpresa").previous();
        }



    }

});