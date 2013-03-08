/*
 * File: app/view/containerCategorias.js
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

Ext.define('MyApp.view.containerCategorias', {
    extend: 'Ext.Container',
    alias: 'widget.containercategorias',

    config: {
        id: 'containerCategorias',
        itemId: 'containerCategorias',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerCategorias',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerCategorias',
                        itemId: 'myimage4',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Con esta linea se pasa nuevamente al view de Inicio
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
                        },
                        baseCls: 'botonAtras',
                        height: '80%',
                        id: 'botonAtrasContainerCategorias',
                        right: '2%',
                        top: '10%',
                        ui: 'action-round',
                        width: '15%'
                    }
                ]
            },
            {
                xtype: 'dataview',
                height: '100%',
                id: 'dataViewCategorias',
                itemId: 'dataViewCategorias',
                left: '5%',
                width: '95%',
                scrollable: 'vertical',
                inline: true,
                itemTpl: [
                    '<div>',
                    '    <table border="0" style=\'table-layout:fixed\'>',
                    '        <col width="90px">',
                    '        <tr>',
                    '            <td height="5">',
                    '                <i>',
                    '                    <b>',
                    '                        <font size="1">',
                    '                            <!-- <h1 style=\'font-family:serif;color:black;\'>{nombre}</h1> -->',
                    '                        </font>',
                    '                    </b>',
                    '                </i>',
                    '            </td>',
                    '        </tr>',
                    '        <tr height="110px">',
                    '            <td>',
                    '                <img src="{imagen}" width="76" height="76" />',
                    '            </td>',
                    '        </tr>',
                    '    </table>',
                    '</div>'
                ],
                loadingText: 'Cargando...',
                store: 'storeCategorias'
            }
        ],
        listeners: [
            {
                fn: 'onImagenToolbarContainerCategoriasTap',
                event: 'tap',
                delegate: '#imagenToolbarContainerCategorias'
            }
        ]
    },

    onImagenToolbarContainerCategoriasTap: function(img, e, options) {
        //Todas las imagenes de DiDiLogo escucharan un evento para regresar al container
        //inicio al ser presionadas
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    }

});