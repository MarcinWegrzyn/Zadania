// scripts.js


var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li'),
        lgth = document.getElementsByTagName('li');
    element.innerHTML = 'item ' + lgth.length;
    list.appendChild(element);
});

