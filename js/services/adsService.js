define(['angular'], function(angular){

	var ads = angular.module('ads',[]);
	ads.service('adsService', function($http){
		this.getAds = function(){
			return $http({ cache: true, url:'../data/ads.json', method: 'GET'});
		};
	});
	return ads;
});




