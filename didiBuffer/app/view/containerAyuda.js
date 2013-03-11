/*
 * File: app/view/containerAyuda.js
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

Ext.define('MyApp.view.containerAyuda', {
    extend: 'Ext.Container',
    alias: 'widget.containerayuda',

    config: {
        html: 'En construcción...',
        id: 'containerAyuda',
        itemId: 'containerAyuda',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerAyuda',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerAyuda',
                        itemId: 'myimage2',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            if (Ext.getCmp('containerDelPerfilUsuario').isHidden()) {
                                //Ext.getCmp('containerDelPerfilUsuario').show();   
                                //    Ext.getCmp("carouselBannerPrincipal").setDisabled(1);
                                //    alert("fa");
                            }
                            else{
                                //    Ext.getCmp("carouselBannerPrincipal").enable();
                            }




                            Ext.getCmp('containerDelPerfilUsuario').setHidden(0);


                            var main = Ext.get('containerParaTabPanelPrincipal');


                            if (main.hasCls('out')) {
                                main.removeCls('out');
                                main.addCls('in'); 
                                //button.setText('Usuario');
                            } else {
                                main.removeCls('in');    
                                main.addCls('out');    
                                //button.setText('Usuario');         
                            }


                        },
                        baseCls: 'botonUsuario',
                        height: '60%',
                        id: 'botonDespliegueInfoPerfilUsuarioEventosAyuda',
                        left: '1%',
                        top: '20%',
                        ui: 'action-round',
                        width: '13%'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onImagenToolbarContainerAyudaTap',
                event: 'tap',
                delegate: '#imagenToolbarContainerAyuda'
            }
        ]
    },

    onImagenToolbarContainerAyudaTap: function(img, e, options) {
        //Para devolverse hacia el container Inicio desde Ayuda
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    }

});