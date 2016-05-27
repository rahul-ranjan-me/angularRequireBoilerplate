define(
	[
		"text!../../templates/header.html",
	], 
	function(
		header
	){
    
	    return function(){
	    	return {
		    	template : header,
		    	scope : {},
		    	replace : true,
		    	link : function($scope, elem, attrs){
		    		
		    		$scope.headerText = attrs.headertext;
		    		
		    	}
		    };
	    };	

	}
);