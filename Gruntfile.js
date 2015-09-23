module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/*.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/*.js']
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'static',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jshint', 'uglify']);
};
