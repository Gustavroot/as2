/*
 * File: app/controller/controladorListaSubategoriasBusquedaAvanzada.js
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

Ext.define('MyApp.controller.controladorListaSubategoriasBusquedaAvanzada', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            list: '#listaSubcategoriasBusquedaAvanzada'
        },

        control: {
            "list": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        //Con esta linea se vuelve a esconder el panel de Subcategorias para la busq
        //avanzada
        Ext.getCmp("panelSubcategoriaBusquedaAvanzada").setHidden(1);
        //Y con esta linea se escribe el Text en el boton de Subcategorias en busq
        //avanzada
        Ext.getCmp("botonSubcategoriaBusquedaAvanzada").setText("<p style='font-size: 60%;'> " +record.get("nombre")+ "</p>");
        Ext.getCmp("botonSubcategoriaBusquedaAvanzada").setItemId(record.get("nombre"));
    }

});