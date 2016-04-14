module.exports = function(grunt) {

  // Project configuration.
  // Configure your modules name
  // Must end in 'module' file names must mirror modules dir name
  var MODULE_NAME = 'members-list-module';

  // Are sassing or lessing?
  // string: '.scss' or '.less'
  var preprocext = '.scss';

  //======================================
  var MODULE_DIR = MODULE_NAME + '/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    files: {
      rtl:     MODULE_DIR + MODULE_NAME + '-rtl.css',
      css:     MODULE_DIR + MODULE_NAME + '.css',
      preproc: MODULE_DIR + MODULE_NAME + preprocext,
    },

    // https://github.com/sass/node-sass  - config
    sass: {                              // Task
      dist: {                            // Target
        options: { // Target options
          outputStyle: 'expanded',
          unixNewlines: true,
          indentType: 'tab',
          indentWidth: '1',
          indentedSyntax: false,
        },
        styles: {
          cwd: MODULE_DIR,
          extDot: 'last',
          expand: true,
          ext: '.css',
          flatten: true,
          //src:  '<%= files.preproc %>',
          //dest: '<%= files.css %>',
        },
        files: {                        // Dictionary of files
          '<%= files.css %>':  '<%= files.preproc %>',       // 'destination': 'source'
        }
      }
    },

  // Uncomment less task to use.
  // https://github.com/gruntjs/grunt-contrib-less
/*
    less: {
      development: {
        options: {
          paths: [ MODULE_DIR ]
        },
        files: {
          '<%= files.css %>':  '<%= files.preproc %>'
        }
      },
      production: {
        options: {
          paths: [ MODULE_DIR ],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))(cleanCssOptions)
          ],
          //modifyVars: {
          //  imgPath: '"http://mycdn.com/path/to/images"',
          //  bgColor: 'red'
          //}
        },
        files: {
          '<%= files.css %>':  '<%= files.preproc %>'
        }
      }
    },
*/
    rtlcss: {
      options: {
      //map: {inline: false},
          opts: {
            clean: true,
            processUrls: false,
            autoRename: false,
          },
        saveUnmodified: false,
        sourcemap: 'none',
      },

      buildrtl: {

        core: {
        expand: true,
        cwd: 'style-modules/',
        dest: MODULE_DIR,
        ext: '-rtl.css',
        src: '<%= files.css %>',
        },
        files:  {
            '<%= files.rtl %>' : '<%= files.css %>',
        }

      },
    },
    // lint scss files
    scsslint: {
      options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml'
      },
      core: [ MODULE_DIR + MODULE_NAME + preprocext ]
    },
    checkDependencies: {
      //https://www.npmjs.com/package/grunt-check-dependencies
      this: {
        options: {
            onlySpecified: true,
            // install default = false
            install: false,
        },
        // your_target: {
            // Target-specific file lists and/or options go here.
        // }
      },
    },
    watch: {
      //scripts: {
        //files: ['assets/js/*.js'],
        //tasks: ['concat'],
      //},
      sass: {
        files: [
          MODULE_DIR + MODULE_NAME + preprocext,
          ],
        tasks: 'sass'
      }
      // uncomment to let 'watch' run on less files.
     /* less: {
        files: [
          MODULE_DIR + MODULE_NAME + preprocext,
          ],
        tasks: 'less'
      } */
    }
});

  grunt.loadNpmTasks('grunt-check-dependencies');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');
  //grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-rtlcss');

  // Build rtl css
  grunt.registerTask('commit', ['rtlcss', 'scsslint']);

  // Default task(s).
  // ?
  grunt.registerTask('default', ['uglify',]);

};
