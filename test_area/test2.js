var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

var nii = localStorage.getItem('store');

console.log(nii);