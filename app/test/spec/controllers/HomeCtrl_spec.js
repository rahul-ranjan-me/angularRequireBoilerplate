define([

	'angular',
	'controllers/HomeCtrl', 
	'angularMocks'
], 
function(
	angular,
	homeCtrl
) {

	describe('MyCtrl', function(){
		var scope, ctrl, httpCalls;

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			httpCalls = {};
			httpCalls.home = function(data, callback){
				callback({data: 'something'});
			}
			ctrl = $controller(homeCtrl, { $scope: scope, httpCalls:httpCalls });
		}));

		it('Check the method response', function() {
			expect(scope.homepageDetail.data).toBe('something');
		});
		
	});

});