/*
 * File: app/view/containerReservasPerfilUsuario.js
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

Ext.define('MyApp.view.containerReservasPerfilUsuario', {
    extend: 'Ext.Container',
    alias: 'widget.containerreservasperfilusuario',

    config: {
        id: 'containerReservasPerfilUsuario',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerReservasPerfilUsuario',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerReservasPerfilUsuario',
                        itemId: 'myimage30',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Esta linea es para cambiar al tab anterior
                            //Ext.getCmp("tabPanelPrincipal").setActiveItem(viewDelQuePasoHaciaContainerReservasPerfilUsuario);




                            Ext.getCmp('containerDelPerfilUsuario').setHidden(0);


                            var main = Ext.get('containerParaTabPanelPrincipal');


                            if (main.hasCls('out')) {
                                main.removeCls('out');
                                main.addCls('in'); 
                                //button.setText('Usuario');
                            } else {
                                main.removeCls('in');    
                                main.addCls('out');    
                                //button.setText('Usuario');         
                            }


                        },
                        baseCls: 'botonUsuario',
                        height: '60%',
                        id: 'botonAtrasContainerReservasPerfilUsuario',
                        left: '1%',
                        top: '20%',
                        ui: 'action-round',
                        width: '13%'
                    }
                ]
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                id: 'titleBarReservasPerfilUsuario',
                title: 'Reservas'
            },
            {
                xtype: 'list',
                id: 'listaREservasPerfilUsuario',
                emptyText: 'No tiene reservas.',
                itemTpl: [
                    '<!-- <div><center> <p> Reserva: {idReserva} </p> <p>Fecha: {fechaReserva}</p> <p> En: {idCliente} </p>  <p><input type="button" id="botonVerDetallesReservaPerfilUsuario" name="" value="Detalles" class="botonCancelarReserva" style="font-family: texgyrechorus; background-color:#A9F5BC; padding:3px; color:green; height:30px; width: 100px;"> </p> <p><input type="button" id="botonCancelarReservaPerfilUsuario" name="" value="Cancelar" class="botonCancelarReserva" style="font-family: texgyrechorus; background-color:#A9F5BC; padding:3px; color:green; height:30px; width: 100px;"> </p> </center></div>  -->',
                    '',
                    '',
                    '',
                    '',
                    '<div>',
                    '    <table border="0" height="100" style=\'table-layout:fixed; width: 100%;\'>',
                    '',
                    '    <col width="32%">',
                    '    <col width="37%">',
                    '    <col width="31%">',
                    '    <tr>',
                    '        <td>',
                    '            <font size="7"><p> {idReserva} </p></font>',
                    '        </td>',
                    '        <td>',
                    '            <font size="3">',
                    '            <p style="font-family:texgyrechorus;color:black;">En: {idCliente}</p>',
                    '            <p style="font-family:texgyrechorus;color:black;">Fecha: {fechaReserva}</p>',
                    '            </font>',
                    '        </td>',
                    '        <td align=right>',
                    '            <input type="button" id="botonVerDetallesReservaPerfilUsuario" class="botonCancelarReserva" name="" value="Detalles" style="font-family: texgyrechorus; padding:3px; color:green; height:30px; width: 100%;">',
                    '            <input type="button" id="botonVerCancelarReservaPerfilUsuario" class="botonCancelarReserva" name="" value="Cancelar" style="font-family: texgyrechorus; padding:3px; color:green; height:35px; width: 100%;">',
                    '         </td>',
                    '    </tr>',
                    '</table>',
                    '</div>',
                    '',
                    ''
                ],
                loadingText: 'Cargando...',
                store: 'storeReservaEvento',
                plugins: [
                    {
                        autoPaging: true,
                        loadMoreText: 'Cargar más...',
                        noMoreRecordsText: 'Final',
                        type: 'listpaging'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '80%',
                hidden: true,
                id: 'panelResumenInfoPerfilUsuario',
                left: '10%',
                top: '10%',
                width: '80%',
                hideOnMaskTap: false,
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        id: 'titleBarResumenReservaPerfilUsuario',
                        title: 'Detalles'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp("panelResumenInfoPerfilUsuario").setHidden(1);
                        },
                        docked: 'bottom',
                        id: 'botonListoResumenReservaPerfilUsuario',
                        ui: 'confirm-round',
                        text: 'Listo'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onImagenToolbarContainerSubcategoriasTap1',
                event: 'tap',
                delegate: '#imagenToolbarContainerReservasPerfilUsuario'
            }
        ]
    },

    onImagenToolbarContainerSubcategoriasTap1: function(img, e, options) {
        //Para devolverse hacia container Inicio dando click en el Logo Didi
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    }

});