var concat = require('gulp-concat');
var exit = require('gulp-exit');
var gulp = require('gulp');
var map = require('map-stream');
var minifyCss = require('gulp-minify-css');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var shell = require('gulp-shell');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var GLOBALS = {
    BUILD_DIR: './www',
    PLATFORM: 'ios android'
};

var paths = {
    rootstyle: ['src/scss/app.scss'],
    styles: ['src/**/*.scss'],
    templates: ['src/**/*.tpl.html'],
    vendorjs: [
        //pre-angular dependencies
        'src/-vendor/bluebird/js/browser/bluebird.js',
        'src/-vendor/lodash/lodash.js',
        'src/-vendor/urijs/src/URI.min.js',

        //ionic-angular
        'src/-vendor/ionic/js/ionic.bundle.js',

        //post-angular dependencies
        'src/-vendor/angular-ui-router/release/angular-ui-router.js',
        'src/-vendor/ngCordova/dist/ng-cordova.min.js'

        //Other third party dependencies
    ],
    vendor: [
        'src/-vendor/ionicons/fonts/*'

    ],
    index: ['src/index.html']
};


var destinations = {
    styles: GLOBALS.BUILD_DIR + '/css',
    assets: GLOBALS.BUILD_DIR + '/assets',
    scripts: GLOBALS.BUILD_DIR + '/js'
};

gulp.task('reset', function () {
    return runSequence('cordova:reset', 'default');
});

gulp.task('default', function () {
    var cb = function () {
        return gulp.src('').pipe(exit());
    };
    runSequence('clean', ['index', 'scripts:vendor', 'templates', 'styles', 'vendor']);
    setTimeout(function () {
        runSequence('ts:app');
    }, 2000);
});

gulp.task('clean', function () {
    return gulp.src([GLOBALS.BUILD_DIR], {read: false})
        .pipe(rimraf());
});

gulp.task('cordova:reset', function () {
    var addplatform = '';
    GLOBALS.PLATFORM.split(' ').forEach(function (element) {
        if (element === 'ios') {
            addplatform += 'ionic platform add ' + element + '@3.9.1' + ' && ';
        }
        if (element === 'android') {
            addplatform += 'ionic platform add ' + element + '@4.1.1' + ' && ';
        }
    });
    //remove extra &&
    addplatform = addplatform.substring(0, addplatform.length - 4);

    return gulp.src('')
        .pipe(shell([
            'rm -rf plugins/* platforms/*',
            'mkdir -p www platforms plugins',
            addplatform,
            'cordova plugin add cordova-plugin-network-information@1.0.0',
            'cordova plugin add ionic-plugin-keyboard@1.0.4',
            'cordova plugin add cordova-plugin-device@1.0.0',
            'cordova plugin add cordova-plugin-whitelist@1.0.0',
            'cordova plugin add cordova-plugin-statusbar@1.0.0',
            'cordova plugin add cordova-plugin-splashscreen@2.0.0',
            'cordova plugin add cordova-plugin-console@1.0.1',
            'cordova plugin add https://github.com/happieio/cordova-plugin-swiftbridge.git',
            'cordova plugin add https://github.com/happieio/cordova-plugin-couchbase-lite.git'
        ]));
});

gulp.task('templates', function () {
    return gulp.src(paths.templates)
        .pipe(gulp.dest(GLOBALS.BUILD_DIR));
});

gulp.task('index', function () {
    return gulp.src(paths.index)
        .pipe(gulp.dest(GLOBALS.BUILD_DIR));
});

gulp.task('scripts:vendor', function () {
    return gulp.src(paths.vendorjs)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(destinations.scripts))
});

gulp.task('vendor', function () {
    return gulp.src(paths.vendor, {base: './src/'})
        .pipe(gulp.dest(GLOBALS.BUILD_DIR))
});

gulp.task('ts:app', function () {
    gulp.src('').pipe(shell(['./node_modules/.bin/r.js -o ./app.build.js']));
});

gulp.task('styles', function () {
    return gulp.src(paths.rootstyle)
        .pipe(concat('app.min.css'))
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destinations.styles))
});
