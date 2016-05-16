define([], 
	function(
	) {
	    function PhoneListCtrl($scope){

	    	this.$scope = $scope;
	    	$scope.toPrint = "This is a listing page here";

	    }

	    return PhoneListCtrl;
	}
);