const { defineConfig } = require('@vue/cli-service')
const minimist = require('minimist')
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const { aim } = minimist(process.argv)

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: `packages/${aim}/dist`,
  configureWebpack: {
    entry: {
      app: `./packages/${aim}/src/main.js`
    },
    resolve: {
      alias: {
        '@': resolve(`packages/project-a/src`),
        '~': resolve(`packages/project-b/src`)
      }
    }
  }
})
