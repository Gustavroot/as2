/*
 * File: app/view/containerSubEventos.js
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

Ext.define('MyApp.view.containerSubEventos', {
    extend: 'Ext.Container',
    alias: 'widget.containersubeventos',

    config: {
        id: 'containerSubEventos',
        itemId: 'containerSubEventos',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerCatEventos',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerCatEventos',
                        itemId: 'myimage29',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Esta linea es para cambiar al tab Inicio
                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp(viewDelQueSePasaHaciaSubEventos));
                        },
                        baseCls: 'botonAtras',
                        height: '80%',
                        id: 'botonAtrasContainerCatEventos',
                        right: '2%',
                        top: '10%',
                        ui: 'action-round',
                        width: '15%'
                    }
                ]
            },
            {
                xtype: 'list',
                id: 'listaSubEventos',
                itemId: 'mylist11',
                emptyText: '<b>No hay registros</b>',
                itemTpl: [
                    '<!-- <div><p class="customfont">{nombre} en {lugar} el {fecha} </p></div> -->',
                    '',
                    '',
                    '',
                    '<div>',
                    '    <table border="0" height="100" style=\'table-layout:fixed; width: 100%;\'>',
                    '',
                    '    <col width="25%">',
                    '    <col width="50%">',
                    '    <col width="25%">',
                    '    <tr>',
                    '        <td>',
                    '            <p> <img src={imagen} height="80" width="80%" /> </p>',
                    '        </td>',
                    '        <td  class="customfont">',
                    '            <p><font size="4"><font face="sansation"><p> {nombre} </p></font></font></p>',
                    '            <p><font size="2"><font face="verdana"><p> {lugar} </p></font></font></p>',
                    '            <p><font size="2"><p> {fecha} </p></font></p>',
                    '        </td>',
                    '        <td align="right">',
                    '            <!-- <input type="button" id="botonBorrarEventoFavoritoPerfilUsuario" class="botonCancelarReserva" name="" value="Borrar" style="padding:3px; color:green; height:50px; width: 80%;"> -->',
                    '        </td>',
                    '        </tr>',
                    '</table>',
                    '</div>',
                    ''
                ],
                loadingText: 'Cargando...',
                store: 'storeSubEventos',
                grouped: true,
                plugins: [
                    {
                        autoPaging: true,
                        loadMoreText: 'Cargar más...',
                        noMoreRecordsText: 'Final',
                        type: 'listpaging'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onImagenToolbarContainerCatEventosTap',
                event: 'tap',
                delegate: '#imagenToolbarContainerCatEventos'
            }
        ]
    },

    onImagenToolbarContainerCatEventosTap: function(img, e, options) {
        //Todo logo de Didi redirige hacia containerInicio
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    }

});