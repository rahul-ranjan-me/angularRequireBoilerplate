var allTestFiles = [];
var TEST_REGEXP = /(_spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app/scripts',

  paths: {
    'angular' : 'libs/angular',
    'text' : '../node_modules/text/text',
    'ngRoute' : '../node_modules/angular-route/angular-route',
    'ngResource': '../node_modules/angular-resource/angular-resource',
    'ngCookies': '../node_modules/angular-cookies/angular-cookies',
    'ngProgressLite': '../node_modules/ngprogress-lite/ngprogress-lite',
    'angularMocks': 'libs/angular-mocks'
  },
  
  shim: {
    ngResource: {
      deps: ['angular'],
      exports: 'angular'
    },
    angularMocks: { 
      deps: ['angular'] 
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

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
