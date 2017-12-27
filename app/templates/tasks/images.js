import gulp from 'gulp'
import { paths } from '../gulpfile'
import changed from 'gulp-changed'


export function images() {
  return gulp.src(paths.images)
    .pipe(changed('build/images'))
    .pipe(gulp.dest('build/images'))
}
