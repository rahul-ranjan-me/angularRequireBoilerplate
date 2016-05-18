define([], 
	function(
	) {
	    function PhoneListCtrl($scope){

	    	this.$scope = $scope;
	    	$scope.toPrint = "This is a listing page here there";

	    }

	    return PhoneListCtrl;
	}
);