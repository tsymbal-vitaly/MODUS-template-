var gulp                = require('gulp'),
    sass                = require('gulp-sass'),
    browserSync         = require('browser-sync'),
    concat              = require('gulp-concat'),
    uglify              = require('gulp-uglifyjs'),
    cssnano             = require('gulp-cssnano'),
    rename              = require('gulp-rename'),
    del                 = require('del'),
    imagemin            = require('gulp-imagemin'),
    pngquant            = require('imagemin-pngquant'),
    cache               = require('gulp-cache'),
    autoprefixer        = require('gulp-autoprefixer'),
    gcmq                = require('gulp-group-css-media-queries');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gcmq())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

//  SCRIPTS
gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/slick-carousel/slick/slick.js',
        'node_modules/jquery-knob/dist/jquery.knob.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

// CSS-LIBS
gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});

//  BROWSER-SYNC
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app' //   папка сервера
        },
        notify: false   //  отключение уведомления
    });
});

//  CLEAN
gulp.task('clean', function() {
   return del.sync('dist');
});

//  CLEAr
gulp.task('clear', function() {
   return cache.clearAll('');
});

//  IMG
gulp.task('img', function() {
    return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        une: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

//  WATCH
gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']); //   при изменениях в файлах *.scss запускается task 'sass'
    gulp.watch('app/*.html', browserSync.reload); //    обновление браузера при изменении *.html
    gulp.watch('app/js/**/*.js', browserSync.reload); //    обновление браузера при изменении *.js
});

//  BUILD
gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
    
    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css',
        'app/css/font-awesome.css',
    ])
    .pipe(gulp.dest('dist/css'));
    
    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    
    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));
    
    var buildHtml = gulp.src('app/*html')
        .pipe(gulp.dest('dist'));
    
});