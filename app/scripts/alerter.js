define([], 
	function() 
	{

		var eventTree = {},
			timeout = ''; 

		var createCommonDOM = function (content, type) {

			var dom,
				domTop = '<div class="ui-alert">'+
						'<div class="head clearfix">'+
							'<h4>'+content.heading+'</h4>'+
							'<span class="close closeAlert">X</span>'+
						'</div>'+
						'<div class="body clearfix">',
				domMid = '</div><div class="foot"><div class="buttons">',
				domBot = '</div></div></div>',
				domBotNotificaiton = '</div>';
				
			dom = type === 'notification' ? domTop+createsPara(content.para, type)+domBotNotificaiton : domTop+createsPara(content.para, type)+domMid+createsButton(content.buttons)+domBot;				
			
			return dom;
		},

		closeAlert = function(key){
			var allButton = document.querySelectorAll(".closeAlert");
			for(var i in allButton){
				allButton[i].onclick = function(){
					removeAlert();
					var elemId = this.getAttribute('id');
					if(eventTree[key] && eventTree[key][elemId]) eventTree[key][elemId]();
					eventTree = {};
				}
			}

			document.querySelector('.alert-bg').onclick = function(){
				removeAlert();
				eventTree = {};
			};
		},

		createsButton = function(button){
			var buttons = '';
			for(var i in button){
				buttons += '<button type="button" id="'+toCamelCase(button[i].toLowerCase())+'" class="closeAlert">'+button[i]+'</button>';
			}
			return buttons;
		},

		createsPara = function(para, type){
			
			var paras = '';
			for(a in para){
				paras += '<p>'+para[a]+'</p>';
			}

			return '<span class="ico-alert ico-alert-'+type+'"></span><div class="alerter-content alert-'+type+'">'+paras+'</div>';

		},

		manageContent = function(args){
			var content = {
				para : []
			};
			for( var i=0; i<args.length; i++ ){
				if(i === 0){
					content.heading = args[i];
				}else if(args[i]  instanceof Array){
					content.buttons = args[i];
				}else{
					content.para.push(args[i]);
				}
			}
			return content;
		},

		removeAlert = function(){
			var alert = document.getElementById('alerter');
			alert.parentNode.removeChild(alert);
			if(timeout !== '')clearTimeout(timeout);
		},
	    
	    alerter = {
	    	buildAlert: function(arguments, type){
	    		var content = manageContent(arguments),
					wrapperElem = document.createElement("div"),
					rand = Math.random().toString();

				this.randomKey = rand.split('.')[1];
				
				eventTree[this.randomKey] = {};
				
				wrapperElem.setAttribute('id', 'alerter');

				document.body.appendChild(wrapperElem);

				document.getElementById('alerter').innerHTML = '<div class="alert-bg"></div>'+createCommonDOM(content, type);
				
				closeAlert(this.randomKey);
				
				return this;
	    	},
			alert: function(){
				this.buildAlert(arguments, 'alert');
				return this;
			},
			warn: function(){
				this.buildAlert(arguments, 'warn');
				return this;
			},
			error: function(){
				this.buildAlert(arguments, 'error');
				return this;
			},
			prompt:function(){
				this.buildAlert(arguments, 'prompt');
				return this;
			},
			notification:function(){
				this.buildAlert(arguments, 'notification');
				timeout = window.setTimeout(removeAlert, arguments[arguments.length-1][0]*1000);
				return this;
			},
			on:function(event, callback){
				if(callback) eventTree[this.randomKey][toCamelCase(event)] = callback;
 			}
		},

		toCamelCase = function(str) {
			return str
				.replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
				.replace(/\s/g, '')
				.replace(/^(.)/, function($1) { return $1.toLowerCase(); });
		};

		return alerter;

	}
);