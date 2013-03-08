Ext.define('MyApp.view.override.mapaSolicitudTaxi', {
    override: 'MyApp.view.mapaSolicitudTaxi',
    getMapOptions: function(){
    return Ext.merge({},this.options || this.getInitialConfig('mapOptions'));
    }
    
});