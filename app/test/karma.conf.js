module.exports = function(config) {
  config.set({
    basePath: './..',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      { pattern: 'scripts/**/*.js', included: false },
      { pattern: 'test/libs/**/*.js', included: false },
      { pattern: 'test/spec/**/*.js', included: false },
      'test/test-main.js'
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