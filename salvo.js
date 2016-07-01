console.log("Game Start!");

var heading1 = document.createElement('h2');
  heading1.innerHTMl ="The Dread Pirate Sam";
  document.body.appendChild(heading1);

var table1 = document.createElement("table");
for (var i = 1; i < 8; i++) {
   var tr = document.createElement('tr');
   for (var j = 1; j < 8; j++) {
       var td = document.createElement('td');
      //  if (i%2 == j%2) {
      //      td.className = "white";
      //  } else {
      //      td.className = "blue";
      //  }
       tr.appendChild(td);
       td.id = 's' + i + j;
       table1.id = "A"
   }
   table1.appendChild(tr);
}
document.body.appendChild(table1);

//
// document.addEventListener('DOMContentLoaded', function() {
//   var title1 = document.createElement('h1');
//   title1.innerText("Pirate Sam!")
// }
//   document.body.appendChild(title1);
// };



var table2 = document.createElement("table");
for (var i = 1; i < 8; i++) {
   var tr = document.createElement('tr');
   for (var j = 1; j < 8; j++) {
       var td = document.createElement('td');
      //  if (i%2 == j%2) {
      //      td.className = "white";
      //  } else {
      //      td.className = "blue";
      //  }
       tr.appendChild(td);
       td.id = 'q' + i + j;
       table2.id = "B"
   }
   table2.appendChild(tr);
}
document.body.appendChild(table2);

//
// document.addEventListener('DOMContentLoaded', function() {
//   Randomly select pairs of squares and randomly add the classname hidden to that target square.



switchColor();






//   var nest1 = [];
//   for (var b = 1; b < 8; b++) {
//     for (var l = 1; l < 8; l++) {
//        nest1.push(document.getElementById("s" + b + l ));
//      }
//    }
//
// });



function switchColor() {

    var targets1 = [];

    for (var b = 1; b < 8; b++) {
      for (var l = 1; l < 8; l++) {
         targets1.push(document.getElementById("s" + b + l ));
      }
    }

    for (var y = 0; y < targets1.length; y++ ) {
      targets1[y].addEventListener('click', changeColor(targets1[y]));
    }



    var targets2 = [];

    for (var b = 1; b < 8; b++) {
      for (var l = 1; l < 8; l++) {
         targets2.push(document.getElementById("q" + b + l ));
      }
    }

    for (var y = 0; y < targets2.length; y++ ) {
      targets2[y].addEventListener('click', changeColor(targets2[y]));
    }




    function changeColor(i) {
      var RubberDuckySternA = document.getElementById("s21");
      RubberDuckySternA.classList = "hiddenA";
      console.log(RubberDuckySternA);

      var RubberDuckyMidA = document.getElementById("s22");
      RubberDuckyMidA.classList = "hiddenA";
      console.log(RubberDuckyMidA);

      var RubberDuckyBowA = document.getElementById("s23");
      RubberDuckyBowA.classList = "hiddenA";
      console.log(RubberDuckyBowA);

      var RubberDuckySternB = document.getElementById("q35");
      RubberDuckySternB.classList = "hiddenB";
      console.log(RubberDuckySternB);

      var RubberDuckyMidB = document.getElementById("q45");
      RubberDuckyMidB.classList = "hiddenB";
      console.log(RubberDuckyMidB);

      var RubberDuckyBowB = document.getElementById("q55");
      RubberDuckyBowB.classList = "hiddenB";
      console.log(RubberDuckyBowB);

      console.log(i.classList.contains("hiddenA"));
      if (i.classList.contains("hiddenA")) {
      return function() {
        i.style.backgroundColor= "#ff0000";
        alert("Ducky Alpha has taken a hit!")
        }
      }
      else if (i.classList.contains("hiddenB")) {
        return function() {
        i.style.backgroundColor= "#ff0000";
        alert("Ducky Beta has taken a hit!")
      }
    }
    else {
        return function() {
        i.style.backgroundColor= "#669999";
      }
      }
    }
};



//   for (var l = 1; l < 8; l++) {
//     for (var b =1; b < 8; b++) {
//       targets1.push(document.getElementById("s" + l + b ));
//       var targetsP1 = document.getElementById("s" + l + b );
//       console.log(targetsP1);
//       targetsP1.addEventListener('click', ChangeColor(targetsP1))
//     }
//   }
// }
//
//       }
//     }
//     for (var d = 0; d < targets1.length; d++) {
//       targets1[d].addEventListener("click", function() {
//         targets1[d].style.backgroundColor = "#666633";
//       })
//       function
//     }
//     console.log(targets1);
//   }
// //
// // function ChangeColor(e) {
// //   e.style.backgroundColor = "#ff0000";
// // }




// var rowIndex = [];
// var colIndex = [];
// var letters = ['a','b','c','d','e','f','g'];
//
// document.addEventListener('DOMContentLoaded', function() {
//   for (var q = 2; q < 8; q++) {
//     rowIndex.push("s1"+[q]);
//     var rowIndexK = document.getElementById('s1' + q)
//     for (var b = 0; b < 7; b++) {
//       rowIndexK.innerHTMl = letters[b];
//     }
//   } for (var w = 2; w < 8; w++) {
//     colIndex.push("s" + [w] + "1");
//     var colIndexkeys = document.createElement('p');
//   }
//   console.log(rowIndex);
//   console.log(colIndex);
//   for (var r = 0; r < 7; r++) {
//     console.log(rowIndex[r]);
//     console.log(colIndex[r]);
//   }
// });



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
