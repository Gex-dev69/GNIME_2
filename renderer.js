// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
const {PythonShell} = require('python-shell')
const {ipcRenderer} = require('electron')
var path = require('path')


function clicked(){
    ipcRenderer.send("close");
}
function minked(){
    ipcRenderer.send("minimize")
}
function maxied(){
    ipcRenderer.send("maxi")
}
function starte(){
    document.getElementById("downbtn").innerHTML=('changed');
}
function PyDownloader(){
  var link = document.getElementById('Downlink').value

  let options={
    args: [link]
  }
  PythonShell.run('Downloader.py',options,function(err, results){
    if (err) throw err;
    console.log(results);
  })
}
