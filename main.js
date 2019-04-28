const {app, BrowserWindow} = require('electron')

const noop = () => {}
const on = emitter => ([event, handler]) => emitter.on(event, handler)
const K = value => fn => { fn(value); return value }

let mainWindow

const createWindow = () => {
  const options = {
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  }

  mainWindow = K(new BrowserWindow(options))(window => {
    // NOTE: If browser complains about 'Not allowed to load local resource',
    //       the file is probable not there.
    window.loadFile('src/index.html')
    window.on('close', () => (mainWindow = null))
    window.once('ready-to-show', () => window.show())
  })
}

;(() => {
  const quit = process.platform !== 'darwin' ? app.quit : noop
  const activate = mainWindow === null ? createWindow : noop

  Object.entries({
    'ready': createWindow,
    'window-all-closed': quit,
    'activate': activate
  }).forEach(on(app))
})()
