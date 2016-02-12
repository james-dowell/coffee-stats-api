var gulp = require('gulp');
var ts = require('gulp-typescript');
var gutil = require('gutil');
var mocha = require('gulp-mocha');
var server = require('gulp-develop-server');


var paths = {
    scripts: ['src/**/*.ts', 'typings/tsd.d.ts']
}

var tsProject = ts.createProject({
    typescript: require('typescript'),
    target: "es5",
    module: require('typescript').ModuleKind.CommonJS,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    jsx: 'react'
});

gulp.task('scripts', function () {

    var tsResult = gulp.src(paths.scripts)
        .pipe(ts(tsProject))
    ;

    return tsResult.js.pipe(gulp.dest('.tmp'))
//.pipe(mocha({ reporter: 'dot' }))
    .on('error', gutil.log)
    ;

});

gulp.task('server:start', ['scripts'], function() {

    // var mode = (args.env && args.env == 'test') ? 'test' : 'dev'

    server.listen({
        path: './.tmp/app.js'
    });
});

gulp.task( 'server:restart', ['scripts'], function() {
    server.restart(function () {
        console.log(' -- API SUCCESSFULLY RESTARTED -- ');
    });
});

gulp.task('test', ['scripts'], function () {
    process.chdir('.tmp'); // Tests need to be ran from within the dist directory so require() works

    return gulp.src('modules/**/*.spec.js')
        .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('service', function () {
    process.chdir('.tmp'); // Tests need to be ran from within the dist directory so require() works

    return gulp.src('service-tests/**/*.js')
        .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('test:auto', ['test'], function () {
    gulp.watch(['src/**/*.ts'], ['test']);
});

gulp.task('watch', ['server:start'], function() {
    gulp.watch(['src/**/*.ts'], ['server:restart']);
});

gulp.task('default', ['scripts']);
