"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); 			// run a local dev server
var open = require('gulp-open'); 				// open url in a browser
var browserify = require('browserify'); 		//Bundle JS for browser
var reactify = require('reactify'); 			// Compile JSX
var source = require('vinyl-source-stream');	// Use conventional text stream with gulp
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat'); 			//Conactenation
var lint = require('gulp-eslint'); 				//Lint our JS file as well as JSX
var exec = require('child_process').exec;
var babel = require('babelify');
var sourcemaps = require('gulp-sourcemaps');

var config ={
	port: 9006,
	devUrl: "http://localhost",
	paths : {
		html : './client/**/*.html',
		js : 	'./client/**/*.js',
		mainJS : './client/main.js',
		css : [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'client/components/video/video.css',
			'node_modules/toastr/toastr.scss'
			],
		images: './src/public/images',
		dist : './frontend-target/dist'
	}
};

//Start a local dev server

gulp.task("connect",function(){
	connect.server({
		root: ["frontend-target/dist"],
		port: config.port,
		base: config.devUrl,
		livereload: true
	});
});

gulp.task("client",['connect'],function(){
	gulp.src('frontend-target/dist/index.html')
		.pipe(open({uri:config.devUrl + ":"+config.port+"/"}))
});

gulp.task("server",function(){
	exec('node index.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task("html",function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task("js",function(){
	browserify(config.paths.mainJS)
		.transform(babel.configure({
	        presets: ["es2015", "react"]
	    }))
		.bundle()
		.on('error',console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.paths.dist + "/scripts"))
		.pipe(connect.reload());
});

gulp.task("css",function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + "/css"));
});
gulp.task("images",function(){
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + "/images"))
		.pipe(connect.reload());

	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task("lint",function(){
	return gulp.src(config.paths.js)
			.pipe(lint({config:'eslint.config.json'}))
			.pipe(lint.format());
});

gulp.task("watch",function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
	gulp.watch(config.paths.css, ['css']);
});

gulp.task("default",['client','server','html','js','css','images','watch']);
