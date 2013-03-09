/*
 * File: app/store/storeEnvioAgregadoFavoritosPerfilUsuario.js
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

Ext.define('MyApp.store.storeEnvioAgregadoFavoritosPerfilUsuario', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.modelEnvioAgregadoFavoritosPerfilUsuario'
    ],

    config: {
        model: 'MyApp.model.modelEnvioAgregadoFavoritosPerfilUsuario',
        storeId: 'storeEnvioAgregadoFavoritosPerfilUsuario',
        proxy: {
            type: 'jsonp',
            url: 'http://www.didicr.com/php/didiFavorito/verificaEventoFavoritoUsuario2.php',
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

    }

});