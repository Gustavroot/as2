/*
 * File: app/view/containerMyVideos.js
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

Ext.define('MyApp.view.containerMyVideos', {
    extend: 'Ext.Container',
    alias: 'widget.containermyvideos',

    config: {
        id: 'containerMyVideos',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'container',
                height: '10%',
                hidden: false,
                html: '<video id="videoContainerMyVideos" width="100%" height="100%" controls loop> <source src="./resources/videos/1.mp4" type=video/mp4> </video>',
                id: 'containerMyVideosOriginal',
                itemId: 'mycontainer15',
                left: 0,
                top: 0,
                width: '10%',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            //La variable que habilita el REdibujado se configura inicialmente
                            //para que no haya dibujado
                            variableBoolParaDetencionDraw=0;
                            //Se pone a escuchar el containerMyVideosOriginal tal que
                            //si se da un click en el canvas, entonces se ejecuta el
                            //codigo de inicializado de un punto para una linea curva
                            Ext.getCmp("containerMyVideosOriginal").element.on({
                                touchstart: function(e,node){
                                    //Se escucha al Play del video, para poner a correr el otro "video"
                                    funcionIniciadoPlayMyVideos(e.target);
                                }
                            });
                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'container',
                height: '85%',
                id: 'containerMyVideosCanvas',
                itemId: 'mycontainer16',
                left: '5%',
                top: '2.5%',
                width: '90%',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            //Esto 3 arreglos permite hacer el REdibujado, y el tercero
                            //de estos arreglos es el que permite hacer la identificacion
                            //de cuando se despego del dibujado el dedo o el mouse
                            arregloDePuntosDibujoX=[];
                            arregloDePuntosDibujoY=[];
                            arregloDePuntosDibujoBool=[];
                            //Se pone a escuchar al containerMyVideosCanvas ante el toque inicial
                            Ext.getCmp("containerMyVideosCanvas").element.on({
                                touchstart: function(e,node){
                                    if(variableHabilitarDibujado==1){
                                        //document.getElementById("videoContainerMyVideos").webkitEnterFullscreen();
                                        canvasContext=e.target.getContext("2d");
                                        canvasContext.moveTo(e.target.layerX,e.target.layerY);
                                        //
                                        puntoTocadoAnteriorX=e.event.layerX;
                                        puntoTocadoAnteriorY=e.event.layerY;
                                        //
                                        arregloDePuntosDibujoX.push(puntoTocadoAnteriorX);
                                        arregloDePuntosDibujoY.push(puntoTocadoAnteriorY);
                                        arregloDePuntosDibujoBool.push(1);
                                    }
                                }
                            });
                            //Se hace que el containerMyVideosCanvas quede escuchando el evento
                            //de continuar tocando despues del toque inicial
                            Ext.getCmp("containerMyVideosCanvas").element.on({
                                touchmove: function(e,node){
                                    if(variableHabilitarDibujado==1){
                                        //----------------------------------------------------------------
                                        canvasContext=e.target.getContext("2d");
                                        canvasContext.strokeStyle='rgb(55,55,255)';
                                        canvasContext.beginPath();
                                        canvasContext.moveTo(puntoTocadoAnteriorX,puntoTocadoAnteriorY);
                                        //
                                        canvasContext.lineTo(e.event.layerX,e.event.layerY);
                                        canvasContext.stroke();
                                        canvasContext.closePath();
                                        //
                                        puntoTocadoAnteriorX=e.event.layerX;
                                        puntoTocadoAnteriorY=e.event.layerY;
                                        //
                                        arregloDePuntosDibujoX.push(puntoTocadoAnteriorX);
                                        arregloDePuntosDibujoY.push(puntoTocadoAnteriorY);
                                        arregloDePuntosDibujoBool.push(0);
                                    }
                                    //----------------------------------------------------------------
                                }
                            });

                            Ext.getCmp("containerMyVideosCanvas").element.on({
                                touchend: function(e,node){
                                    variableHabilitarDibujado=0;
                                    Ext.getCmp("botonSeguirJugadorVideoContainerMyVideos").setText("Seguir jugador");
                                    Ext.getCmp("botonSeguirJugadorVideoContainerMyVideos").setUi("normal");
                                    //falta aqui codigo de enviar informacion de posiciones, un .load
                                    arregloDePuntosDibujoX=[];
                                    arregloDePuntosDibujoY=[];
                                    arregloDePuntosDibujoBool=[];
                                }
                            });
                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'container',
                height: '10%',
                id: 'containerMyVideosMenu',
                top: '89%',
                width: '100%',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            funcionIniciadoPlayMyVideos(document.getElementById("videoContainerMyVideos"));

                            if(document.getElementById("videoContainerMyVideos").paused){
                                document.getElementById("videoContainerMyVideos").play();
                            }
                            else{
                                document.getElementById("videoContainerMyVideos").pause();
                            }
                        },
                        height: '100%',
                        id: 'botonPlayVideoContainerMyVideos',
                        ui: 'action',
                        width: '20%',
                        iconCls: 'arrow_right',
                        iconMask: true
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            //Se hace el cambio de estado en la variable para
                            //habilitado del dibujado en el canvas, y se modifica
                            //al mismo tiempo el ui del boton
                            if(variableHabilitarDibujado===0){
                                variableHabilitarDibujado=1;
                                Ext.getCmp("botonSeguirJugadorVideoContainerMyVideos").setUi("action");
                                Ext.getCmp("botonSeguirJugadorVideoContainerMyVideos").setText("Siguiendo jugador");
                            }
                            else{
                                variableHabilitarDibujado=0;
                                Ext.getCmp("botonSeguirJugadorVideoContainerMyVideos").setUi("normal");
                                Ext.getCmp("botonSeguirJugadorVideoContainerMyVideos").setText("Seguir jugador");
                            }
                        },
                        height: '100%',
                        id: 'botonSeguirJugadorVideoContainerMyVideos',
                        left: '20%',
                        width: '30%',
                        iconMask: true,
                        text: 'Seguir jugador'
                    }
                ]
            }
        ]
    }

});