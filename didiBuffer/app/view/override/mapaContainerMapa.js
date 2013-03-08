Ext.define('MyApp.view.override.mapaContainerMapa', {
    override: 'MyApp.view.mapaContainerMapa',
    getMapOptions: function(){
    return Ext.merge({},this.options || this.getInitialConfig('mapOptions'));
    }
    
});