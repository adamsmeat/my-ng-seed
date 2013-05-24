module.exports = (grunt) ->
	# easy access to package.json values
	pkgjson = require('./package.json')

	# this fxn is used to automate removal of version numbers from items available from your components
	remove_version_numbers = (dest, src) ->
		return dest + src.replace(/-\d+(.\d+)+/, '')

	# each time you build your public/dist folder, a corresponding 'public_{timestamp is generated}'
	timestamped_public_dir_cached = null
	timestamped_public_dir = ->
		if (timestamped_public_dir_cached isnt null)
			return timestamped_public_dir_cached
		d = new Date()
		return  timestamped_public_dir_cached = 'public_' +(d.toDateString()+'_'+ d.toLocaleTimeString()).replace(/(:|-|\s)/g, '.')

	# the following are the tasks our project needs
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-coffee')
	grunt.loadNpmTasks('grunt-contrib-less')
	grunt.loadNpmTasks('grunt-contrib-requirejs')

	# removed due to tendency to do something not wanted
	grunt.registerTask('default', [])
	# watchers todo: coffee, less, karma unit tests
	grunt.registerTask('start-dev', ['replicate-dna'])


	# compile coffee files, then copy dna into app
	grunt.registerTask('replicate-dna', ['copy:dna-to-devAppDir', 'coffee:compile-devAppDir-scripts'])

	# show the world
	grunt.registerTask('publish', ['less:public', 'copy:devAppDir-to-public', 'requirejs'])

	grunt.initConfig(
		pkg: grunt.file.readJSON('package.json')

		coffee:
			# compiles coffeescripts so require can use the compiled
			'compile-devAppDir-scripts':
    expand: true
    cwd: pkgjson.devAppDir+'/./coffee/'
    src: ['**/*.coffee']
    dest: pkgjson.devAppDir+'/./js/'
    ext: '.js'

		less:
			public:
		  options:
					paths: [pkgjson.devAppDir+'/./less']
		   yuicompress: true
				files:
					'public/css/style.css': pkgjson.devAppDir+'/./less/style-2.3.2.less'

		copy:
			'dna-to-devAppDir':
				files: [{
					expand: true
					cwd: 'dna'
					src: ['css/*','img/*','coffee/**', 'js/**','less/**','tpl/**','*']
					#dest: 'app'
					dest: pkgjson.devAppDir
				}]

			'devAppDir-to-public':
				files: [{
					#standard libs, plugins and my modules
					expand: true
					cwd: 'app/js/lib'
					src: ['*.js']
					dest: timestamped_public_dir()+'/js/'
					filter: 'isFile'
					rename: remove_version_numbers
				}, {
					expand: true
					cwd: 'app/js/plugin' 
					src: ['*.js']
					dest: timestamped_public_dir()+'/js/' 
					filter: 'isFile'
					rename: remove_version_numbers
				}, {
					expand: true 
					cwd: 'app/js/my'
					src: ['*']
					dest: timestamped_public_dir()+'/js/my/'
					filter: 'isFile'
					rename: remove_version_numbers
				}, {
					expand: true
					cwd: 'app'
					src: ['css/*', 'img/*', 'tpl/**']
					dest: timestamped_public_dir()+'/'
				}, {
					expand: true
					cwd: 'app'
					src: ['*']
					dest: timestamped_public_dir()+'/'
					filter: 'isFile'
				}, {
					# use standard public index and main referencing the 
					# unversioned main and require file, tpl without less
					expand: true 
					cwd: 'dna/public/js'
					src: ['main.js', 'my/tpl.js']
					dest: timestamped_public_dir()+'/js/'
				}, {
					expand: true
					cwd: 'dna/public'
					src: ['index.html']
					dest: timestamped_public_dir()+'/'
				}]


		requirejs:
			dist:
			  #// Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
				options:
					appDir: timestamped_public_dir()
					baseUrl: 'js'
					dir: 'public'
					#mainConfigFile: 'app/js/main.js'
					paths:
						'tpl': '../tpl'

					shim:
						bootstrap: {deps:['jquery']}
						less: {exports: 'less'}
						underscore: {exports: '_'}
						angular: {deps:['angular-loader'], exports: 'angular'}
						modernizr: {exports: 'Modernizr'}

					modules: [
						{name: "main"}
					]

					keepBuildDir: true
					optimize: "uglify2"
					optimizeCss: "none"
					cssImportIgnore: null
					#cssIn: "path/to/main.css"
					#out: "path/to/css-optimized.css"
					inlineText: true
					#useStrict: false
					preserveLicenseComments: false
					#wrap: true
	)

