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

  let interval;

  mainWindow = K(new BrowserWindow(options))(window => {

    // NOTE: If browser complains about 'Not allowed to load local resource',
    //       the file is probable not there.

    console.log('__dirname', __dirname) // directory of main.js, i.e. directory name of the current module
    console.log('app.getAppPath()', app.getAppPath()) // app.asar/

    // Note: Once packaged current working directory is ASARs root directory.
    window.loadFile('src/index.html')
    window.on('close', () => {
      clearInterval(interval)
      mainWindow = null
    })

    window.once('ready-to-show', () => window.show())
    window.once('show', () => {
      // Show that IPC does work:
      interval = setInterval(() => window.webContents.send('time', new Date()), 1000)
    })
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
