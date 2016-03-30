define(['angular', 'angularRoute'], function(angular){

	var routeProvider = function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl:'partials/home.html'
		})
		.when('/myAds', {
			templateUrl:'partials/myAds.html'
		})
		.when('/myFriends', {
			templateUrl:'partials/myFriends.html'
		})
		.when('/detail/:id', {
			templateUrl:'partials/adDetail.html'
		})
		.when('/profil', {
			templateUrl:'partials/profil.html'
		})
		.otherwise({
			redirectTo:'/404'
		});
	};
	
	return routeProvider;
});