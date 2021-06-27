// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
const {ipcRenderer, ipcMain} = require('electron')
var path = require('path');
const { event } = require('jquery');
const { link } = require('fs');

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
function search_engine(){
  var Ani_name = document.getElementById("searlink").value;
  ipcRenderer.send("Get_images", Ani_name);
  ipcRenderer.send("Get_Names",Ani_name);
}
ipcRenderer.on("Anime_images",(event,arg)=>{
    var yo = arg;
    var discard = yo.length - 2;
    var bob = document.getElementById('bob');
    document.querySelectorAll('.Ani_images').forEach(function(a){
        a.remove()
    })
    for (i = 0; discard > i; i++)
    {
      var img = document.createElement("img");
      img.src = yo[i];
      img.className="Ani_images"
      bob.appendChild(img);
    }
})
ipcRenderer.on("Anime_Names",(event,arg)=>{
    var yo = arg;
    var discard = yo.length - 2;
    var bob = document.getElementById('bob');
    document.querySelectorAll('.Ani_names').forEach(function(a){
        a.remove()
    })
  
    for (i = 0; discard > i; i++)
    {
    var label = document.createElement("p");
    label.innerHTML = yo[i];
    label.onclick = function() {start_download(this.innerHTML)};
    label.className="Ani_names"
    bob.appendChild(label);
    }
})

function start_download(ani){
   ipcRenderer.send("start_download",ani)
}


