import gulp from 'gulp'
import { clean, scripts, lintScripts, styles, markup, images, manifest, watch, bundle } from './tasks'
import dotenv from 'dotenv'
dotenv.config()

global.IS_PRODUCTION = !process.argv.includes('dev')

export const paths = {
  scripts: [
    'src/options.js',
    'src/content.js',
    'src/background.js',
    'src/popup.js',
  ],

  styles: [
    'src/options.scss',
    'src/popup.scss',
  ],

  images: 'src/images/**/*',

  manifest: 'src/manifest.json',

  markup: [
    'src/options.html',
    'src/popup.html',
  ],
}


gulp.task('build', gulp.series(clean, gulp.parallel(scripts, lintScripts, styles, markup, images, manifest)))
gulp.task('dev', gulp.series('build', watch))
gulp.task('bundle', gulp.series('build', bundle))
