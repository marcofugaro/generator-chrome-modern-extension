import gulp from 'gulp'
import { paths } from '../gulpfile'
import { scripts, lintScripts, styles, markup, images, manifest } from '.'
import io from 'socket.io'


export function watch() {
  const socket = io.listen(process.env.WEBSOCKET_PORT)
  const triggerFileChange = (done) => {
    socket.emit('file changed')
    done()
  }

  gulp.watch('src/**/*.js', gulp.parallel(gulp.series(scripts, triggerFileChange), lintScripts))
  gulp.watch('src/**/*.scss', gulp.series(styles, triggerFileChange))
  gulp.watch(paths.manifest, gulp.series(manifest, triggerFileChange))
  gulp.watch(paths.images, gulp.series(images, triggerFileChange))
  gulp.watch(paths.markup, gulp.series(markup, triggerFileChange))
}
