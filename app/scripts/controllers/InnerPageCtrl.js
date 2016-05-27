define([], 
	function(
	) {
	    function PhoneDetailCtrl($scope){

	    	this.$scope = $scope;
	    	$scope.toPrint = "Rahul";

	    	$scope.changeName = function(val){
	    		this.changePrint(val);
	    	}.bind(this);
	    }

	    PhoneDetailCtrl.prototype.changePrint = function(val){
	    	this.$scope.toPrint = "China";
	    };

	    return PhoneDetailCtrl;
	}
);