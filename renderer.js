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
function download_btns(Link){
    var links = link
    '<input type="button" onClick="gotoNode(\'' + result.name + '\')" />'
    // Get array number with this && with array number get name
    // add link address on the name
    // pass variable to the downloader
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
ipcRenderer.on("Anime_Names",(event,arg)=>{
    var yo = arg;
    var discard = yo.length;
    var bob = document.getElementById('bob');
    for (i = 0; discard > i; i++)
    {
      var label = document.createElement("label");
      label.innerHTML = yo[i];
      label.className="Ani_names"
      bob.appendChild(label);
    }
})


