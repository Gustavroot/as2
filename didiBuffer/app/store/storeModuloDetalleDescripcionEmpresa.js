/*
 * File: app/store/storeModuloDetalleDescripcionEmpresa.js
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

Ext.define('MyApp.store.storeModuloDetalleDescripcionEmpresa', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.modelModuloDetalleDescripcionEmpresa'
    ],

    config: {
        model: 'MyApp.model.modelModuloDetalleDescripcionEmpresa',
        storeId: 'storeModuloDetalleDescripcionEmpresa',
        proxy: {
            type: 'jsonp',
            url: 'http://www.didicr.com/php/moduloDetalle/moduloDetallePorCliente.php',
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
        //A este store se llega cuando se le da al elemento de la lista en el
        //listado total de las empresas o al boton que esta ahi de Ir a Descripcion,
        //y luego se pasa al storeEmpresaEnDescripcionEmpresa, y despues se pasa a
        //este store



        if(records[0].get("moduloReserva")==0){
            Ext.getCmp("botonReservaContainerBotonesDescEmpresa").setHidden(1);
            Ext.getCmp("spacerReservaDescEmpresa").setHidden(1);

        }
        else{
            Ext.getCmp("botonReservaContainerBotonesDescEmpresa").setHidden(0);
            Ext.getCmp("spacerReservaDescEmpresa").setHidden(0);
        }


        //---------------------------------------------------------------------------------------------


        if(records[0].get("moduloPromocion")==0){
            Ext.getCmp("botonPromocionContainerBotonesDescEmpresa").setHidden(1);
            Ext.getCmp("spacerPromocionDescEmpresa").setHidden(1);

        }
        else{
            Ext.getCmp("botonPromocionContainerBotonesDescEmpresa").setHidden(0);
            Ext.getCmp("spacerPromocionDescEmpresa").setHidden(0);
        }


        //-----------------------------------------------------------------------------------------------

        //alert(records[0].get("moduloSucursal"));
        if(records[0].get("moduloSucursal")==0){
            Ext.getCmp("botonSucursalesContainerBotonesDescEmpresa").setHidden(1);
            Ext.getCmp("spacerSucursalesDescEmpresa").setHidden(1);

        }
        else{
            //    alert("fae");
            Ext.getCmp("botonSucursalesContainerBotonesDescEmpresa").setHidden(0);
            Ext.getCmp("spacerSucursalesDescEmpresa").setHidden(0);
        }

        //------------------------------------------------------------------------------------------


        if(records[0].get("moduloPresupuesto")==0){
            Ext.getCmp("botonPresupuestoContainerBotonesDescEmpresa").setHidden(1);
            Ext.getCmp("spacerPresupuestoDescEmpresa").setHidden(1);

        }
        else{
            Ext.getCmp("botonPresupuestoContainerBotonesDescEmpresa").setHidden(0);
            Ext.getCmp("spacerPresupuestoDescEmpresa").setHidden(0);
        }



        //------------------------------------------------------------------------------------------


        if(records[0].get("moduloProducto")==0){
            Ext.getCmp("botonProductosContainerBotonesDescEmpresa").setHidden(1);
            Ext.getCmp("spacerProductosDescEmpresa").setHidden(1);

        }
        else{
            Ext.getCmp("botonProductosContainerBotonesDescEmpresa").setHidden(0);
            Ext.getCmp("spacerProductosDescEmpresa").setHidden(0);
        }

        //------------------------------------------------------------------------------------------

        if(records[0].get("moduloExpress")==0){
            Ext.getCmp("botonExpressContainerBotonesDescEmpresa").setHidden(1);
            Ext.getCmp("spacerExpressDescEmpresa").setHidden(1);

        }
        else{
            Ext.getCmp("botonExpressContainerBotonesDescEmpresa").setHidden(0);
            Ext.getCmp("spacerExpressDescEmpresa").setHidden(0);
        }





        //Si no se presiono el botonParaVerEnMapa, entonces el que se presiono y que pudo hacer
        //el .load() aparte de ese es el de ir a Descripcion Empresa
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerDescripcionEmpresa"));




    }

});