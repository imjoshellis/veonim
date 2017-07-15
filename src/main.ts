const DEVMODE = process.env.VEONIM_DEV
import { app, BrowserWindow } from 'electron'
import { register } from './pubsub'

let win: Electron.BrowserWindow
app.setName('veonim')
app.on('ready', () => {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    backgroundColor: '#222'
  })

  register(win)
  win.loadURL(`file:///${__dirname}/index.html`)
  DEVMODE && win.webContents.openDevTools()
})
