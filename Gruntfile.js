'use strict';

module.exports = function (grunt) {
	

	// Automatically load required Grunt tasks
	require('jit-grunt')(grunt, {
		useminPrepare: 'grunt-usemin'
	});

  // Define the configuration for all the tasks
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	clean: {
  		build: {
  			src: [ 'www/']
  		}
  	},
  	sass: {                              
  		dist: {
  			files: {
  				'app.css': 'app.scss'
  			}
  		}
  	},
  	useminPrepare: {
  		html: 'index.html',
  		options: {
  			dest: 'www'
  		}
  	},
  	concat: {
  		options: {
  			separator: ';'
  		},
  		dist: {}
  	},
  	cssmin: {
  		dist: {}
  	},
  	uglify: {
  		dist: {}
  	},
  	copy: {
  		dist: {
  			src: '*.html',
  			dest: 'www',
  			expand: true
  		},
  		resources:{
  			expand: true,
  			dot: true,
  			cwd: 'resources',
  			src: ['**'],
  			dest: 'www/resources'
  		}
  	},
  	autoprefixer: {
  		options: {
  			browsers: ['last 4 versions']
  		},
  		your_target: {
  			src: 'app.css',
  			dest: 'app.css'
  		},
  	},
  	filerev: {
  		options: {
  			encoding: 'utf8',
  			//algorithm: 'md5',
  			//length: 20
  		},

  		release: {
  			files: [{
  				src: [
  				'www/*.js',
  				'www/*.css',
  				]
  			}]
  		}
  	},
  	usemin: {
  		html: ['www/*.html'],
  		css: ['www/*.css'],
  		options: {
  			assetsDirs: ['www', 'www']
  		}
  	},
  	watch: {
  		copy: {
  			files: [ '*.html'],
  			tasks: [ 'build' ]
  		},

  		scripts: {
  			files: ['app.js'],
  			tasks:[ 'build']
  		},

  		styles: {
  			files: ['app.css'],
  			tasks:['build']
  		},

  		livereload: {
  			options: {
  				livereload: '<%= connect.options.livereload %>'
  			},

  			files: [
  			'*.html',
  			'*.css',
  			'*.js',
  			'resources/*.js',
  		'resources/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
  		]
  	}
  },

  connect: {
  	options: {
  		port: 9000,
  		hostname: 'localhost',
  		livereload: 35729
  	},

  	dist: {
  		options: {
  			open: true,
  			base:{
  				path: 'www',
  				options: {
  					index: 'index.html',
  					maxAge: 300000
  				}
  			}
  		}
  	}
  }



});


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', [
  	'clean',
  	'sass',
  	'autoprefixer',
  	'useminPrepare',
  	'concat',
  	'uglify',
  	'cssmin',
  	'copy',
  	'filerev',
  	'usemin'
  	]);
  grunt.registerTask('serve',['build','connect:dist','watch']);
  grunt.registerTask('default',['build']);

};