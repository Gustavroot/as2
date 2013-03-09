/*
 * File: app/view/containerBusquedaAvanzada.js
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

Ext.define('MyApp.view.containerBusquedaAvanzada', {
    extend: 'Ext.Container',
    alias: 'widget.containerbusquedaavanzada',

    config: {
        id: 'containerBusquedaAvanzada',
        style: 'background-color: #6AF4FF',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerBusquedaAvanzada',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerBusquedaAvanzada',
                        itemId: 'myimage3',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Este boton de atras devuelve hacia el containerInicio
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
                        },
                        baseCls: 'botonAtras',
                        height: '80%',
                        id: 'botonAtrasContainerBusquedaAvanzada',
                        right: '2%',
                        top: '10%',
                        ui: 'action-round',
                        width: '15%'
                    }
                ]
            },
            {
                xtype: 'container',
                height: '10%',
                html: '<b><center> Búsqueda avanzada </center></b>',
                id: 'containerTituloBusquedaAvanzada',
                top: '2%',
                width: '100%'
            },
            {
                xtype: 'fieldset',
                height: '25%',
                id: 'fieldSetBusquedaAvanzada',
                style: 'background-color: white',
                top: '15%',
                width: '100%',
                items: [
                    {
                        xtype: 'textfield',
                        height: '50%',
                        id: 'textFieldBusquedaAvanzada',
                        width: '100%',
                        label: '<center> Búsqueda </center>',
                        labelWidth: '100%'
                    },
                    {
                        xtype: 'textfield',
                        height: '50%',
                        id: 'textFieldBusquedaAvanzada2',
                        width: '100%',
                        placeHolder: 'Digite aquí su búsqueda'
                    }
                ]
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    //Primero se carga el store de Categorias, para que aparezcan en el dataview
                    //del panel, y luego se despliega el panel
                    Ext.getStore("storeCategorias").load();
                    Ext.getCmp("panelCategoriaBusquedaAvanzada").setHidden(0);
                },
                height: '10%',
                id: 'botonCategoriaBusquedaAvanzada',
                itemId: 'Cualquiera',
                left: '10%',
                top: '52%',
                ui: 'action-round',
                width: '35%',
                text: '<p style="font-size: 60%;"> Cualquiera </p>'
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    //Se hace visible el panel para elegir la Provincia para esta busqueda
                    //avanzada
                    Ext.getCmp("panelProvinciasBusquedaAvanzada").setHidden(0);
                },
                height: '10%',
                id: 'botonProvinciaBusquedaAvanzada',
                itemId: 'Cualquiera',
                left: '10%',
                top: '75%',
                ui: 'action-round',
                width: '35%',
                text: '<p style="font-size: 60%;"> Cualquiera </p>'
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    //Una vez que se han establecido todos los parametros de la busqueda, se
                    //inicia dicha busqueda
                    Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setUrl("http://www.didicr.com/php/busquedaAvanzada.php");
                    //Luego, hay que pasar por extraparam la palabra que se escribio en el campo
                    //proporcionado al usuario, asi como los otros 4 valores
                    Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setExtraParam('palabraClave',Ext.getCmp("textFieldBusquedaAvanzada2").getValue());
                    Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setExtraParam('categoria',Ext.getCmp("botonCategoriaBusquedaAvanzada").getItemId());
                    Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setExtraParam('subcategoria',Ext.getCmp("botonSubcategoriaBusquedaAvanzada").getItemId());
                    Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setExtraParam('provincia',Ext.getCmp("botonProvinciaBusquedaAvanzada").getItemId());
                    Ext.getStore("storeListaEmpresasEnSubcategoria").getProxy().setExtraParam('canton',Ext.getCmp("botonCantonBusquedaAvanzada").getItemId());
                    //Finalmente, se especifica el view del que se pasa hacia listado de empresas,
                    //asi como se hace el cargado del store que hace el trabajo
                    viewDelQuePasoHaciaListadoTotalEmpresas="containerBusquedaAvanzada";
                    Ext.getStore("storeListaEmpresasEnSubcategoria").load();
                },
                height: '8%',
                id: 'botonBuscarBusquedaAvanzada',
                left: '35%',
                top: '88%',
                ui: 'confirm-round',
                width: '30%',
                text: '<p style="font-size: 60%;"> Buscar </p>'
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    //Se hace visible el panel con el que se elige el canton para la busqueda
                    Ext.getCmp("panelCantonBusquedaAvanzada").setHidden(0);
                },
                height: '10%',
                id: 'botonCantonBusquedaAvanzada',
                itemId: 'Cualquiera',
                right: '10%',
                top: '75%',
                ui: 'action-round',
                width: '35%',
                text: '<p style="font-size: 60%;"> Cualquiera </p>'
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    //Con esta linea se hace que, al darle click a alguno de los elementos en el
                    //listado de subcategoras, se oculta el panel que contiene dicho listado
                    Ext.getCmp("panelSubcategoriaBusquedaAvanzada").setHidden(0);
                },
                height: '10%',
                id: 'botonSubcategoriaBusquedaAvanzada',
                itemId: 'Cualquiera',
                right: '10%',
                top: '52%',
                ui: 'action-round',
                width: '35%',
                text: '<p style="font-size: 60%;"> Cualquiera </p>'
            },
            {
                xtype: 'container',
                height: '6%',
                html: '<center> <p style="font-family:texgyrechorus;color:black;"> Categoría </p> </center>',
                id: 'containerCategoriaBusquedaAvanzada',
                left: '10%',
                top: '44%',
                width: '35%'
            },
            {
                xtype: 'container',
                height: '6%',
                html: '<center> <p style="font-family:texgyrechorus;color:black;"> Provincia </p> </center>',
                id: 'containerProvinciaBusquedaAvanzada',
                left: '10%',
                top: '67%',
                width: '35%'
            },
            {
                xtype: 'container',
                height: '6%',
                html: '<center> <p style="font-family:texgyrechorus;color:black;"> Cantón </p> </center>',
                id: 'containerCantonBusquedaAvanzada',
                right: '10%',
                top: '67%',
                width: '35%'
            },
            {
                xtype: 'container',
                height: '6%',
                html: '<center> <p style="font-family:texgyrechorus;color:black;"> Subcategoría </p> </center>',
                id: 'containerSubcategoriaBusquedaAvanzada',
                right: '10%',
                top: '44%',
                width: '35%'
            },
            {
                xtype: 'panel',
                height: '80%',
                hidden: true,
                id: 'panelCategoriaBusquedaAvanzada',
                itemId: 'mypanel',
                left: '15%',
                top: '10%',
                width: '70%',
                layout: {
                    type: 'fit'
                },
                modal: true,
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'Seleccione una categoría'
                    },
                    {
                        xtype: 'dataview',
                        id: 'dataCategoriaBusquedaAvanzada',
                        inline: true,
                        itemTpl: [
                            '<div>',
                            '    <table border="0" style=\'table-layout:fixed\'>',
                            '        <col width="55px">',
                            '        <tr>',
                            '            <td height="5">',
                            '                <i>',
                            '                    <b>',
                            '                        <font size="1">',
                            '                            ',
                            '                        </font>',
                            '                    </b>',
                            '                </i>',
                            '            </td>',
                            '        </tr>',
                            '        <tr height="55px">',
                            '            <td>',
                            '                <img src="{imagen}" width="45" height="45" />',
                            '            </td>',
                            '        </tr>',
                            '    </table>',
                            '</div>'
                        ],
                        loadingText: 'Cargando...',
                        store: 'storeCategorias'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '80%',
                hidden: true,
                id: 'panelSubcategoriaBusquedaAvanzada',
                left: '15%',
                top: '10%',
                width: '70%',
                layout: {
                    type: 'fit'
                },
                modal: true,
                items: [
                    {
                        xtype: 'list',
                        id: 'listaSubcategoriasBusquedaAvanzada',
                        itemTpl: [
                            '<div>{nombre}',
                            '</div>'
                        ],
                        store: 'storeSubcategorias',
                        plugins: [
                            {
                                autoPaging: true,
                                loadMoreText: 'Cargar más...',
                                noMoreRecordsText: 'Final',
                                type: 'listpaging'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '80%',
                hidden: true,
                id: 'panelProvinciasBusquedaAvanzada',
                left: '15%',
                top: '10%',
                width: '70%',
                layout: {
                    type: 'fit'
                },
                modal: true,
                items: [
                    {
                        xtype: 'list',
                        id: 'listaProvinciasBusquedaAvanzada',
                        itemTpl: [
                            '<div>{nombreProvincia}',
                            '</div>'
                        ],
                        store: 'storeProvinciasBusquedaAvanzada'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '80%',
                hidden: true,
                id: 'panelCantonBusquedaAvanzada',
                left: '15%',
                top: '10%',
                width: '70%',
                layout: {
                    type: 'fit'
                },
                modal: true,
                items: [
                    {
                        xtype: 'list',
                        id: 'listaCantonBusquedaAvanzada',
                        itemTpl: [
                            '<div>{nombreCanton}',
                            '</div>'
                        ],
                        store: 'storeCantonBusquedaAvanzada'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onImagenToolbarContainerBusquedaAvanzadaTap',
                event: 'tap',
                delegate: '#imagenToolbarContainerBusquedaAvanzada'
            }
        ]
    },

    onImagenToolbarContainerBusquedaAvanzadaTap: function(img, e, options) {
        //TOdo logo de DIdi redirige hacia el containerInicio
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    }

});