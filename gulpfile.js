var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

var fs = require('fs');

function gCopy(src, dst) {
    gulp.src(src)
    .pipe(gulp.dest(dst));
}

function gCopyRen(src, name, dst) {
    gulp.src(src)
    .pipe(rename(name))
    .pipe(gulp.dest(dst));
}

function gCpDir(dir, dst) {
    gulp.src(dir + "/*")
    .pipe(gulp.dest(dst + "/" + dir));
}

function gCpDirs(dirs, dst) {
    for(idx in dirs)
        gCpDir(dirs[idx], dst);
}

function gPages(page, dst) {
    gCpDirs(['fonts', 'img', 'css'], dst);
    gCopyRen("img/icon.ico", "favicon.ico", dst);
    gCopyRen(page, "index.html", dst);
}

gulp.task('default', function() {
});

gulp.task('nginx', function() {
    gPages('nginx.html', '/var/www/html');
});

gulp.task('iis', function() {
    gPages('iis.html', 'c:/temp/www');
});
