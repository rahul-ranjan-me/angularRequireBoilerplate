define([
		'jquery',
		'properties'
	], 
	function(
		$,
		Properties
	) {
	    
	    var makeAjax = function(type, msg){
			var data = {
					id : Properties.appId,
					message : msg,
					type : type
				}

			$.ajax({
				url: "http://localhost:8082/createLog",
				data : data,
				method: 'post'
			}).done(function(res) {
				console.log(res);
			});
		},

		logger = {
			log: function(message){
				makeAjax('event', message);
			},
			warn: function(message){
				makeAjax('warn', message);
			},
			error: function(message){
				makeAjax('error', message);
			}
		}

		return logger;

	}
);