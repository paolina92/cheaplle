require.config({
	baseUrl:'js',
	paths:{
		'angular':'../libs/angular.min',
		'angularRoute':'../libs/angular-route.min'
	},
	shim:{
		angular:{
			exports:'angular'
		},
		angularRoute:['angular']
	}
});

require(['app'], function(app){
	app.init();
});