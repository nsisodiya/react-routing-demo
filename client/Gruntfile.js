module.exports = function(grunt) {
	"use strict";
	//var jsFiles = ["Gruntfile.js", "controllers/**/*.js", "public/js/**/*.js", "meta/**/*.js", "models/**/*.js", "routes/**/*.js", "./*.js"];

	grunt.initConfig({
//		jshint: {
//			all: jsFiles,
//			options: {
//				jshintrc: ".jshintrc",
//				jshintignore: ".jshintignore"
//			}
//		},
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
//		,
//		jsbeautifier: {
//			js: {
//				src: jsFiles,
//				options: {
//					config: "jsbeautifier.json"
//				}
//			},
//			json: {
//				fileTypes: [".json"],
//				src: ["package.json", "jsbeautifier.json"],
//				options: {
//					config: "jsbeautifier.json"
//				}
//			}
//		}
	});
//
//	grunt.loadNpmTasks("grunt-contrib-jshint");
//	grunt.loadNpmTasks("grunt-jsbeautifier");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");


	grunt.registerTask("build", ["browserify"]);
	grunt.registerTask("default", ["watch"]);
};
