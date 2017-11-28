module.exports = function(grunt) {
  require( 'load-grunt-tasks' )(grunt);
  grunt.initConfig({
    compress: {
      main: {
        options: {
          archive: 'employeeservice.zip',
          pretty: true
        },
        expand: true,
        cwd: './',
        src: ['**/*'],
        dest: './'
      }
    }
  })
  grunt.registerTask( 'default', ['compress']);
};
