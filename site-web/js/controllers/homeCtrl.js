define(['angular', 'services/adsService'], function(angular){

	var home = angular.module('home',['ads']);

	
	home.controller('homeCtrl', function($scope, adsService){
		adsService.getAds().then(function(response){
			$scope.ads = response.data;
		});
	});
	
	

	return home;
});