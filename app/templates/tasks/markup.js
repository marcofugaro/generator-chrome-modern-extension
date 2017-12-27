import gulp from 'gulp'
import { paths } from '../gulpfile'
import changed from 'gulp-changed'


export function markup() {
  return gulp.src(paths.markup, { allowEmpty: true })
    .pipe(changed('build'))
    .pipe(gulp.dest('build'))
}
