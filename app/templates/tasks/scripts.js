import gulp from 'gulp'
import { paths } from '../gulpfile'
import webpackStream from 'webpack-stream'
import Dotenv from 'dotenv-webpack'
import addSrc from 'gulp-add-src'
import gulpif from 'gulp-if'
import named from 'vinyl-named'
import notify from 'gulp-notify'


const webpackConfig = {
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
  },
}

export function scripts() {
  return gulp.src(paths.scripts, { allowEmpty: true })
    .pipe(gulpif(!global.IS_PRODUCTION, addSrc('utils/autoreload.js')))
    .pipe(named())
    .pipe(webpackStream(webpackConfig))
    .on('error', notify.onError({
      title: 'Error compiling scripts!',
    }))
    .pipe(gulp.dest('build'))
}
