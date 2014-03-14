module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      specs: {
        options: {
          port: 9000
        }
      }
    },
    jasmine: {
      specs: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js',
          keepRunner: true
        }
      }
    },
    watch: {
      specs: {
        files: ['src/**/*.js', 'specs/**/*.js'],
        tasks: 'jasmine:specs'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('test', ['connect', 'watch'])
}