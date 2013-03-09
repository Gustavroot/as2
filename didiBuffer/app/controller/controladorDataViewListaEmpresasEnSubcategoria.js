/*
 * File: app/controller/controladorDataViewListaEmpresasEnSubcategoria.js
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

Ext.define('MyApp.controller.controladorDataViewListaEmpresasEnSubcategoria', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            dataview: '#dataViewListaEmpresasEnSubcategoria'
        },

        control: {
            "dataview": {
                itemtap: 'onDataviewItemTap'
            }
        }
    },

    onDataviewItemTap: function(dataview, index, target, record, e, options) {
        Ext.getCmp("mapaContainerMapa").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

        //Estos if sirven para elegir entre los diferentes botones en el listado de las 
        //empresas, es decir, los botones del lado derecho... Cada uno tiene una funciona-
        //lidad distinta
        //Este boton es el boton de llamado...
        if(e.target.id=="botonParaLlamar"){
            window.open('tel:+506-'+record.get("telefono"));
        }
        //Este if permite que, en caso de que no se tenga el email, despliegue un mensaje
        //indicando que no se dispone de el
        else if(e.target.id=="botonParaEnviarCorreo"){
            //Ext.Msg.alert('Aviso', 'Correo por enviar.', Ext.emptyFn);
            //Manejo de errores, en caso de que no se tenga el email de la empresa
            if(record.get("email")===""){
                Ext.Msg.alert('Aviso', 'La página no tiene el email.', Ext.emptyFn);
            }
            else{
                window.open(record.get("nombre")+':'+record.get("email"));
            }
        }
        //Con el codigo de este if, se pasa al view de descripcion de la empresa en la que
        //se ha clickeado
        else if(e.target.id=="botonParaVerDescripcion"){

            Ext.getCmp("containerListaEmpresasEnSubcategoria").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

            //    alert(record.get("idCliente"));
            if(record.get("tipoPlan")<4){
                botonClickeadoEnListadoTotalEmpresas="";
                funcionParaAbrirDescEmpresa(record.get("idCliente"),"containerListaEmpresasEnSubcategoria");
            }
        }
        //Con el codigo adentro de este if, se pasa hacia el mapa para esta empresa
        //como unico pin
        else if(e.target.id=="botonParaVerEnMapa"){

            Ext.getCmp("containerListaEmpresasEnSubcategoria").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

            Ext.getStore("storeEmpresaEnDescripcionEmpresa").getProxy().setExtraParam('idCliente',record.get("idCliente"));
            botonClickeadoEnListadoTotalEmpresas="botonParaVerEnMapa";
            Ext.getStore("storeEmpresaEnDescripcionEmpresa").load();
            //Ext.getCmp("mapaContainerMapa").setMapCenter({latitude: record.get("latitud"), longitude: record.get("longitud")});
            //Ext.Msg.alert('Aviso', 'Hacia view de mapa.', Ext.emptyFn);
        }
        else{

            Ext.getCmp("containerListaEmpresasEnSubcategoria").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});

            if(record.get("tipoPlan")<4){
                //        alert("faesf");
                botonClickeadoEnListadoTotalEmpresas="";
                funcionParaAbrirDescEmpresa(record.get("idCliente"),"containerListaEmpresasEnSubcategoria");
            }
        }









        /*
        //En caso de que se tenga el plan 4, o el 5, los mas bajos, entonces se les quita
        //muchos privilegios, es decir, se esconden botones
        if(record.get("tipoPlan")==4 || record.get("tipoPlan")==5){
            Ext.getCmp("botonMapaContainerBotonesDescEmpresa").setHidden(1);
            Ext.getCmp("botonEnlaceWebContainerBotonesDescEmpresa").setHidden(1);
            Ext.getCmp("botonFacebookContainerBotonesDescEmpresa").setHidden(1);
            //Ext.getCmp("botonDidiRapidosContainerBotonesDescEmpresa").setHidden(1);
        }
        */


    }

});