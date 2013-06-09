/*
 * File: app/view/containerStatistics.js
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

Ext.define('MyApp.view.containerStatistics', {
    extend: 'Ext.Container',
    alias: 'widget.containerPopular',

    config: {
        id: 'containerPopular',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'carousel',
                itemId: 'mycarousel',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        id: 'toolbarTitleStatistics',
                        style: 'background: #0096D7',
                        title: 'Passes per player'
                    },
                    {
                        xtype: 'chart',
                        id: 'barChart1Statistics',
                        colors: [
                            '#115fa6',
                            '#94ae0a',
                            '#a61120',
                            '#ff8809',
                            '#ffd13e',
                            '#a61187',
                            '#24ad9a',
                            '#7c7474',
                            '#a66111'
                        ],
                        store: 'storePlayer',
                        axes: [
                            {
                                type: 'category',
                                fields: [
                                    'name'
                                ],
                                increment: 1,
                                labelInSpan: true,
                                title: 'Player'
                            },
                            {
                                type: 'numeric',
                                fields: [
                                    'fPass',
                                    'sPass'
                                ],
                                grid: {
                                    odd: {
                                        fill: '#e8e8e8'
                                    }
                                },
                                increment: 1,
                                position: 'left',
                                title: 'Passes'
                            }
                        ],
                        series: [
                            {
                                type: 'bar',
                                xField: 'name',
                                yField: [
                                    'sPass',
                                    'fPass'
                                ]
                            }
                        ],
                        interactions: [
                            {
                                type: 'panzoom'
                            },
                            {
                                type: 'iteminfo',
                                panel: {
                                    html: 'Details!',
                                    modal: true,
                                    centered: true,
                                    width: 250,
                                    height: 300,
                                    styleHtmlContent: true,
                                    scrollable: 'vertical',
                                    hideOnMaskTap: true,
                                    fullscreen: false,
                                    hidden: true,
                                    zIndex: 30,
                                    items: [
                                        {
                                            docked: 'top',
                                            xtype: 'toolbar',
                                            title: 'Item Detail'
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        id: 'containerDetailsOrderJugadores',
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'list',
                                id: 'listaDistanciasOrderJugadores',
                                scrollable: 'vertical',
                                itemTpl: [
                                    '<div>',
                                    '    <p><b>{name}</b></p>',
                                    '</div>',
                                    '<div>',
                                    '    <table border="0" height="100">',
                                    '        <col width="25%">',
                                    '        <col width="50%">',
                                    '        <col width="25%">',
                                    '        <tr>',
                                    '            <td>',
                                    '                <p> <img src={photo} height="80" width="80" /> </p>',
                                    '            </td>',
                                    '            <td  class="customfont">',
                                    '                <p><font size="2"><font face="verdana"><p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {distance} m </p></font></font></p>',
                                    '            </td>',
                                    '            <td align="right">',
                                    '                <div id="botonVerDescEmpresaFavoritaPerfilUsuario" class="ddDescripcionDescripcion" name="" style="padding:3px; color:green; height:35px; width: 85%; background-size: 1606% 250%"></div>',
                                    '                <div id="botonBorrarEmpresaFavoritaPerfilUsuario" class="ddDescripcionBorrar" name="" style="padding:3px; color:green; height:35px; width: 85%; background-size: 1606% 250%"></div>',
                                    '            </td>',
                                    '        </tr>',
                                    '    </table>',
                                    '</div>'
                                ],
                                store: 'storePlayer'
                            }
                        ]
                    },
                    {
                        xtype: 'polar',
                        id: 'pieChart2Statistics',
                        colors: [
                            '#115fa6',
                            '#94ae0a',
                            '#a61120',
                            '#ff8809',
                            '#ffd13e',
                            '#a61187',
                            '#24ad9a',
                            '#7c7474',
                            '#a66111'
                        ],
                        store: 'storePlayer',
                        series: [
                            {
                                type: 'pie',
                                labelField: 'name',
                                xField: 'distance'
                            }
                        ],
                        interactions: [
                            {
                                type: 'rotate'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMycarouselActiveItemChange',
                event: 'activeitemchange',
                delegate: '#mycarousel'
            }
        ]
    },

    onMycarouselActiveItemChange: function(container, value, oldValue, eOpts) {
        if(value==Ext.getCmp('barChart1Statistics')){
            Ext.getCmp('toolbarTitleStatistics').setTitle('Passes per player');
        }
        if(value==Ext.getCmp('containerDetailsOrderJugadores')){
            Ext.getCmp('toolbarTitleStatistics').setTitle('Details');
        }
        if(value==Ext.getCmp('pieChart2Statistics')){
            Ext.getCmp('toolbarTitleStatistics').setTitle('Por def 2');
        }
    }

});