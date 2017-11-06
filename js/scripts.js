// scripts.js

function drawTree(x) {
    for ( var i = 0 ; i < x ; i ++) {
      var space="";
      var star ="";
        for ( var j = 0; j < (i*2 +1); j ++) {
           star = star += "*";
        }
          for (var z = i ; z < x ; z ++) {
           space = space += " ";
        }    
      console.log(space + star);
    }
}
drawTree(5);
