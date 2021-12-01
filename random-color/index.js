const hexValues = ["1","2","3","4" 
,"5","6","A","B","C"];

let colorChangeButton = 
document.getElementById("color-change-button") ;
 
const body = document.body;

const colorName = document.querySelector(".colorname");
 
colorName.innerHTML = "White" ;
 
 colorChangeButton.addEventListener("click", function(){
     
let randomNumber = Math.floor(Math.random() * (colors.length - 1) + 1);
 
body.style.backgroundColor = colors[randomNumber];
 
colorName.innerHTML = colors[randomNumber];
 
}); 
 /*
 colorName.innerHTML = toUpperCase(colors.slice(0,1)) +
  colors.slice(1)
 
 colors[randomNumber];*/