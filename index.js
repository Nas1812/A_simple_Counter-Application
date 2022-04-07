//document.getElementById("count-el").innerText = 5;

//  let counti = 5;
//  console.log(counti)
//  console.log(typeof (counti))

// let myAge = 33;
// let humanDogRatio =7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge)

// let bonusPoints = 50;
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints)








 let countEl = document.getElementById("count-el");
//console.log(countEl)
let count = 0;


function increment(){
  count +=  1;
  countEl.innerText = count; 
 //console.log(count)
 }

function decrement() {
  if (countEl.innerText > 0)
    count -= 1;
  countEl.innerText = count;
}

function refresh() {
  if (countEl.innerText>0)
    countEl.innerText = 0;
  count = 0;
}
let saveEl= document.getElementById("save-el")

function save() {
  let countStr = count + " - ";
  
  saveEl.textContent += countStr;
  refresh();
  
}



