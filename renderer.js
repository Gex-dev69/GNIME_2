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
ipcRenderer.on("doji_doji", function(evt,message){
    document.getElementById("Hena").innerHTML=message
})

function Manga(){
    document.getElementById("ima").src="./Backgrounds/manga.jpg"
    var r = document.querySelector(':root');
    function Font_changer() {
        document.getElementById('searlink').value = ''
        r.style.setProperty('--primary', 'red');
        r.style.setProperty("--secondary","black");
        r.style.setProperty("--alternative","white");
        r.style.setProperty("--light_aqua","red");
        r.style.setProperty("--text_color","red");
        r.style.setProperty("--button_hover","rgb(22, 18, 22)");
        r.style.setProperty("--search_bar_postion","350px")
        r.style.setProperty("--search_bar_size","500px")
        r.style.setProperty("--place_holder_color","black");
        document.getElementById("searlink").placeholder="Link..";
    }   
    Font_changer()
}
function Anime(){
    document.getElementById("ima").src="./Backgrounds/Gmain_Back.jpg"
    var r = document.querySelector(':root');
    function Font_changer() {
        document.getElementById('searlink').value = ''
        r.style.setProperty('--primary', 'aquamarine');
        r.style.setProperty("--secondary","aqua");
        r.style.setProperty("--alternative","rgb(30, 16, 78)");
        r.style.setProperty("--light_aqua","#1ab4ad");
        r.style.setProperty("--text_color","#b6b6b6");
        r.style.setProperty("--button_hover","rgb(133, 35, 133)");
        r.style.setProperty("--search_bar_postion","350px");
        r.style.setProperty("--search_bar_size","500px");
        r.style.setProperty("--place_holder_color","rgb(38, 0, 255)");
        document.getElementById("downbtn").onclick=download_engine;
        document.getElementById("searlink").placeholder="Link..";
    }   
    Font_changer()
}
function Doujin(){
    document.getElementById("ima").src="./Backgrounds/Doujin.jpg"
    var r = document.querySelector(':root');
    function Font_changer() {
        document.getElementById('searlink').value = ''
        r.style.setProperty('--primary', '#rgb(243, 20, 4)');
        r.style.setProperty("--secondary","rgb(0, 0, 0)");
        r.style.setProperty("--alternative","rgb(199, 202, 8)");
        r.style.setProperty("--light_aqua","#0b1312");
        r.style.setProperty("--text_color","#ff0000");
        r.style.setProperty("--button_hover","rgb(230, 15, 0)");
        r.style.setProperty("--search_bar_postion","1000px")
        r.style.setProperty("--search_bar_size","220px")
        r.style.setProperty("--place_holder_color","red");
        document.getElementById("downbtn").onclick=doujin_downloader;
        document.getElementById("searlink").placeholder="Eg.177013";
    }   
    Font_changer()
}
function Youtube(){
    document.getElementById("ima").src="./Backgrounds/Youtube.jpeg"
    var r = document.querySelector(':root');
    function Font_changer(){
        document.getElementById('searlink').value = ''
        r.style.setProperty('--primary', '#rgb(243, 20, 4)');
        r.style.setProperty("--secondary","rgb(0, 0, 0)");
        r.style.setProperty("--alternative","rgb(199, 202, 8)");
        r.style.setProperty("--light_aqua","#0b1312");
        r.style.setProperty("--text_color","#ff0000");
        r.style.setProperty("--button_hover","rgb(230, 15, 0)");
        r.style.setProperty("--search_bar_postion","350px");
        r.style.setProperty("--search_bar_size","500px");
        r.style.setProperty("--place_holder_color","red");
        document.getElementById("downbtn").onclick=doujin_downloader;
        document.getElementById("searlink").placeholder="YT_Link";
    }   
    Font_changer()
}
function download_engine(){
  var Ani_link = document.getElementById("searlink").value;
  ipcRenderer.send("download", Ani_link);
}
function doujin_downloader(){
    var sauce = document.getElementById("searlink").value;
    if (sauce == ""){
        alert("Empyt box")
    }else{
    ipcRenderer.send("sauce_download", sauce);
    }
}


