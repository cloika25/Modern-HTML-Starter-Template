import * as vscode from 'vscode'

const fs = require('fs-extra')
const path = require('path')

import indexHTML from './components/index.html.js'

import styleCSS from './components/public/css/style.css.js'
import footerCSS from './components/public/css/modules/footer.css.js'
import headerCSS from './components/public/css/modules/header.css.js'
import loaderCSS from './components/public/css/modules/loader.css.js'
import mainCSS from './components/public/css/modules/main.css.js'

import scriptJS from './components/public/js/script.js'
import serverJS from './components/server.js'
import serviceWorkerJS from './components/service-worker.js'
import swRegisterJS from './components/sw-register.js'
import createTimerJS from './components/public/js/modules/create-timer.js'
import loaderJS from './components/public/js/modules/loader.js'
import assetsJS from './components/public/js/assets/assets.js'

import errorHTML from './components/public/404.html.js'
import browserconfigXML from './components/browserconfig.xml.js'
import gitignore from './components/gitignore.js'
import license from './components/LICENSE.js'
import manifestJSON from './components/manifest.json.js'
import packageJSON from './components/package.json.js'
import readmeMD from './components/README.md.js'
import robotsTXT from './components/robots.txt.js'
import sitemapXML from './components/sitemap.xml.js'
import yarnLock from './components/yarn.lock.js'
import netlifyToml from './components/netlify.toml.js'

import icon64 from './components/public/icons/icon64.js'
import icon128 from './components/public/icons/icon128.js'
import icon150 from './components/public/icons/icon150.js'
import icon256 from './components/public/icons/icon256.js'
import icon512 from './components/public/icons/icon512.js'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "htmltemplate" is now active!')

  let disposable = vscode.commands.registerCommand(
    'htmltemplate.create',
    () => {
      const folder = (filename: string) =>
        path.join(vscode.workspace.rootPath, `htmltemplate/${filename}`)

      const files: string[] = [
        indexHTML,
        styleCSS,
        footerCSS,
        headerCSS,
        loaderCSS,
        mainCSS,
        createTimerJS,
        loaderJS,
        assetsJS,
        gitignore,
        license,
        errorHTML,
        browserconfigXML,
        manifestJSON,
        packageJSON,
        readmeMD,
        robotsTXT,
        scriptJS,
        serverJS,
        serviceWorkerJS,
        swRegisterJS,
        sitemapXML,
        yarnLock,
        netlifyToml,
        icon64,
        icon128,
        icon150,
        icon256,
        icon512
      ]

      const fileNames: string[] = [
        'index.html',
        'public/css/style.css',
        'public/css/modules/footer.css',
        'public/css/modules/header.css',
        'public/css/modules/loader.css',
        'public/css/modules/main.css',
        'public/js/modules/create-timer.js',
        'public/js/modules/loader.js',
        'public/js/assets/assets.js',
        '.gitignore',
        'LICENSE',
        'public/404.html',
        'browserconfig.xml',
        'manifest.json',
        'package.json',
        'README.md',
        'robots.txt',
        'public/js/script.js',
        'server.js',
        'service-worker.js',
        'sw-register.js',
        'sitemap.xml',
        'yarn.lock',
        'netlify.toml',
        'public/icons/64x64.png',
        'public/icons/128x128.png',
        'public/icons/150x150.png',
        'public/icons/256x256.png',
        'public/icons/512x512.png'
      ]

      ;(async () => {
        try {
          for (let i = 0; i < files.length; i++) {
            if (fileNames[i].includes('png')) {
              await fs.outputFile(folder(fileNames[i]), files[i], 'base64')
            } else {
              await fs.outputFile(folder(fileNames[i]), files[i])
            }
          }

          return vscode.window.showInformationMessage(
            'All files created successfully'
          )
        } catch {
          return vscode.window.showErrorMessage('Failed to create files')
        }
      })()
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
