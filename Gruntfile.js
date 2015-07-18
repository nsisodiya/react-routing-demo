module.exports = function(grunt) {
	"use strict";
	grunt.initConfig({
		watch: {
			all: {
				files: ['**/*.jsx', "**/*.js", "!dist/**"],
				tasks: ['build'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ["style.css"],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-watch");


	grunt.registerTask("default", ["watch"]);
};
