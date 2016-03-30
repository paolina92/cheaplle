define(['angular'], function(angular){
	var dirs = angular.module('dirs',[]);
	dirs.directive('clickLink', ['$location', function($location) {
	    return {
	        link: function(scope, element, attrs) {
	            element.on('click', function() {
	                scope.$apply(function() {
	                    $location.path(attrs.clickLink);
	                });
	            });
	        }
	    }
	}]);

	return dirs;
});