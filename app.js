const display = document.querySelector(".inp");
const btnS = document.querySelectorAll("button");

function safeCos(x) {
  let cosValue = Math.cos(x);
  return Math.abs(cosValue) < 1e-10 ? 0 : cosValue; // Round very small values to 0
};

function safeSin(x) {
  let sinValue = Math.sin(x);
  return Math.abs(sinValue) < 1e-10 ? 0 : sinValue; // Round very small values to 0
};

function safeTan(x) {
  let tanValue = Math.tan(x);
  return Math.abs(tanValue) < 1e-10 ? 0 : tanValue; // Round very small values to 0
};
let string = '';
for(let btn of btnS){
  btn.addEventListener("click" , (e , x)=>{
    let value = e.target.innerHTML;
      if(value == "AC"){
        string = '' 
      }else if(value == "="){
        try {
         let expression = string
          .replace(/cos\(/g, "safeCos(")
          .replace(/sin\(/g, "safeSin(")
          .replace(/tan\(/g, "safeTan(")
          .replace(/sec\(/g, "1/safeCos(")
          .replace(/csc\(/g, "1/safeSin(")
          .replace(/cot\(/g, "1/safeTan(");
         let result = math.evaluate(expression, { safeCos, safeSin, safeTan});
          // Handle cases where result should be Infinity
         if (!isFinite(result)) {
          string = "Infinity";
         }else{
          string = result;
         }
        }catch(error){
          string = "Error"; // Handle invalid expressions
        } 
      }else if(value == "del"){
        let newstr = string.slice(0 , -1);
        string = newstr;
      }else{
        string += value;
      }
     display.value = string; 
  });
};
let trigBtn = document.querySelector("#trig");
let trigon = document.querySelector("#trigon");
let funcBtn = document.querySelector("#func");
let funct = document.querySelector("#function");

trigBtn.addEventListener("click" , ()=>{
  trigon.classList.toggle("none");
  funct.classList.add("none");
});
funcBtn.addEventListener("click" , ()=>{
  funct.classList.toggle("none");
  trigon.classList.add("none");
});




