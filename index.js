

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



