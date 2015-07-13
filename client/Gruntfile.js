module.exports = function(grunt) {
	"use strict";
	grunt.initConfig({
		watch: {
			all: {
				files: '**/*.jsx',
				tasks: ['build'],
				options: {
					livereload: true
				}
			}
		},
		browserify: {
			options: {
				watch: true,
				debug:true,
				transform: [
					'babelify'
				]
			},
			dist: {
				files: {
					'dist/app.js': 'index.jsx'
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");


	grunt.registerTask("build", ["browserify"]);
	grunt.registerTask("default", ["watch"]);
};
