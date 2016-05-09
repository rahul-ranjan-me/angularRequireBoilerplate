module.exports = function(grunt) {

	grunt.initConfig({
		requirejs: {
		  js: {
		      options: {
		          uglify2: {
		              mangle: false
		          },
		          baseUrl: "js",
		          mainConfigFile: "js/main.js",
		          name: 'main',
		          out: "dist/main.js",
		          optimize: 'uglify2'
		      }
		  }
		},
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
				options: {
				globals: {
					jQuery: true
				}
			}
		},
		watch: {
			scripts: {
				files: ['js/**/*',],
				tasks: ['jshint', 'requirejs'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['jshint', 'requirejs']);

};