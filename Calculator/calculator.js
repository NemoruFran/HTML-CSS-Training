const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".opbuttons");
const result = document.querySelector(".result");

var number1 = "";
var number2 = "";
var opPressed= "";

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
   const key = e.target
   const action = key.dataset.action
   if(!action){
     if(opPressed===""){
       number1 = number1 + key.textContent;
       result.textContent = number1;
     }
     else {
       number2 = number2 + key.textContent;
       result.textContent = result.textContent + key.textContent;
     }
   }
   if(action === "add" || 
      action === "substract" ||
      action === "multiply" ||
      action === "divide"
   ){
     opPressed = action;
     var actionString = "";
     switch(action){
       case "add": 
         actionString = "+";
         break;
       case "substract": 
         actionString = "-";
         break;
       case "multiply":
         actionString = "x";
         break;
       case "divide":
         actionString = "/";
     }
     result.textContent = result.textContent + actionString;
   }
   
   if(action === "decimal"){
    if(opPressed=="" &&!number1.includes(".") && number1!=""){
      number1 = number1 + ".";
      result.textContent = number1;
    }
    else if(!number2.includes(".") && number2!=""){
      number2 = number2 + "."
      result.textContent = result.textContent + "."
    } 
   }
   
   if(action === "clear"){
     number1 = "";
     result.textContent = "0";
     number2 = "";
     opPressed = "";
   }
   
   if(action ==="calculate")
   {
     number1 = calculate(number1,number2,opPressed);
     result.textContent = number1;
     opPressed = "";
     number2="";
   }
 }
})

function calculate (number1, number2, action){
  if(action==="add"){
    return (String(parseFloat(number1)+parseFloat(number2)));
  }
  if(action==="substract"){
    return (String(parseFloat(number1)-parseFloat(number2)));
  }
  if(action==="multiply"){
    return (String(parseFloat(number1)*parseFloat(number2)));
  }
  if(action==="divide"){
    return (String(parseFloat(number1)/parseFloat(number2)));
  }
  
  return "";
}