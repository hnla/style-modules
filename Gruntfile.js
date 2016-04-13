module.exports = function(grunt) {

  // Project configuration.
  // Configure your modules name
  var MODULE_NAME = 'members-list-module';

  //======================================
  var MODULE_DIR = MODULE_NAME + '/';
  var DEST_FILE  = MODULE_DIR + MODULE_NAME + '.css';
  var SRC_FILE   = MODULE_DIR + MODULE_NAME + '.scss';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        styles: {
          cwd: 'style-modules/',
          extDot: 'last',
          expand: true,
          ext: '.css',
          flatten: true,
          src: [MODULE_DIR + '*.scss'],
          dest: 'style-modules/' + MODULE_DIR,
          options: { // Target options
            style: 'expanded',
            //unixNewlines: true
            indentType: 'tab',
            indentWidth: '1',
            indentedSyntax: false,
            sourceMap: false,
          },
        },
        files: {                        // Dictionary of files
          'members-list-module/members-list-module.css':  'members-list-module/members-list-module.scss',       // 'destination': 'source'
        }
      }
    },
    rtlcss: {
      buildrtl: {
        options: {
          map: {inline: false},
          opts: {
            clean: false,
          },
        },
        expand: true,
        cwd: 'style-modules/',
        dest: 'style-modules/' + MODULE_DIR,
        //ext: '-rtl.css',
        src: ['style-modules/members-list-module/members-list-module.css'],
      },
    },

    scsslint: {
      options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml'
      },
      core: [ MODULE_DIR + MODULE_NAME + '.scss' ]
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
          MODULE_DIR + MODULE_NAME + '.scss',
          ],
        tasks: 'sass'
      }
    }
});

  grunt.loadNpmTasks('grunt-check-dependencies');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-rtlcss');

  // Build rtl css
  grunt.registerTask('commit', ['rtlcss', 'scsslint']);

  // Default task(s).
  // ?
  grunt.registerTask('default', ['uglify',]);

};
