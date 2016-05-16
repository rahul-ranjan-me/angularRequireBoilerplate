define([
		"angular", 
		"ngResource",
		"ngRoute",

		"controllers/PhoneListCtrl",
		"controllers/PhoneDetailCtrl",

		"text!../templates/dashboard.html",
		"text!../templates/listing.html",
		"text!../templates/detail.html"
	], 
	function(
		angular,
		ngResource,
		ngRoute,

		phoneListCtrl,
		PhoneDetailCtrl,

		dashboard,
		listing,
		details
	) {

	    var app = angular.module("likeastore", ["ngResource", "ngRoute"] )
	    	.controller('PhoneListCtrl', phoneListCtrl)
			.controller('PhoneDetailCtrl', PhoneDetailCtrl)
			.config(['$routeProvider', function($routeProvider) {
					$routeProvider.
						when('/phones', {
							template: listing,
							controller: 'PhoneListCtrl'
						}).
						when('/phones/:phoneId', {
							template: details,
							controller: 'PhoneDetailCtrl'
						}).
						otherwise({
							redirectTo: '/phones'
						});
		}]);

	    app.init = function () {
	    	console.log('here');
			angular.bootstrap(document, ['likeastore']);
		};

	    return app;
	}
);