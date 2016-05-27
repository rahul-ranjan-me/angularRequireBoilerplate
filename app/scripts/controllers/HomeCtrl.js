define([], 
	function() {
	    function HomeCtrl($scope){

	    	this.$scope = $scope;
	    	$scope.pageName = "Homepage";

	    }

	    return HomeCtrl;
	}
);