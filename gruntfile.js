module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
        //Less to css
      less: {
          development: {
              options: {
                  paths: ['src/styles'],
                  compress:true,
              },
              files: {
                  'dist/css/style.css': 'src/styles/style.less'
              }
          }
      },
      watch: {
         css:{
              files: ['src/**/*.less'],
              tasks: ['less']
           }
        },
    });

    //Load Tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Register Tasks
    grunt.registerTask('default', ['less']);
};