/**
 * - `Makefile` if for `make`
 * - `Rakefile` is for `rake`,
 * - `Gruntfile` is for `grunt` :)
 */

module.exports = function(grunt) {
	grunt.initConfig({

		// Package variables
		pkg: grunt.file.readJSON('package.json'),

		dogescript: {
			amaze: {
				options: {
					// optional beautify
					beauty: true,

					// optional enable true-doge mode
					trueDoge: false,
				},
				src: ['toe.djs']
			}
		},

		// Minifies a `.js` file into a `.min.js`
		uglify: {
			options: {
				banner: '/* full source code at https://github.com/alexdantas/doge-toe/ */',
				report: 'min',
				preserveComments: 'false',
				mangle: true,
				compress: {
					drop_console: true
				}
			},
			dist: {
				files: {
					'toe.min.js': [
						'toe.js'
					]
				}
			}
		},

		// After uglifying, remove the original
		// non-minimized file
		clean: [
			'toe.js'
		]
	});

	grunt.loadNpmTasks('grunt-dogescript');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Things that will run by default
	grunt.registerTask('default', [
		'dogescript',
		'uglify',
		'clean'
	]);
};

