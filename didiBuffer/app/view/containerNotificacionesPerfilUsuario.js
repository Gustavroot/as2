/*
 * File: app/view/containerNotificacionesPerfilUsuario.js
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

Ext.define('MyApp.view.containerNotificacionesPerfilUsuario', {
    extend: 'Ext.Container',
    alias: 'widget.containernotificacionesperfilusuario',

    config: {
        id: 'containerNotificacionesPerfilUsuario',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerNotificacionesPerfilUsuario',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerNotificacionesPerfilUsuario',
                        itemId: 'myimage30',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Esta linea es para cambiar al tab anterior
                            //Ext.getCmp("tabPanelPrincipal").setActiveItem(viewDelQuePasoHaciaContainerNotificacionesPerfilUsuario);



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
                        id: 'botonAtrasContainerNotificacionesPerfilUsuario',
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
                fn: 'onImagenToolbarContainerSubcategoriasTap1',
                event: 'tap',
                delegate: '#imagenToolbarContainerNotificacionesPerfilUsuario'
            }
        ]
    },

    onImagenToolbarContainerSubcategoriasTap1: function(img, e, options) {
        //Para devolverse hacia container Inicio dando click en el Logo Didi
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    }

});