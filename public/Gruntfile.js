module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				option: {
					paths: ['./']
				},
				files: {
					'./style.css': './main.less'
				}
			}
		},
		shell: {
			target: {
				command: 'browserify -t brfs main.js > bundle.js'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['less', 'shell:target']);

}