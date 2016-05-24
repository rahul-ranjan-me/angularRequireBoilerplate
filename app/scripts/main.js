require.config({
	paths: {
		'angular' : '../../node_modules/angular/angular',
		'text' : '../../node_modules/text/text',
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