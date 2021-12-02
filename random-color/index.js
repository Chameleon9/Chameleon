let colorChangeButton = 
document.getElementById("color-change-button") ;
 
const body = document.body;

const colorName = document.querySelector(".colorname");
 
colorName.innerHTML = "White" ;
 
colorChangeButton.addEventListener("click", function(){
   
let i1 = Math.floor(Math.random() * 255);8
let i2 = Math.floor(Math.random() * 255);
let i3 = Math.floor(Math.random() * 255);

let colorValue ="RGB("+i1+","+i2+","+i3+")" ;
console.log(colorValue);

body.style.backgroundColor = colorValue ;
colorName.innerHTML = colorValue

}); 
 /*
 colorName.innerHTML = toUpperCase(colors.slice(0,1)) +
  colors.slice(1)
 
 colors[randomNumber];*/
