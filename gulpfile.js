const {series, watch, src, dest, parallel} = require('gulp');
const pump = require('pump');

// gulp plugins and utils
const livereload = require('gulp-livereload');
const zip = require('gulp-zip');

function serve(done) {
    livereload.listen();
    done();
}

function hbs(done) {
    pump([
        src(['*.hbs', 'partials/**/*.hbs']),
        livereload()
    ], done);
}

function css(done) {
    pump([
        src('assets/css/*.css', {sourcemaps: true}),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], done);
}

function js(done) {
    pump([
        src('assets/js/*.js', {sourcemaps: true}),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], done);
}

function zipper(done) {
    const pkg = require('./package.json');
    const targetDir = 'dist/';
    const filename = pkg.name + '-' + pkg.version + '.zip';

    pump([
        src([
            '**',
            '!node_modules', '!node_modules/**',
            '!dist', '!dist/**'
        ]),
        zip(filename),
        dest(targetDir)
    ], done);
}

const cssWatcher = () => watch('assets/css/**', css);
const hbsWatcher = () => watch(['*.hbs', 'partials/**/*.hbs'], hbs);
const watcher = parallel(cssWatcher, hbsWatcher);
const build = series(css, js);
const dev = series(build, serve, watcher);

exports.build = build;
exports.zip = series(build, zipper);
exports.default = dev;
