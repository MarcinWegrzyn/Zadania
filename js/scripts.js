// scripts.js

function drawTree(x) {
    for ( var i = 0 ; i < x ; i ++) {
      var space="";
      var star ="";
        for ( var j = 0; j < i; j ++) {  // Tutaj warunek środkowy już nie będzie taki prosty :)  trzeba będzie troszkę inaczej do tego podejść.
           star = star += "*";
            for (var z = i ; z < x ; z ++) {   // Ta pętla powinna być zaraz pod pętlą z licznikiem  j. Nie w niej.
             space = space += " ";
            }
         }
      console.log(space + star);
    }
}

drawTree(10);
