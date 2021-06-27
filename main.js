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





function createWindow () {
  
  // add Menu.setApplicationMenu(null) when you finish the program
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame: false,
    width: 1024,
    height: 700,
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
  ipc.on("maxi",()=>{
    mainWindow.maximize();
  })
  ipc.on("state",()=>{
    console.log("clicked");
  })
  ipc.on('Get_images',(event,arg)=>{
    let options={
      mode: "text",
      args: [arg],
    }
    PythonShell.run('./Engine/search_engine/Images.py',options,function(err, Ani_link){
      if (err) throw err;
      mainWindow.webContents.send("Anime_images",Ani_link);
    })
  })
  ipc.on("Get_Names",(event,arg)=>{
    console.log("Get Name: invoked")
    console.log(arg)
    let options={
      mode: "text",
      args: [arg],
    }
    PythonShell.run('./Engine/search_engine/Names.py',options,function(err, Ani_link){
      if (err) throw err;
      mainWindow.webContents.send("Anime_Names",Ani_link);
    })
  })
  ipc.on("start_download",(event,arg)=>{
    let options={
      mode: "text",
      args: [arg],
    }
    console.log(arg)
    PythonShell.run('./Engine/Anime_downloader.py',options,function(err, Ani_link){
      if (err) throw err;
    })
  })
  ipc.on("test",(event,arg)=>{
    console.log(arg)
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
