define([
		"angular", 
		"ngRoute",

		// Controllers

		"controllers/HomeCtrl",
		"controllers/InnerPageCtrl",

		// Directives

		"directives/header",

		// Services

		"services/httpCalls.js",

		//Factories

		"factory/xhr.js",

		// Templates

		"text!../templates/homeTemplate.html",
		"text!../templates/innerPage.html"
	], 
	function(
		angular,
		ngRoute,

		// Controllers

		HomeCtrl,
		InnerPageCtrl,

		// Directives

		header,

		// Services

		httpCalls,

		// Factory

		xhr,

		// Templates

		homeTemplate,
		innerPage
	) {

	    var app = angular.module("projectModule", ["ngRoute"] )

	    	// Controllers

	    	.controller('HomeCtrl', HomeCtrl)
			.controller('InnerPageCtrl', InnerPageCtrl)

			// Directives

	    	.directive('headerDirective', header)
		
			// Services

			.service('httpCalls', httpCalls)

			// Factory
			
			.factory('xhr', xhr)
			
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