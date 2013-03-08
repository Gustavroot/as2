Ext.define('MyApp.view.override.mapaCercaniaEventos', {
    override: 'MyApp.view.mapaCercaniaEventos',
    getMapOptions: function(){
    return Ext.merge({},this.options || this.getInitialConfig('mapOptions'));
    }
});