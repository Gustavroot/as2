/*
 * File: app/view/containerHome.js
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

Ext.define('MyApp.view.containerHome', {
    extend: 'Ext.Container',
    alias: 'widget.containerhome',

    config: {
        id: 'containerHome',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'panel',
                height: '80%',
                html: '<font color=\'gray\'><center><p>&nbsp</p><p style=\'font-size:120%;\'>Description</p><p>&nbsp</p><p style=\'font-size:80%;\'>The research project \'Sensor-based, Automatic Analysis of Football Games\' is an ambitious, mid-term research project that studies the automation of these tasks. The main objectives of the project are (1) the investigation of novel computational mechanisms that enable computer systems to recognize intentional activities, (2) the development of an integrated software system to automate game interpretation and analysis, and (3) the demonstration of the impact of automated game analysis on application areas, such as sport science, football coaching, and sports entertainment.</p></center></font>',
                left: '5%',
                top: '5%',
                width: '90%',
                modal: true,
                scrollable: 'vertical'
            }
        ]
    }

});