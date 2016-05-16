module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'app/test/test-main.js',
      { pattern: 'app/scripts/**/*.js', included: false },
      { pattern: 'app/test/spec/**/*.js', included: false }
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};