require.config({
	paths: {
		'angular' : '../../node_modules/angular/angular',
		'text' : '../../node_modules/text/text',
		'ngRoute' : '../../node_modules/angular-route/angular-route',
		'ngResource': '../../node_modules/angular-resource/angular-resource',
		'ngCookies': '../../node_modules/angular-cookies/angular-cookies',
		'ngProgressLite': '../../node_modules/ngprogress-lite/ngprogress-lite'
	},
	shim: {
		ngResource: {
			deps: ['angular'],
			exports: 'angular'
		},
		ngRoute: {
			deps: ['angular'],
			exports: 'angular'
		},
		ngCookies: {
			deps: ['angular'],
			exports: 'angular'
		},
		ngProgress: {
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