var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSynce = require('browser-sync').create();    

gulp.task('watch', function(){
      browserSynce.init({
    notify: false,    
       server: {
           baseDir: "app"
       } 
    });
    
    watch('./app/index.html', function(){
        browserSynce.reload();
    });
    
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function(){
 return gulp.src('./app/temp/styles/styles.css')
       .pipe(browserSynce.stream());
});