var gulp = require('gulp');
var ts = require('gulp-typescript');
var gutil = require('gutil');
var mocha = require('gulp-mocha');

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

gulp.task('test', function () {
    process.chdir('.tmp'); // Tests need to be ran from within the dist directory so require() works

    return gulp.src('modules/**/*.spec.js')
        .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('test:auto', ['test'], function () {
    gulp.watch(['.tmp/modules/**/*.js'], ['test']);
});

gulp.task('scripts:auto', function() {
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['scripts']);
