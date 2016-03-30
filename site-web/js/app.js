define([
	'angular',
	'directives/routeProvider',
	'angularRoute',
	'services/userService',
	'directives/customDirective',
	'controllers/homeCtrl'

], function(angular, routeProvider){

	var app = angular.module('cheaplle', ['ngRoute','user', 'home', 'dirs']);

	app.config(['$routeProvider', routeProvider]);

	app.controller('appCtrl', function($scope, userService){
		userService.getUser().then(function(response){
			$scope.user = response.data;
		});
	});

	app.init = function(){
		angular.bootstrap(document, ['cheaplle']);
	};

	return app;
});