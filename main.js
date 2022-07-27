console.log('BODMAS_Break_Continue');

// BODMAS 
// Brackets of Division Multiplication Addition Subtraction 
var res = 2 * 3 + 15 - 10;

// 2 * 3 + 15 - 10 
// 6 + 15 - 10
// 21 - 10
// 11 
console.log(res); 

var res2 = 13 - 10 * 2 / 10 + 3 - 12;
// 13 - 10 * 2 / 10 + 3 - 12
// 13 - 10 * 0.2 + 3 - 12
// 13 - 2 + 3 - 12 
// 13 + 1 - 12 
// 2
console.log(res2);  

// break & continue 
for(var i = 0; i < 10; i++){
  for(var j = 0; j < 10; j ++){
    console.log(i + " " + j);
  }
} 
// 0 0
// 0 1 
// ....
// 0 9
// 1 0
// 1 1
//....
// 9 9

console.log("-------");
for(var i = 0; i < 10; i++){ 
  // upar ka print hoga
  for(var j = 0; j < 10; j ++){ 
    if(j == 4){
      break;
    }
    //niche ka print nahi hoga
    console.log(i + " " + j);
  }
} 
// 0 0
// 0 1 
// 0 2 
// 0 3 
// 1 0 
// 1 1 
// ...
// 9 0
// ...
// 9 3 

console.log("-------");
for (var i = 0; i < 10; i++) {
  // upar ka print hoga
  for (var j = 0; j < 10; j++) { 
    console.log(i + " " + j);
    if (j == 4) {
      break;
    }
  }
} 
// 0 0 
// 0 1
// 0 2 
// 0 3 
// 0 4
// 1 0 
// 1 1
// ... 
// 1 4 
// ...
// 9 4 

console.log("-------");
for (var i = 0; i < 10; i++) {
  // upar ka print hoga
  for (var j = 0; j < 10; j++) {
    //if (j == 4) {
      break;
    //}
    //niche ka print nahi hoga
    console.log(i + " " + j);
  }
} 
// console.log is after "break" therefore it will not print anything(blank)
 
//Continue 

console.log("-------");
for (var i = 0; i < 10; i++) {
  // upar ka print hoga
  for (var j = 0; j < 10; j++) {
    //pehle ka code exceute ho jayega
    if (j == i) {
      continue;
    }
    //niche ka exceute nahi hoga
    console.log(i + " " + j);
  }
}
// 0 1
// 0 2
// ...
// 0 9
// ...
// 9 8
// similar values jod kar sab print hoga