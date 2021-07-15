// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu,ipcMain, ipcRenderer } = require('electron')
const {PythonShell} = require('python-shell')
const { get } = require('http')
const path = require('path')
const { contextIsolated } = require('process')
const ipc = ipcMain
const LocalStorage = require('node-localstorage').LocalStorage;
const { event } = require('jquery')
localStorage = new LocalStorage('./tmp');
var Twidth = 1024;
var Theight = 650;





function createWindow () {
  
  // add Menu.setApplicationMenu(null) when you finish the program
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame: false,
    width: Twidth,
    height: Theight,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('main.html')
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  ipc.on("close",()=>{
    mainWindow.close();
  })
  ipc.on("minimize",()=>{
    mainWindow.minimize();
  })

  ipc.on('download',(event,arg)=>{
    let options={
      mode: "text",
      args: [arg],
    }
    PythonShell.run('./Engine/Anime_downloader.py',options,function(err, Ani_link){
      if (err) throw err;
    })
  })
  ipc.on('sauce_download',(event,arg)=>{
    let options={
      mode: "text",
      args: [arg],
    }
    PythonShell.run('./Engine/Doujin_downloder.py',options,function(err, sauce){
      if (err) throw err;
    })
  })
  ipc.on("test",(event,arg)=>{
    console.log("clicked")
  })}
  





// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})




// In this file you can includse the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
