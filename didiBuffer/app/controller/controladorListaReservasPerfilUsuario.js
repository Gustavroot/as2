/*
 * File: app/controller/controladorListaReservasPerfilUsuario.js
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

Ext.define('MyApp.controller.controladorListaReservasPerfilUsuario', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            list: '#listaREservasPerfilUsuario'
        },

        control: {
            "list": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {

        if(e.target.id=="botonVerDetallesReservaPerfilUsuario"){
            Ext.getCmp("panelResumenInfoPerfilUsuario").setHidden(0);
            Ext.getCmp("panelResumenInfoPerfilUsuario").setHtml("<p> Número de reserva: "+record.get("idReserva")+"</p>"+"<p> Organizador del evento: "+record.get("idCliente")+"</p>"+"<p> Nombre del evento: "+record.get("nombreEvento")+"</p>"+"<p> Fecha: "+record.get("fechaReserva")+"</p>"+"<p> Hora: "+record.get("horaReserva")+"</p>"+"<p> Cantidad de personas: "+record.get("cantidadPersonas")+"</p>"+"<p> Nota adicional: "+record.get("notaReserva")+"</p>"+"<p> Mesa: "+record.get("locacionReserva")+"</p>"+"<p> Ocasión de la reserva: "+record.get("ocasionReserva")+"</p>");
            //    Ext.getStore("storeReservaEvento").getProxy().get("")

        }


        if(e.target.id=="botonVerCancelarReservaPerfilUsuario"){
            Ext.getStore("storeCancelarReservaPerfilUsuario").getProxy().setExtraParam('idReservaParam', record.get("idReserva"));
            Ext.getStore("storeCancelarReservaPerfilUsuario").getProxy().setExtraParam('estadoReservaParam', 2);
            Ext.getStore("storeCancelarReservaPerfilUsuario").load();
            Ext.Msg.alert('Aviso', 'Usted ha cancelado la reserva número '+record.get("idReserva"), Ext.emptyFn);
            Ext.getStore("storeReservaEvento").load();
        }
    }

});