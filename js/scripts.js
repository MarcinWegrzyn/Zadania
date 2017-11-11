// scripts.js


var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li'),
        lengthLi = document.getElementsByTagName('li');
    element.innerHTML = 'item ' + lengthLi.length;
    list.appendChild(element);
});

