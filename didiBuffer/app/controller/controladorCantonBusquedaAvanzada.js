/*
 * File: app/controller/controladorCantonBusquedaAvanzada.js
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

Ext.define('MyApp.controller.controladorCantonBusquedaAvanzada', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            list: '#listaCantonBusquedaAvanzada'
        },

        control: {
            "list": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        //Primero se despliega el panel con los cantones
        Ext.getCmp("panelCantonBusquedaAvanzada").setHidden(1);
        //Luego se le da el contenido al boton que hace notar cual fue el canton
        //clickeado
        Ext.getCmp("botonCantonBusquedaAvanzada").setText("<p style='font-size: 60%;'> " +record.get("nombreCanton")+ "</p>");
        Ext.getCmp("botonCantonBusquedaAvanzada").setItemId(record.get("nombreCanton"));
    }

});