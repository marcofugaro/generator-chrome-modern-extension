# DEPRECATED in favor of [generator-browser-modern-extension](https://github.com/marcofugaro/generator-browser-modern-extension). All browsers matter ❤️

# generator-chrome-modern-extension [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![devDependency Status][daviddm-dev-image]][daviddm-dev-url]

> Scaffold out a boilerplate for creating a chrome extension with up-to-date tools and autoreload of the extension

The boilerplate repo is [here](https://github.com/marcofugaro/chrome-modern-extension-boilerplate).

## Features

This project is born because of the lack of chrome extension starter kits which aren't from 2013 and don't use bower.

[Gulp 4](https://github.com/gulpjs/gulp/tree/4.0) is used to manage all the tasks and wire the tools together, it was chosen because it's easily hackable and configurable, you can make it fit and scale with your wildest chrome extension!

It uses [webpack](https://webpack.js.org/) to bundle javascript and [SCSS](http://sass-lang.com/) as a preprocessor. [Babel](http://babeljs.io/) transpiles all the future js stuff that hasn't landed in chrome yet, and there is a customizable [eslint](https://eslint.org/) config file.

The development mode has **autoreload** of the chrome extension, meaning that when you change a file, the extension is loaded again in chrome! 🔥

## Install

```bash
npm install -g yo
npm install -g generator-chrome-modern-extension
```

## Usage

```bash
yo chrome-modern-extension
```
or just
```bash
yo
```
and select `Chrome Modern Extension`.

## License

MIT © [Marco Fugaro](marcofugaro.it)


[travis-image]: https://travis-ci.org/marcofugaro/generator-chrome-modern-extension.svg?branch=master
[travis-url]: https://travis-ci.org/marcofugaro/generator-chrome-modern-extension
[daviddm-image]: https://david-dm.org/marcofugaro/generator-chrome-modern-extension.svg
[daviddm-url]: https://david-dm.org/marcofugaro/generator-chrome-modern-extension
[daviddm-dev-image]: https://david-dm.org/marcofugaro/generator-chrome-modern-extension/dev-status.svg
[daviddm-dev-url]: https://david-dm.org/marcofugaro/generator-chrome-modern-extension/?type=dev
