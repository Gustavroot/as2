/*
 * File: app/view/containerInicio.js
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

Ext.define('MyApp.view.containerInicio', {
    extend: 'Ext.Container',
    alias: 'widget.containerinicio',

    config: {
        id: 'containerInicio',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                border: 0,
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerInicio',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerInicio',
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
                        id: 'botonDespliegueInfoPerfilUsuario',
                        left: '1%',
                        top: '20%',
                        ui: 'action-round',
                        width: '13%'
                    }
                ]
            },
            {
                xtype: 'carousel',
                docked: 'top',
                height: '25%',
                id: 'carouselBannerPrincipal',
                itemId: 'carouselBannerPrincipal',
                width: '100%'
            },
            {
                xtype: 'image',
                docked: 'top',
                height: '7%',
                html: '<img src="http://www.didicr.com/imagenes/rapidos/tituloDidiRapidos.png" height="100%" width="100%">',
                id: 'imagenTituloDidiRapidos',
                itemId: 'myimage43',
                width: '100%'
            },
            {
                xtype: 'container',
                docked: 'top',
                height: '30%',
                id: 'containerDataViewDidiRapidos',
                itemId: 'containerDataViewDidiRapidos',
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'dataview',
                        centered: true,
                        docked: 'top',
                        height: '100%',
                        id: 'dataViewDidiRapidos',
                        itemId: 'dataViewDidiRapidos',
                        top: '10%',
                        width: '100%',
                        layout: {
                            type: 'hbox'
                        },
                        scrollable: 'horizontal',
                        emptyText: 'Error en la base de datos...',
                        inline: {
                            wrap: false
                        },
                        itemTpl: [
                            '<div style="margin-right: 0%; margin-left: 0%;">',
                            '    <img src="{imagen}" width="80%" height="80%" />',
                            '',
                            '</div>',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ],
                        loadingText: 'Cargando...'
                    }
                ]
            },
            {
                xtype: 'container',
                docked: 'top',
                height: '7%',
                html: '<img src="http://www.didicr.com/imagenes/directorio/barraDirectorio.png" height="100%" width="100%">',
                id: 'containerTituloDirectorio',
                itemId: 'containerTituloDirectorio',
                width: '100%',
                layout: {
                    type: 'fit'
                }
            },
            {
                xtype: 'container',
                docked: 'top',
                height: '21%',
                id: 'containerImagenesDirectorio',
                itemId: 'containerImagenesDirectorio',
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Con este if se carga el store que contiene a las existentes Categorias
                            if(Ext.getStore("storeCategorias").isLoaded()===false){
                                Ext.getStore("storeCategorias").load();
                            }
                            //Ademas, hay que pasar al view donde estan todas las categorias
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerCategorias"));
                        },
                        baseCls: 'botonCategoria',
                        docked: 'left',
                        height: '92%',
                        id: 'botonDirectorioCategorias',
                        left: '3%',
                        maxHeight: 196,
                        maxWidth: 196,
                        top: '4%',
                        width: '29%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Hay que pasar al view correspondiente de Geolocalizacion, que dara una
                            //busqueda por Listado y por Mapa
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerFormularioGeolocalizacion"));
                        },
                        baseCls: 'botonLugar',
                        height: '92%',
                        itemId: 'botonDirectorioMiLugar',
                        left: '34.5%',
                        maxHeight: 196,
                        maxWidth: 196,
                        top: '4%',
                        width: '32%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Se pasa al view de directorio Avanzado para hacer una busqueda por subcat, 
                            //cat, canton, provincia y palabra clave
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerBusquedaAvanzada"));
                        },
                        baseCls: 'botonAvanzado',
                        height: '92%',
                        id: 'botonDirectorioAvanzado',
                        maxHeight: 196,
                        maxWidth: 196,
                        right: '3%',
                        top: '4%',
                        width: '29%'
                    }
                ]
            }
        ]
    }

});