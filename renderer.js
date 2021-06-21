// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
const {ipcRenderer, ipcMain} = require('electron')
var path = require('path');
const { event } = require('jquery');

function clicked(){
    ipcRenderer.send("close");
}
function minked(){
    ipcRenderer.send("minimize")
}
function maxied(){
    ipcRenderer.send("maxi")
}
function test(){
    ipcRenderer.send("state");
}
function PyDownloader(){
  var Ani_name = document.getElementById("searlink").value;
  ipcRenderer.send("PyDown", Ani_name);
}
ipcRenderer.on("Anime_images",(event,arg)=>{
    var yo = arg;
    var discard = yo.length - 2;
    var bob = document.getElementById('bob');
    document.querySelectorAll('.sol').forEach(function(a){
        a.remove()
    })
    for (i = 0; discard > i; i++)
    {
      var img = document.createElement("img");
      img.src = yo[i];
      img.className="sol"
      bob.appendChild(img);
    }
})



