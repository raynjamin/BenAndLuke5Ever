/**
 * RULE: replace 'public' with 
 *  - 'build/resources/main/static'
 *  - 'src/main/resources/static'
 * 
 * HTML
 * Starts in the root directory
 * Goes to src/main/resources/static
 * 
 * CSS
 * Starts in scss/
 * Goes to src/main/resources/static
 * 
 * JS
 * Starts in js/
 * Goes to src/main/resources/static
 */

const gulp = require('gulp');
const sass = require('gulp-sass');

const BUILD_URL = 'build/resources/main/static';
const SRC_URL = 'src/main/resources/static';

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    // Angular components
    gulp.src('templates/*.html')
        .pipe(gulp.dest(`${BUILD_URL}/components`))
        .pipe(gulp.dest(`${SRC_URL}/components`));

    // index.html and other html files
    return gulp.src('*.html')
        .pipe(gulp.dest(BUILD_URL))
        .pipe(gulp.dest(SRC_URL));
});

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest(BUILD_URL))
        .pipe(gulp.dest(SRC_URL));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(gulp.dest(BUILD_URL))
        .pipe(gulp.dest(SRC_URL));
});

// TODO: watch task. skipping for this demo