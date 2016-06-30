
document.addEventListener('DOMContentLoaded', function() {
var heading1 = document.createElement('h2')
console.log(heading1)

var table1 = document.createElement("table");
for (var i = 1; i < 8; i++) {
   var tr = document.createElement('tr');
   for (var j = 1; j < 8; j++) {
       var td = document.createElement('td');
       if (i%2 == j%2) {
           td.className = "white";
       } else {
           td.className = "blue";
       }
       tr.appendChild(td);
       td.id = 's' + i + j;
       table1.id = "A"
   }
   table1.appendChild(tr);
}
document.body.appendChild(table1);
});
//
// document.addEventListener('DOMContentLoaded', function() {
//   var title1 = document.createElement('h1');
//   title1.innerText("Pirate Sam!")
// }
//   document.body.appendChild(title1);
// };


document.addEventListener('DOMContentLoaded', function() {
var table2 = document.createElement("table");
for (var i = 1; i < 8; i++) {
   var tr = document.createElement('tr');
   for (var j = 1; j < 8; j++) {
       var td = document.createElement('td');
       if (i%2 == j%2) {
           td.className = "white";
       } else {
           td.className = "blue";
       }
       tr.appendChild(td);
       td.id = 'q' + i + j;
       table2.id = "B"
   }
   table2.appendChild(tr);
}
document.body.appendChild(table2);
});


var rowIndex = [];
var colIndex = [];

document.addEventListener('DOMContentLoaded', function() {
  for (var q = 1; q < 8; q++) {
    rowIndex.push("s1"+[q]);
    var rowIndexkeys = document.createElement('p');
  } for (var w = 1; w < 8; w++) {
    colIndex.push("s" + [w] + "1");
    var colIndexkeys = document.createElement('p');
  }
  console.log(rowIndex);
  console.log(colIndex);
  for (var r = 0; r < 7; r++) {
    console.log(rowIndex[r]);
    console.log(colIndex[r]);
  }
});



// var hitmark = false;
//
//
// function fireTorpedo(e) {
//
// 	if (e.target !== e.currentTarget) {
//
// 		var row = e.target.id.substring(1,2);
// 		var col = e.target.id.substring(2,3);
//
//
// 		if (gameBoard_1[row][col] == 0) {
// 			e.target.style.background = '#bbb';
//
// 			gameBoard_1[row][col] = 3;
//
//
// 			e.target.style.background = 'red';
//
// 			gameBoard_1[row][col] = 2;
//
//
// 			hitCount++;
//
// 			if (hitCount == 17) {
// 				alert("All enemy battleships have been defeated! You win!");
// 			}
//
//
// 		} else if (gameBoard_1[row][col] > 1) {
// 			alert("Stop wasting your torpedos! You already fired at this location.");
// 		}
//     }
//     e.stopPropagation();
// }
