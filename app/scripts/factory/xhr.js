define([], 
	function(
	) {
	    
	    return function($http){
	    	
	    	var xhr = {};

	    	// Will be used for GET request

	    	xhr.get = function(url, params, successFunction, errorFunction){
	    		$http({
	    			url : url,
	    			method: 'GET',
	    			params: params ? params : {}
	    		})
	    		.then(function successCallback(response) {
			        if(successFunction){successFunction(response.data);}
			    }, function errorCallback(response) {
					if(errorFunction){errorFunction(response.data);}
				});
	    	};


	    	// Will be used for POST request

	    	xhr.post = function(url, data, successFunction, errorFunction){
	    		$http({
	    			url : url,
	    			method: 'POST',
	    			data: data ? data : {}
	    		})
	    		.then(function successCallback(response) {
			        if(successFunction){successFunction(response.data);}
			    }, function errorCallback(response) {
					if(errorFunction){errorFunction(response.data);}
				});
	    	};

	    	// Will be used for PUT request

	    	xhr.put = function(url, data, successFunction, errorFunction){
	    		$http({
	    			url : url,
	    			method: 'PUT',
	    			data: data ? data : {}
	    		})
	    		.then(function successCallback(response) {
			        if(successFunction){successFunction(response.data);}
			    }, function errorCallback(response) {
					if(errorFunction){errorFunction(response.data);}
				});
	    	};

	    	// Will be used for DELETE request

	    	xhr.delete = function(url, data, successFunction, errorFunction){
	    		$http({
	    			url : url,
	    			method: 'DELETE',
	    			data: data ? data : {}
	    		})
	    		.then(function successCallback(response) {
			        if(successFunction){successFunction(response.data);}
			    }, function errorCallback(response) {
					if(errorFunction){errorFunction(response.data);}
				});
	    	};

	    	return xhr;
	    };	

	}
);