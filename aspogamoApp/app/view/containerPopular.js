/*
 * File: app/view/containerPopular.js
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

Ext.define('MyApp.view.containerPopular', {
    extend: 'Ext.Container',
    alias: 'widget.containerpopular',

    config: {
        html: '<canvas width=\'500px\' id=\'canvas\' height=\'500px\'/>',
        id: 'containerPopular',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'container',
                height: '95%',
                html: '<video id="v" width="100%" height="100%" controls loop> <source src="./resources/videos/2.mp4" type=video/mp4> </video>',
                id: 'containerVideoPopularOriginal',
                itemId: 'mycontainer15',
                left: '2.5%',
                top: '2.5%',
                width: '45%',
                listeners: [
                    {
                        fn: function(component, options) {
                            //alert("fwg");
                            //var videoPopular=Ext.get("v");
                            //alert(videoPopular);
                            //alert(e.target.id);
                            //alert(options.e.target.id);
                            //alert("f");
                            //alert(Ext.getCmp("containerVideoPopularOriginal").getComponent("v").id);
                            //alert(Ext.ComponentQuery.query('#containerVideoPopularOriginal')[0].id);

                            //alert(Ext.getCmp("containerVideoPopularOriginal").getElementById("v").id);

                            variableBoolParaDetencionDraw=0;

                            function draw(v,c,bc,w,h) {
                                if(v.paused || v.ended)	return false;
                                // First, draw it into the backing canvas
                                bc.drawImage(v,0,0,w,h);
                                // Grab the pixel data from the backing canvas

                                if(variableBoolParaDetencionDraw===0){
                                    setTimeout(draw,20,v,c,bc,w,h);
                                }
                                else{
                                    //
                                }
                            }




                            Ext.getCmp("containerVideoPopularOriginal").element.on({
                                touchstart: function(e,node){
                                    //alert("felgj");
                                    //se escucha al Play del video, para poner a correr el otro "video"
                                    e.target.addEventListener('play', function(){
                                        variableBoolParaDetencionDraw=0;
                                        //alert("fwe");
                                        //alert(e.target.clientWidth);
                                        cw = e.target.clientWidth;
                                        ch = e.target.clientHeight;
                                        variableContainerVideoPopularCanvas.width = cw;
                                        variableContainerVideoPopularCanvas.height = ch;
                                        canvasContext=variableContainerVideoPopularCanvas.getContext('2d');
                                        //back.width = cw;
                                        //back.height = ch;
                                        draw(e.target,canvasContext,canvasContext,cw,ch);
                                    },false);

                                    e.target.addEventListener('stop', function(){
                                        variableBoolParaDetencionDraw=1;
                                    },false);

                                }
                            });




                            Ext.getCmp("containerVideoPopularOriginal").element.on({
                                touchmove: function(e,node){
                                    canvasContext=e.target.getContext("2d");
                                    canvasContext.strokeStyle='rgb(55,55,255)';
                                    canvasContext.beginPath();
                                    canvasContext.moveTo(puntoTocadoAnteriorX,puntoTocadoAnteriorY);
                                    canvasContext.lineTo(e.event.layerX,e.event.layerY);
                                    canvasContext.stroke();
                                    canvasContext.closePath();

                                    puntoTocadoAnteriorX=e.event.layerX;
                                    puntoTocadoAnteriorY=e.event.layerY;

                                }
                            });



                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'container',
                height: '95%',
                html: '<canvas id="c" width=500px height=500px></canvas> ',
                id: 'containerVideoPopularCanvas',
                itemId: 'mycontainer16',
                right: '2.5%',
                top: '2.5%',
                width: '45%',
                listeners: [
                    {
                        fn: function(component, options) {
                            Ext.getCmp("containerVideoPopularCanvas").element.on({
                                touchstart: function(e,node){


                                    variableContainerVideoPopularCanvas=e.target;
                                    //        alert("feg");
                                    canvasContext=e.target.getContext("2d");
                                    canvasContext.moveTo(e.target.layerX,e.target.layerY);

                                    puntoTocadoAnteriorX=e.event.layerX;
                                    puntoTocadoAnteriorY=e.event.layerY;

                                }
                            });



                            Ext.getCmp("containerVideoPopularCanvas").element.on({
                                touchmove: function(e,node){
                                    canvasContext=e.target.getContext("2d");

                                    canvasContext.strokeStyle='rgb(55,55,255)';

                                    canvasContext.beginPath();

                                    canvasContext.moveTo(puntoTocadoAnteriorX,puntoTocadoAnteriorY);

                                    canvasContext.lineTo(e.event.layerX,e.event.layerY);
                                    canvasContext.stroke();

                                    canvasContext.closePath();

                                    puntoTocadoAnteriorX=e.event.layerX;
                                    puntoTocadoAnteriorY=e.event.layerY;
                                }
                            });



                            /*
                            Ext.getCmp("containerVideoPopularCanvas").element.on({
                            touchstart: function(e,node){
                            variableContainerVideoPopularCanvas=e.target;
                            alert("Variable Canvas guardada");
                            }
                            });
                            */
















                        },
                        event: 'initialize'
                    }
                ]
            }
        ]
    }

});