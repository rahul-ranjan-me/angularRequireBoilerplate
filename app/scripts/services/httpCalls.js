define([
		'properties'
	], 
	function(
		properties
	) {
	    
	    return function(xhr){
	    	
	    	this.home = function(params, callback){
	    		xhr.get(properties.home, params, callback);
	    	};
	    	
	    };	

	}
);