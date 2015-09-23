module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'static/js/*.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            jshintrc: '.jshintrc',
            files: ['Gruntfile.js', 'static/js/*.js']
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'static',
                    keepalive: true
                }
            }
        },
        jscs: {
            src: 'static/js/*.js',
            options: {
                verbose: true,
                preset: 'jquery',
                requireCurlyBraces: ['if']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-jscs');

    grunt.registerTask('default', ['jscs', 'jshint', 'uglify']);
};
