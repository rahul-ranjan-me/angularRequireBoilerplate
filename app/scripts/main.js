require.config({
	paths: {
		'angular' : '../../node_modules/angular/angular',
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
		}
	},
	baseUrl: '/scripts'
});

require(['app'], function (app) {
	app.init();
});