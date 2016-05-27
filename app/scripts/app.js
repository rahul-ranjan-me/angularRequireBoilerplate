define([
		"angular", 
		"ngRoute",

		"controllers/HomeCtrl",
		"controllers/InnerPageCtrl",

		"text!../templates/homeTemplate.html",
		"text!../templates/innerPage.html"
	], 
	function(
		angular,
		ngRoute,

		HomeCtrl,
		InnerPageCtrl,

		homeTemplate,
		innerPage
	) {

	    var app = angular.module("projectModule", ["ngRoute"] )
	    	.controller('HomeCtrl', HomeCtrl)
			.controller('InnerPageCtrl', InnerPageCtrl)
			.config(['$routeProvider', function($routeProvider) {
					$routeProvider.
						when('/', {
							template: homeTemplate,
							controller: 'HomeCtrl'
						}).
						when('/innerPage', {
							template: innerPage,
							controller: 'InnerPageCtrl'
						}).
						otherwise({
							redirectTo: '/'
						});
		}]);

	    app.init = function () {
	    	angular.bootstrap(document, ['projectModule']);
		};

	    return app;
	}
);