import gulp from 'gulp'
import { paths } from '../gulpfile'
import del from 'del'
import zip from 'gulp-zip'
import pkg from '../package.json'


function zipFiles() {
  return gulp.src('build/**/*')
    .pipe(zip(`${pkg.name}.zip`))
    .pipe(gulp.dest('build'))
}

function cleanZippedFiles() {
  return del(['build/*', '!build/*.zip'])
}

export const bundle = gulp.series(zipFiles, cleanZippedFiles)
