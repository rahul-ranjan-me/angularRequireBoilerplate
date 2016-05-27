define([

	'angular',
	'controllers/InnerPageCtrl', 
	'angularMocks'
], 
function(
	angular,
	homeCtrl
) {

	describe('MyCtrl', function(){
		var scope, ctrl;

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller(homeCtrl, { $scope: scope });
		}));

		it('Check the scopeVal', function() {
			expect(scope.pageName).toBe('Innerpage');
		});

		it('Check the hash val', function() {
			expect(scope.hash).toBe(undefined);
		});
		
	});

});