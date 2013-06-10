/*
 * File: app/store/storePlayer.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('MyApp.store.storePlayer', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.modelPlayer'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'MyApp.model.modelPlayer',
        storeId: 'storePlayer',
        proxy: {
            type: 'jsonp',
            url: 'http://tecmo.webfactional.com/ace/player.php',
            reader: {
                type: 'json',
                rootProperty: 'ptm'
            }
        },
        sorters: {
            direction: 'DESC',
            property: 'distance'
        }
    }
});