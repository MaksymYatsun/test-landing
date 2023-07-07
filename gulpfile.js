const { src, dest, watch, parallel, series } = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');

function scripts() {
  return src([
    'app/js/main.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-validation/dist/jquery.validate.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function styles() {
  return src(['node_modules/simplebar/dist/simplebar.css', 'app/css/normalize.css', 'app/css/style.css'])
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat('style.min.css'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function fonts() {
  return src('app/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(dest('dist/fonts'));
};

function images() {
  return src('app/images/**/*')
    .pipe(dest('dist/images'));
};

function watching() {
  watch(['app/css/style.css'], styles);
  watch(['app/js/main.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

function sync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  })
}

function cleanDist() {
  return src('dist')
    .pipe(clean());
}

function buildDist() {
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/**/*.html'
  ], { base: 'app' })
    .pipe(dest('dist/'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browserSync = sync;

exports.build = series(cleanDist, fonts, images, buildDist);

exports.default = parallel(styles, scripts, sync, watching);