var gulp = require("gulp");
/*拷贝html*/
gulp.task("copyhtml",function() {
	gulp.src("src/index.html")
	.pipe(gulp.dest("dist"))
})
/*拷贝plug*/
gulp.task("copyplug",function() {
	gulp.src("src/css/plug/*")
	.pipe(gulp.dest("dist/css/plug"))
})
/*拷贝php*/
gulp.task("copyphp",function() {
	gulp.src("src/php/*")
	.pipe(gulp.dest("dist/php"))
})
/*拷贝font*/
gulp.task("copyfont",function() {
	gulp.src("src/font/*")
	.pipe(gulp.dest("dist/font"))
})
/*图片压缩*/
var imgmin = require("gulp-imagemin");
gulp.task("imgmin",function(){
	gulp.src("src/img/**/**/*")
	.pipe(imgmin())
	.pipe(gulp.dest("dist/img"))
})
/*图片压缩*/
var imagmin = require("gulp-imagemin");
gulp.task("imagmin",function(){
	gulp.src("src/images/*")
	.pipe(imagmin())
	.pipe(gulp.dest("dist/images"))
})
/*es6转义es5*/
var exchange = require("gulp-babel");
gulp.task("exchange",function() {
	gulp.src("src/js/js/**/*.js")
	.pipe(exchange({
		presets:["env"]
	}))
	.pipe(jsmin())
	.pipe(gulp.dest("dist/js/js"))
})
/*js压缩*/
var jsmin = require("gulp-uglify");
gulp.task("jsmin",function(){
	gulp.src("src/js/js/**/*.js")
	.pipe(jsmin())
	.pipe(gulp.dest("dist/js"))
})
/*压缩scss*/
var cssmin = require("gulp-sass-china");
gulp.task("cssmin",function(){
	gulp.src("src/sass/login.scss")
	.pipe(cssmin({
		outputStyle:"compressed"
	}))
	.pipe(gulp.dest("dist/css/common"))
})