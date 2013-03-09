/*
 * File: app/view/containerFavoritosEventosPerfilUsuario.js
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

Ext.define('MyApp.view.containerFavoritosEventosPerfilUsuario', {
    extend: 'Ext.Container',
    alias: 'widget.containerfavoritoseventosperfilusuario',

    config: {
        id: 'containerFavoritosEventosPerfilUsuario',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerFavoritosEventosPerfilUsuario',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerFavoritosEventosPerfilUsuario',
                        itemId: 'myimage30',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Esta linea es para cambiar al tab anterior
                            //Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));




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
                        id: 'botonAtrasContainerFavoritosEventosPerfilUsuario',
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
                id: 'titleBarFavoritosEventosPerfilUsuario',
                title: 'Eventos'
            },
            {
                xtype: 'list',
                id: 'listaFavoritosEventosPerfilUsuario',
                itemId: 'mylist10',
                emptyText: 'No tiene eventos favoritos.',
                itemTpl: [
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
                    '            <input type="button" id="botonBorrarEventoFavoritoPerfilUsuario" class="botonCancelarReserva" name="" value="Borrar" style="padding:3px; color:green; height:50px; width: 80%;">',
                    '        </td>',
                    '        </tr>',
                    '</table>',
                    '</div>',
                    ''
                ],
                loadingText: 'Cargando...',
                store: 'storeExtraccionFavoritosPerfilUsuario',
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
                fn: 'onImagenToolbarContainerSubcategoriasTap1',
                event: 'tap',
                delegate: '#imagenToolbarContainerFavoritosEventosPerfilUsuario'
            },
            {
                fn: 'onListaFavoritosEventosPerfilUsuarioItemSwipe',
                event: 'itemswipe',
                delegate: '#listaFavoritosEventosPerfilUsuario'
            }
        ]
    },

    onImagenToolbarContainerSubcategoriasTap1: function(img, e, options) {
        //Para devolverse hacia container Inicio dando click en el Logo Didi
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    },

    onListaFavoritosEventosPerfilUsuarioItemSwipe: function(dataview, index, target, record, e, options) {
        //Esta funcion, y el Msg 

        funcionEliminadoEventosFavoritosPerfilUsuario=function(buttonId){
            if(buttonId=="no"){
                //
            }
            else{
                Ext.getStore("storeEnvioAgregadoFavoritosPerfilUsuario").getProxy().setUrl("http://www.didicr.com/php/didiFavorito/borraEventoFavoritoPorIdEventoFavorito.php");
                Ext.getStore("storeEnvioAgregadoFavoritosPerfilUsuario").getProxy().setExtraParam('idUsuarioEventoFavoritoParam',record.get("idUsuarioEventoFavorito"));
                //alert(record.get("idUsuarioEventoFavorito"));
                Ext.getStore("storeEnvioAgregadoFavoritosPerfilUsuario").load();
                //alert("fdet");
                //        Ext.getStore("storeExtraccionFavoritosPerfilUsuario").getProxy().setExtraParam('idUsuarioParam',3);
                Ext.getStore("storeExtraccionFavoritosPerfilUsuario").load();
                Ext.Msg.alert('Aviso', 'Evento eliminado exitosamente.', Ext.emptyFn);
            }
            //
        };

        extMessageBox=Ext.Msg.confirm("Aviso", "Desea eliminar este evento de sus favoritos?", funcionEliminadoEventosFavoritosPerfilUsuario);
    }

});