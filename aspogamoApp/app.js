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
        //AQUI VA EL CODIGO DE VERIFICADO DE GUARDADO DEL LOGIN EN 
        //EL LOCALSTORAGE


        try{
            //alert(Ext.os.deviceType);
            if(Ext.os.deviceType!="Desktop"){
                FB.init({ appId: "162179373948765", nativeInterface: CDV.FB, useCachedDialogs: false });
            }
            else{
                window.fbAsyncInit = function() {
                    // init the FB JS SDK
                    FB.init({
                        appId      : '162179373948765', // App ID from the App Dashboard
                        channelUrl : '//www.didicr.com/channel.html', // Channel File for x-domain communication
                        status     : true, // check the login status upon init?
                        cookie     : true, // set sessions cookies to allow your server to access the session?
                        xfbml      : true  // parse XFBML tags on this page?
                    });
                };
            }
            testAPI = function(){
                //FB.api('/me', function(response) {
                //---------------------------------------------------------------------------------------------------------------------------------------------------------------
                //alert("entro en testAPI");
                var url = '/me?fields=name,email,birthday';
                FB.api(url, function(response) {
                    //funcionAEjecutarLogeoConFacebook();
                    MyApp.app.logInFacebookSettings();
                    //DiDi.app.getController("FuncionesGeneral").funcionEjecucionCodigoInternoFBAPI(response);
                });
            };
            login = function() {
                //    alert("fgey");
                FB.login(
                function(response) {
                    //alert(response.session);
                    if (response.authResponse) {
                        Ext.Msg.alert('Aviso', 'Logeado.', Ext.emptyFn);
                        testAPI();
                    } else {
                        Ext.Msg.alert('Aviso', 'No logeado.', Ext.emptyFn);
                    }
                },
                { scope: "email,user_birthday" }
                );
            };
            if(Ext.os.deviceType=="Desktop"){
                (function(d, debug){
                    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                    if (d.getElementById(id)) {return;}
                    js = d.createElement('script'); js.id = id; js.async = true;
                    js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
                    ref.parentNode.insertBefore(js, ref);
                }(document, false));
            }
            //--------------------------------------------------------------------------------------------------------------------------------------
        }
        catch(e){
            Ext.Msg.alert('Aviso', 'Fail to connect with facebook.', Ext.emptyFn);
        }












        //------------------------------------------------------------------------
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
                    canvasContext=document.getElementById("canvasContainerMyVideos").getContext("2d");
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
            try{
                clearTimeout(variableTimeOutGeneral);
            }
            catch(e){}
            if(v.paused || v.ended)	return false;
            // First, draw it into the backing canvas
            bc.drawImage(v,0,0,w,h);
            // Grab the pixel data from the backing canvas
            if(variableBoolParaDetencionDraw===0){
                variableTimeOutGeneral=setTimeout(draw,20,v,c,bc,w,h);
            }
            else{
            }
        };



        /*
        funcionIniciadoPlayMyVideos=function(video){
        video.addEventListener('play', function(){
        video.playbackRate=1;
        variableBoolParaDetencionDraw=0;
        cw = video.clientWidth;
        ch = video.clientHeight;
        //alert(Ext.getCmp("viewportAspogamo").getWindowWidth());
        document.getElementById("canvasContainerMyVideos").width = Ext.Viewport.getWindowWidth()*0.9;
        document.getElementById("canvasContainerMyVideos").height = Ext.Viewport.getWindowHeight()*0.8*0.75;
        canvasContext=document.getElementById("canvasContainerMyVideos").getContext('2d');
        draw(video,canvasContext,canvasContext,document.getElementById("canvasContainerMyVideos").width,document.getElementById("canvasContainerMyVideos").height);
    },false);
    //En caso de que se detenga el video, se detiene el dibujado del
    //video sobre el canvas
    video.addEventListener('stop', function(){
        variableBoolParaDetencionDraw=1;
    },false);
    };
    */
    Ext.create('MyApp.view.tabPanelInicial', {fullscreen: true});
    },

    funcionSeteadoConfigInicial: function() {
        Ext.getCmp('containerMyVideosOriginal').setHtml("<p><video id='videoContainerMyVideos' width='100%' controls src='./resources/videos/1.mp4' type='video/mp4'>Bla.</video></p>");


        //Se setea el html del canvas para que tenga las dimensiones adecuadas
        Ext.getCmp("containerMyVideosCanvas").setHtml("<div id='divDelCanvasContainerMyVideos'> <canvas id='canvasContainerMyVideos' width="+Ext.Viewport.getWindowWidth()*0.9+"px height="+Ext.Viewport.getWindowHeight()*0.8*0.85+"px></canvas> </div>");


        /*
        //INICIALIZACION DE COSAS NECESARIAS PARA EL DIBUJADO
        //Esto 3 arreglos permite hacer el REdibujado, y el tercero
        //de estos arreglos es el que permite hacer la identificacion
        //de cuando se despego del dibujado el dedo o el mouse
        arregloDePuntosDibujoX=[];
        arregloDePuntosDibujoY=[];
        arregloDePuntosDibujoBool=[];
        //Se pone a escuchar al containerMyVideosCanvas ante el toque inicial
        Ext.getCmp("containerMyVideosCanvas").element.on({
            touchstart: function(e,node){
                //alert('se toco!');
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


        //Se agrega el evevnto de play al video original, de manera tal que dibuje en el
        //otro canvas
        document.getElementById("videoContainerMyVideos").addEventListener('play', function(){
            alert('we');
            document.getElementById("videoContainerMyVideos").playbackRate=1;
            variableBoolParaDetencionDraw=0;
            cw = document.getElementById("videoContainerMyVideos").clientWidth;
            ch = document.getElementById("videoContainerMyVideos").clientHeight;
            //alert(Ext.Viewport.getWindowWidth());
            document.getElementById("canvasContainerMyVideos").width = Ext.Viewport.getWindowWidth()*0.9;
            document.getElementById("canvasContainerMyVideos").height = Ext.Viewport.getWindowHeight()*0.8*0.75;
            canvasContext=document.getElementById("canvasContainerMyVideos").getContext('2d');
            draw(document.getElementById("videoContainerMyVideos"),canvasContext,canvasContext,document.getElementById("canvasContainerMyVideos").width,document.getElementById("canvasContainerMyVideos").height);
            alert('dibujando');
        },false);
        //En caso de que se detenga el video, se detiene el dibujado del
        //video sobre el canvas
        document.getElementById("videoContainerMyVideos").addEventListener('stop', function(){
            variableBoolParaDetencionDraw=1;
        },false);
        */
    },

    funcionLogInGeneral: function() {
        Ext.getCmp("tabPanelInicial").setActiveItem(Ext.getCmp("containerMain"));


        //Llamado sujeto a paso de parametros
        MyApp.app.funcionSeteadoConfigInicial();
    },

    logInFacebookSettings: function() {
        Ext.getCmp("panelEleccionLogInFacebookOrNot").setHidden(1);



        MyApp.app.funcionLogInGeneral();
    },

    logInSinFacebookSettings: function() {


        MyApp.app.funcionLogInGeneral();
    },

    funcionIniciadoPlayMyVideos: function(video) {
        video.addEventListener('play', function(){
            video.playbackRate=1;
            variableBoolParaDetencionDraw=0;
            cw = video.clientWidth;
            ch = video.clientHeight;
            //alert(Ext.getCmp("viewportAspogamo").getWindowWidth());
            document.getElementById("canvasContainerMyVideos").width = Ext.Viewport.getWindowWidth()*0.9;
            document.getElementById("canvasContainerMyVideos").height = Ext.Viewport.getWindowHeight()*0.8*0.75;
            canvasContext=document.getElementById("canvasContainerMyVideos").getContext('2d');
            draw(video,canvasContext,canvasContext,document.getElementById("canvasContainerMyVideos").width,document.getElementById("canvasContainerMyVideos").height);
        },false);
        //En caso de que se detenga el video, se detiene el dibujado del
        //video sobre el canvas
        video.addEventListener('stop', function(){
            variableBoolParaDetencionDraw=1;
        },false);
    },

    dibujarVideoSobreCanvas: function() {

    }

});
