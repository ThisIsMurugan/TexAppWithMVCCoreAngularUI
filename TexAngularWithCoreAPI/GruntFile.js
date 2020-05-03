module.exports = function (grunt) {
    //load the task
    grunt.loadNpmTasks('grunt-shell');
    //init config
    grunt.initConfig({
        shell: {        
            command: ["cd C:\\Users\\z003y3xd\\source\\repos\\TexAngularWithCoreAPI\\TexAngularWithCoreAPI\\wwwroot\\TexUI","ng build --force --deploy-url=/TexUI/dist/TexUI/ --watch"].join('&&')
          }
    });
    grunt.registerTask('ngbuildtask', ['shell']);
}