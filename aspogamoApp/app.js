/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    viewport: {
        id: 'viewportAspogamo'
    },

    models: [
        'modelPrueba'
    ],
    stores: [
        'storePrueba'
    ],
    views: [
        'tabPanelPrincipal',
        'containerHome',
        'containerMain',
        'containerHeader',
        'containerProfile',
        'containerPopular',
        'containerMyVideos',
        'BASURERO',
        'containerInicial',
        'tabPanelInicial',
        'containerIngresoUserYPass',
        'containerRegistroUser'
    ],
    name: 'MyApp',

    launch: function() {
        //Se define inicialmente la variable para habilitar el dibujado
        variableHabilitarDibujado=0;
        //Cuando esta variable esta en 0, no se puede dibujar, mientras que cuando
        //esta en 1, se puede dibujar
        variableParaDetenerDibujado=0;
        //Esta es la funcion que permite dibujar, con un if adentro
        //Se corre el for solamente cuando la variable esta en 1... esto significa que
        //se esta dibujando el video en el canvas
        funcionDibujadoEnCanvas=function(){
            if(variableParaDetenerDibujado===1){
                for(var i=0; i<arregloDePuntosDibujoX.length; i++){
                    //Se crean algunas variables para el canvas que son necesarias
                    canvasContext=variableContainerVideoPopularCanvas.getContext("2d");
                    canvasContext.strokeStyle='rgb(55,55,255)';
                    canvasContext.beginPath();
                    //En el caso de que el punto en el plano del canvas sea tal que corres-
                    //ponga a un caso de que se haya despegado el dibujado, entonces
                    //no se le da continuidad al REdibujado en el canvas, esto a traves
                    //del arreglo arregloDePuntosDibujoBool
                    if(arregloDePuntosDibujoBool[i]!==1){
                        canvasContext.moveTo(arregloDePuntosDibujoX[i-1],arregloDePuntosDibujoY[i-1]);
                    }
                    //Para cada punto, se enlaza con el anterior
                    canvasContext.lineTo(arregloDePuntosDibujoX[i],arregloDePuntosDibujoY[i]);
                    canvasContext.stroke();
                    canvasContext.closePath();
                }
            }
            //El REdibujado de las lineas en el canvas se hace cada 10 milisegundos
            setTimeout(funcionDibujadoEnCanvas, 5);
        };
        //Se esperan dos segundos antes de comenzar con este proceso de dibujado,
        //para que ya los objetos existan
        setTimeout(funcionDibujadoEnCanvas,2000);

        //Funcion de dibujado del video en el canvas
        draw=function(v,c,bc,w,h) {
            if(v.paused || v.ended)	return false;
            // First, draw it into the backing canvas
            bc.drawImage(v,0,0,w,h);
            // Grab the pixel data from the backing canvas
            if(variableBoolParaDetencionDraw===0){
                setTimeout(draw,20,v,c,bc,w,h);
            }
            else{
            }
        };




        funcionIniciadoPlayMyVideos=function(video){
            video.addEventListener('play', function(){
                video.playbackRate=1;
                variableBoolParaDetencionDraw=0;
                cw = video.clientWidth;
                ch = video.clientHeight;
                //alert(Ext.getCmp("viewportAspogamo").getWindowWidth());
                variableContainerVideoPopularCanvas.width = Ext.getCmp("viewportAspogamo").getWindowWidth()*0.9;
                variableContainerVideoPopularCanvas.height = Ext.getCmp("viewportAspogamo").getWindowHeight()*0.8*0.75;
                canvasContext=variableContainerVideoPopularCanvas.getContext('2d');
                draw(video,canvasContext,canvasContext,variableContainerVideoPopularCanvas.width,variableContainerVideoPopularCanvas.height);
            },false);
            //En caso de que se detenga el video, se detiene el dibujado del
            //video sobre el canvas
            video.addEventListener('stop', function(){
                variableBoolParaDetencionDraw=1;
            },false);
        };


        Ext.create('MyApp.view.tabPanelInicial', {fullscreen: true});
    }

});
