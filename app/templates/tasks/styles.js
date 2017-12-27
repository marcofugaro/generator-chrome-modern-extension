import gulp from 'gulp'
import { paths } from '../gulpfile'
import sass from 'gulp-sass'
import moduleImporter from 'sass-module-importer'
import notify from 'gulp-notify'


export function styles() {
  return gulp.src(paths.styles, { allowEmpty: true })
    .pipe(sass({
      outputStyle: 'expanded',
      importer: moduleImporter(),
      includePaths: 'node_modules/',
    }))
    .on('error', notify.onError({
      title: 'Error compiling styles!',
    }))
    .pipe(gulp.dest('build'))
}
