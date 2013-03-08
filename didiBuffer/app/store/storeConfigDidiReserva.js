/*
 * File: app/store/storeConfigDidiReserva.js
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

Ext.define('MyApp.store.storeConfigDidiReserva', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.modelConfigDidiReserva'
    ],

    config: {
        model: 'MyApp.model.modelConfigDidiReserva',
        storeId: 'storeConfigDidiReserva',
        proxy: {
            type: 'jsonp',
            extraParams: {
                idClienteParam: 1
            },
            url: 'http://www.didicr.com/php/moduloReserva/moduloReserva.php',
            reader: {
                type: 'json',
                rootProperty: 'ptm'
            }
        },
        listeners: [
            {
                fn: 'onJsonpstoreLoad',
                event: 'load'
            }
        ]
    },

    onJsonpstoreLoad: function(store, records, successful, operation, eOpts) {


        //--------------------------------CONFIGURACION DE DIDIReserva------------------------------------------------------
        Ext.getCmp("spinnerFieldModuloReservaciones").setValue(records[0].get("cantidadPersonasMinimo"));
        Ext.getCmp("spinnerFieldModuloReservaciones").setMaxValue(records[0].get("cantidadPersonasMaximo"));
        Ext.getCmp("spinnerFieldModuloReservaciones").setMinValue(records[0].get("cantidadPersonasMinimo"));



        //[{"text":"1","value":1},{"text":"2","value":2},{"text":"3","value":3},{"text":"4","value":4},{"text":"5","value":5},{"text":"6","value":6},{"text":"7","value":7},{"text":"8","value":8},{"text":"9","value":9},{"text":"10","value":10},{"text":"11","value":11},{"text":"12","value":12},{"text":"13","value":13}]

        //alert(records[0].get("locacionModuloReserva"));


        stringParaDataPickerSlotHoraReserva="";
        //Ciclo para separar cada elemento del store.
        for (var i = 1, limit = parseFloat(records[0].get("locacionModuloReserva")); i < (limit+1); i++) {
            stringParaDataPickerSlotHoraReserva=stringParaDataPickerSlotHoraReserva+'{"text":'+i+',"value":'+i+'},';
            //    alert("fe;");
        }

        Ext.getCmp("pickerSlotElegirMesaDidiReserva").setData('['+stringParaDataPickerSlotHoraReserva.slice(0,stringParaDataPickerSlotHoraReserva.length-1)+',{"text":"","value":""}]');
        //Ext.getCmp("pickerElegirOcasion").setHidden(0);
        //Ext.getCmp("panelElegirOcasionReservacionRestaurante").setHidden(0);



        Ext.getCmp("textAreaNotaAdicionalModuloReservaciones").setValue(records[0].get("notaAdicionalModuloReserva"));

        //alert('<img src="'+records[0].get("imagenLocacionModuloReserva")+'" width="100%" height="55%">');
        Ext.getCmp("panelElegirMesaReservacionRestaurante").setHtml('<img src="'+records[0].get("imagenLocacionModuloReserva")+'" width="100%" height="55%">');
        //-----------------------------------------------------------------------------------------------------------------
        //alert(records[0].get("imagenLocacionModuloReserva"));



        //alert(parseFloat(records[0].get("horaInicio").slice(0,2)));
        //alert(parseFloat(records[0].get("horaFinal").slice(0,2)));





        stringParaDataPickerSlotHorasDidiReserva="";
        //Ciclo para separar cada elemento del store.
        for (var iHrs = parseFloat(records[0].get("horaInicio").slice(0,2)), limitHrs = parseFloat(records[0].get("horaFinal").slice(0,2)); iHrs <= limitHrs; iHrs++) {
            stringParaDataPickerSlotHorasDidiReserva=stringParaDataPickerSlotHorasDidiReserva+'{"text":'+iHrs+',"value":'+iHrs+'},';
            //    alert("fe;");
        }

        //alert('['+stringParaDataPickerSlotHorasDidiReserva.slice(0,stringParaDataPickerSlotHorasDidiReserva.length-1)+',{"text":"","value":""}]');
        Ext.getCmp("pickerSlotHoraEscogenciaHoraDidiReserva").setData('['+stringParaDataPickerSlotHorasDidiReserva.slice(0,stringParaDataPickerSlotHorasDidiReserva.length-1)+',{"text":"","value":""}]');













        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerModuloReservaciones"));


    }

});