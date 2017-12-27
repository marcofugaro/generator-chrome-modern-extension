import path from 'path'
import test from 'ava'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import pify from 'pify'

let generator

test.beforeEach(async () => {
	await pify(helpers.testDirectory)(path.join(__dirname, 'tmp'))
	generator = helpers.createGenerator('chrome-modern-extension:app', ['../app'], null, { skipInstall: true })
  generator.run = pify(generator.run.bind(generator))
})

test.serial('generates expected files', async () => {
	helpers.mockPrompt(generator, {
    githubUsername: 'testuser',
  })

	await generator.run()

	assert.file([
    '.git',
    'src/images/icon.png',
    'src/manifest.json',
    'tasks/bundle.js',
    'tasks/clean.js',
    'tasks/images.js',
    'tasks/index.js',
    'tasks/lintScripts.js',
    'tasks/manifest.js',
    'tasks/markup.js',
    'tasks/scripts.js',
    'tasks/styles.js',
    'tasks/watch.js',
    'utils/autoreload.js',
		'.babelrc',
		'.editorconfig',
    '.env.example',
    '.env',
		'.gitattributes',
		'.gitignore',
		'.travis.yml',
    'gulpfile.js',
    'LICENSE',
		'package.json',
		'README.md',
	])
})

test.serial('uses the prompted fields', async () => {
	helpers.mockPrompt(generator, {
		title: 'test title',
		description: 'desc',
		githubUsername: 'testuser',
		website: 'test.com',
	})

	await generator.run()

	assert.jsonFileContent('package.json', { name: 'test-title' })
	assert.jsonFileContent('src/manifest.json', { name: 'test title' })
	assert.jsonFileContent('package.json', { description: 'desc' })
  assert.jsonFileContent('src/manifest.json', { description: 'desc' })
  assert.jsonFileContent('src/manifest.json', { homepage_url: 'https://github.com/testuser/test-title' })
	assert.fileContent('README.md', /> desc/)
	assert.fileContent('LICENSE', /(test.com)/)
})

test.serial('defaults to superb description', async () => {
	helpers.mockPrompt(generator, {
		githubUsername: 'testuser',
	})

	await generator.run()

	assert.fileContent('package.json', /"description": "My .+ extension",/)
	assert.fileContent('README.md', /> My .+ extension/)
})

test.serial('passing false to isOpenSource works', async () => {
	helpers.mockPrompt(generator, {
    isOpenSource: false,
  })

	await generator.run()

	assert.noFile([
    'LICENSE',
    '.travis.yml',
	])
  assert.noFileContent('src/manifest.json', /"homepage_url"/)
  assert.noJsonFileContent('package.json', { license: 'MIT' })
})

test.serial('yarn option works', async () => {
  helpers.mockPrompt(generator, {
    yarn: true,
  })

  await generator.run()

  assert.fileContent('.travis.yml', /yarn: true/)
  assert.fileContent('.travis.yml', /yarn build/)
  assert.fileContent('.travis.yml', /yarn test/)
})
