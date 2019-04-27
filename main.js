const {app, BrowserWindow} = require('electron')

const noop = () => {}
const on = emitter => ([event, handler]) => emitter.on(event, handler)
const K = value => fn => { fn(value); return value }

let mainWindow

function createWindow () {
  const options = {
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }

  mainWindow = K(new BrowserWindow(options))(window => {
    window.loadFile('index.html')
    on(window)(['close', () => (mainWindow = null)])
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
