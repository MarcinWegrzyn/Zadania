// scripts.js

var buttonJs = document.getElementsByClassName( 'button' );

for (var i = 0 ; i < buttonJs.length ; i++) {
    alert(buttonJs[ i ].innerText);
}