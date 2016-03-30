define(['angular'], function(angular){

	var user = angular.module('user',[]);
	user.service('userService', function($http){
		this.getUser = function(){
			return $http({ cache: true, url:'../data/user.json', method: 'GET'});
		};
	});
	return user;
});




