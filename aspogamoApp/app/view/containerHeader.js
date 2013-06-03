/*
 * File: app/view/containerHeader.js
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

Ext.define('MyApp.view.containerHeader', {
    extend: 'Ext.Container',
    alias: 'widget.containerheader',

    config: {
        height: '25%',
        id: 'containerHeader',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'image',
                height: '60%',
                html: '<img src="http://pris.eie.ucr.ac.cr/pris/images/3/3f/AspogamoLogo.jpeg" height="100%" width="100%">',
                id: 'imagenLogoPris',
                itemId: 'myimage',
                left: '5%',
                top: '20%',
                width: '20%'
            },
            {
                xtype: 'image',
                height: '60%',
                html: '<img src="resources/images/prisLogo.png" height="100%" width="100%">',
                id: 'imagenAvatar',
                right: '5%',
                top: '20%',
                width: '20%'
            },
            {
                xtype: 'container',
                height: '40%',
                html: '<center> <font face="Garamond" size=\'100%\'> <p> ASpoGAMo </p> </font> </center>',
                id: 'containerMainTitle',
                left: '30%',
                top: '15%',
                width: '40%'
            },
            {
                xtype: 'container',
                height: '20%',
                html: '<center>   <p> Automated Football Player Tracking from TV Broadcast </p> </center>',
                id: 'containerSloganMain',
                left: '0%',
                top: '80%',
                width: '100%'
            }
        ]
    }

});