import gulp from 'gulp'
import { paths } from '../gulpfile'
import eslint from 'gulp-eslint'


export function lintScripts() {
  return gulp.src(paths.scripts, { allowEmpty: true })
    .pipe(eslint())
    .pipe(eslint.format('pretty'))
}
