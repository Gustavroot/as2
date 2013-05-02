/*
 * File: app/view/BASURERO.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
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

Ext.define('MyApp.view.BASURERO', {
    extend: 'Ext.Container',

    config: {
        items: [
            {
                xtype: 'container',
                docked: 'left',
                id: 'containerVideosPopulares01',
                width: 100,
                items: [
                    {
                        xtype: 'button',
                        text: 'MyButton'
                    }
                ]
            },
            {
                xtype: 'container',
                docked: 'left',
                id: 'containerVideosPopulares02',
                width: 100,
                items: [
                    {
                        xtype: 'button',
                        text: 'MyButton1'
                    }
                ]
            },
            {
                xtype: 'container',
                docked: 'left',
                id: 'containerVideosPopulares03',
                width: 100,
                items: [
                    {
                        xtype: 'button',
                        text: 'MyButton2'
                    }
                ]
            },
            {
                xtype: 'video',
                url: './resources/videos/2.mp4'
            },
            {
                xtype: 'video',
                autoResume: true,
                url: './resources/videos/2.mp4'
            },
            {
                xtype: 'chart',
                docked: 'left',
                width: '40%',
                colors: [
                    '#115fa6',
                    '#94ae0a',
                    '#a61120'
                ],
                store: 'storePrueba',
                axes: [
                    {
                        type: 'category'
                    },
                    {
                        type: 'numeric',
                        grid: {
                            odd: {
                                fill: '#e8e8e8'
                            }
                        },
                        position: 'left'
                    }
                ],
                series: [
                    {
                        type: 'area',
                        xField: 'Posicion',
                        yField: [
                            'idBannerPrincipal'
                        ]
                    }
                ],
                interactions: [
                    {
                        type: 'panzoom'
                    }
                ]
            }
        ]
    }

});