/*
 * File: app/view/containerIngresoUserYPass.js
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

Ext.define('MyApp.view.containerIngresoUserYPass', {
    extend: 'Ext.Container',
    alias: 'widget.mycontainer17',

    config: {
        id: 'containerIngresoUserYPass',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Log In',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp("tabPanelInicial").setActiveItem(Ext.getCmp("containerInicial"));
                        },
                        height: '90%',
                        right: '5%',
                        top: '5%',
                        width: '20%',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                height: '30%',
                left: '5%',
                top: '40%',
                width: '90%',
                items: [
                    {
                        xtype: 'textfield',
                        height: '50%',
                        id: 'textFieldLogInUsername',
                        label: 'Username'
                    },
                    {
                        xtype: 'textfield',
                        height: '50%',
                        id: 'textFieldLogInPassword',
                        itemId: 'mytextfield1',
                        label: 'Password'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onTextFieldLogInPasswordAction',
                event: 'action',
                delegate: '#textFieldLogInPassword'
            }
        ]
    },

    onTextFieldLogInPasswordAction: function(textfield, e, eOpts) {
        Ext.getCmp("tabPanelInicial").setActiveItem(Ext.getCmp("containerMain"));
    }

});