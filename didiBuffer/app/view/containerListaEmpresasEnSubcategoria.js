/*
 * File: app/view/containerListaEmpresasEnSubcategoria.js
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

Ext.define('MyApp.view.containerListaEmpresasEnSubcategoria', {
    extend: 'Ext.Container',
    alias: 'widget.containerlistaempresasensubcategoria',

    config: {
        id: 'containerListaEmpresasEnSubcategoria',
        itemId: 'containerListaEmpresasEnSubcategoria',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '10%',
                id: 'toolbarContainerListaEmpresas',
                style: 'background: #3E3737',
                items: [
                    {
                        xtype: 'image',
                        centered: true,
                        height: '100%%',
                        html: '<img src="./resources/logo/Logo_DD.png" width="100%" height="100%">',
                        id: 'imagenToolbarContainerListaEmpresas',
                        itemId: 'myimage23',
                        width: '40%'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Esta linea es para cambiar al tab Inicio

                            //if(viewDelQuePasoHaciaListadoTotalEmpresas=="containerFormularioGeolocalizacion"){
                            //    Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerSubcategorias"));
                            //}


                            Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp(viewDelQuePasoHaciaListadoTotalEmpresas));


                            //Con esta linea se remueve lo q haya en subcategorias, para evitar sobrecarga
                            Ext.getStore("storeListaEmpresasEnSubcategoria").removeAll();

                        },
                        baseCls: 'botonAtras',
                        height: '80%',
                        id: 'botonAtrasContainerListaEmpresas',
                        right: '2%',
                        top: '10%',
                        ui: 'action-round',
                        width: '15%'
                    }
                ]
            },
            {
                xtype: 'list',
                height: '100%',
                id: 'dataViewListaEmpresasEnSubcategoria',
                itemId: 'dataViewListaEmpresasEnSubcategoria',
                left: '0%',
                width: '100%',
                emptyText: '<b>No hay registros</b>',
                itemTpl: [
                    '<div>',
                    '    <tpl if="tipoPlan==1">',
                    '        <table border="0"  height="260" style=\'table-layout:fixed; width: 100%;\'>',
                    '    </tpl>',
                    '    <tpl if="tipoPlan==2">',
                    '        <table border="0" height="190" style=\'table-layout:fixed; width: 100%;\'>',
                    '    </tpl>',
                    '    <tpl if="tipoPlan==3">',
                    '        <table border="0" height="130" style=\'table-layout:fixed; width: 100%;\'>',
                    '    </tpl>',
                    '    <tpl if="tipoPlan==4">',
                    '        <table border="0" height="100" style=\'table-layout:fixed; width: 100%;\'>',
                    '    </tpl>',
                    '    <tpl if="tipoPlan==5">',
                    '        <table border="0" height="100" style=\'table-layout:fixed; width: 100%;\'>',
                    '    </tpl>',
                    '',
                    '        <col width="70%">',
                    '        <col width="30%">',
                    '        <tr>',
                    '            <td>',
                    '                <tpl if="tipoPlan==1">',
                    '                    <img src="{banner}" width="93%" height="220" />',
                    '                    <p style="color:black;">{provincia}</p>',
                    '                    <p style="color:black;">{canton}</p>',
                    '                </tpl>',
                    '                <tpl if="tipoPlan==2">',
                    '                    <img src="{logo}" width="60%" height="100" />',
                    '                    <i>',
                    '                    <p style="color:black;">{nombre}</p>',
                    '                    <p style="color:black;"> Tel: {telefono} </p>',
                    '                    <p style="color:black;">{provincia}</p>',
                    '                    <p style="color:black;">{canton}</p>',
                    '                    </i>',
                    '                </tpl>',
                    '                <tpl if="tipoPlan==3">',
                    '                    <img src="{logo}" width="20%" height="50" />',
                    '                    <b>',
                    '                        <p>{nombre}.',
                    '                        </p>',
                    '                        <p> Tel: {telefono}.',
                    '                        </p>',
                    '                        <p>{provincia}</p>',
                    '                        <p>{canton}</p>',
                    '                    </b>',
                    '                </tpl>',
                    '                <tpl if="tipoPlan==4">',
                    '                    <p>{nombre}.',
                    '                    </p>',
                    '                    <p>Tel: {telefono}.',
                    '                    </p>',
                    '                    <p>{provincia}</p>',
                    '                    <p>{canton}</p>',
                    '                </tpl>',
                    '                <tpl if="tipoPlan==5">',
                    '                    <p>{nombre}.',
                    '                    </p>',
                    '                    <p>Tel: {telefono}.',
                    '                    </p>',
                    '                    <p>{provincia}</p>',
                    '                    <p>{canton}</p>',
                    '                </tpl>',
                    '            </td>',
                    '            <td align=right>',
                    '                <tpl if="tipoPlan==1">',
                    '                    <input type="button" id="botonParaLlamar" name="{nombre}" class="botonLlamar" style="height:50px; width: 100%;">',
                    '                    <!-- <input type="button" id="botonParaEnviarCorreo" name="{nombre}" value="E-mail" style="padding:3px; color: gray; height: 35px; width: 100%;"> -->',
                    '                    <input type="button" id="botonParaVerDescripcion" name="{nombre}" class="botonDescripcion" style="height: 50px; width: 100%;">',
                    '                    <input type="button" id="botonParaVerEnMapa" name="{nombre}" class="botonMapa" style="height: 50px; width: 100%;">',
                    '                </tpl>',
                    '                <tpl if="tipoPlan==2">',
                    '                    <input type="button" id="botonParaLlamar" name="{nombre}" class="botonLlamar" style="height:50px; width: 100%;">',
                    '                    <!-- <input type="button" id="botonParaEnviarCorreo" name="{nombre}" value="E-mail" style="padding:3px; color: gray; height: 35px; width: 100%;"> -->',
                    '                    <input type="button" id="botonParaVerDescripcion" name="{nombre}" class="botonDescripcion" style="height: 50px; width: 100%;">',
                    '                    <input type="button" id="botonParaVerEnMapa" name="{nombre}" class="botonMapa" style="height: 50px; width: 100%;">',
                    '                </tpl>',
                    '                <tpl if="tipoPlan==3">',
                    '                    <input type="button" id="botonParaLlamar" name="{nombre}" class="botonLlamar" style="height:50px; width: 100%;">',
                    '                    <input type="button" id="botonParaVerDescripcion" name="{nombre}" class="botonDescripción" style="height: 50px; width: 100%;">',
                    '                    <input type="button" id="botonParaVerEnMapa" name="{nombre}" class="botonMapa" style="height: 50px; width: 100%;">',
                    '                </tpl>',
                    '                <tpl if="tipoPlan==4">',
                    '                    <input type="button" id="botonParaLlamar" name="{nombre}" class="botonLlamar" style="height:50px; width: 100%;">',
                    '                    <!-- <input type="button" id="botonParaVerDescripcion" name="{nombre}" value="Descripcion" style="padding:3px; color: gray; height: 35px; width: 100%;"> -->',
                    '                    <!-- <input type="button" id="botonParaVerEnMapa" name="{nombre}" value="Mapa" style="padding:3px; color: gray; height: 35px; width: 100%;"> -->',
                    '                </tpl>',
                    '                <tpl if="tipoPlan==5">',
                    '                    <input type="button" id="botonParaLlamar" name="{nombre}" class="botonLlamar" style="height:50px; width: 100%;">',
                    '                    <!-- <input type="button" id="botonParaVerDescripcion" name="{nombre}" value="Descripcion" style="padding:3px; color: gray; height: 35px; width: 100%;"> -->',
                    '                    <!-- <input type="button" id="botonParaVerEnMapa" name="{nombre}" value="Mapa" style="padding:3px; color: gray; height: 35px; width: 100%;"> -->',
                    '                </tpl>',
                    '',
                    '            </td>',
                    '        </tr>',
                    '    </table>',
                    '</div>',
                    '',
                    ''
                ],
                loadingText: 'Cargando...',
                store: 'storeListaEmpresasEnSubcategoria',
                allowDeselect: true,
                disableSelection: true,
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
                fn: 'onImagenToolbarContainerListaEmpresasTap',
                event: 'tap',
                delegate: '#imagenToolbarContainerListaEmpresas'
            }
        ]
    },

    onImagenToolbarContainerListaEmpresasTap: function(img, e, options) {
        //Todo logo de Didi al darle Tap va de vuelta a containerInicio
        Ext.getCmp("tabPanelPrincipal").setActiveItem(Ext.getCmp("containerInicio"));
    }

});