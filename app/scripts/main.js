require.config({
	paths: {
		'angular' : '../../node_modules/angular/angular',
		'jquery' : '../../node_modules/jquery/dist/jquery',
		'text' : '../../node_modules/text/text',
		'css' : '../../node_modules/require-css/css',
		'css-builder' : '../../node_modules/require-css/css-builder',
		'normalize' : '../../node_modules/require-css/normalize',
		'ngRoute' : '../../node_modules/angular-route/angular-route'
	},
	shim: {
		ngRoute: {
			deps: ['angular'],
			exports: 'angular'
		},
		angular: {
			exports : 'angular'
		},
		jquery: {
			exports : '$'
		}
	},
	baseUrl: '/scripts'
});

require(['app'], function (app) {
	app.init();
});