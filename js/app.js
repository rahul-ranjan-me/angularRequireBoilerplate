define("app", 
	[
		"angular", 
		"ngResource",
		"ngRoute",

		"controllers/PhoneListCtrl",
		"controllers/PhoneDetailCtrl",

		"text!partials/dashboard.html",
		"text!partials/listing.html",
		"text!partials/detail.html"
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
			angular.bootstrap(document, ['likeastore']);
		};

	    return app;
	}
);