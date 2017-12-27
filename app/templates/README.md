# <%= kebabTitle %><% if (isOpenSource) { %> [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![devDependency Status][daviddm-dev-image]][daviddm-dev-url]<% } %>

> <%= description %>

#### [Install it from the Chrome Web Store]()

## Commands

- `npm start` to compile and watch the files for changes.
  After you ran `npm start` go in `chrome://extensions/`, enable `Developer mode` if you already haven't, click `Load unpacked extension...` and select the `build/` folder.
  Every time you change a file in the `src/` folder the extension is reloaded automatically.
- `npm run build` to just compile the files.
- `npm run bundle` to compile the files and put them in a `.zip`, ready to be uploaded to the Chrome Web Store.
<% if (isOpenSource) { %>
## License

MIT © [<%= name %>](https://github.com/<%= githubUsername %>)


[travis-image]: https://travis-ci.org/<%= githubUsername %>/<%= kebabTitle %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= kebabTitle %>
[daviddm-image]: https://david-dm.org/<%= githubUsername %>/<%= kebabTitle %>.svg
[daviddm-url]: https://david-dm.org/<%= githubUsername %>/<%= kebabTitle %>
[daviddm-dev-image]: https://david-dm.org/<%= githubUsername %>/<%= kebabTitle %>/dev-status.svg
[daviddm-dev-url]: https://david-dm.org/<%= githubUsername %>/<%= kebabTitle %>/?type=dev
<% } %>
