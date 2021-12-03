const colors = ["Red","Green","Silver","Purple" 
,"Mintcream","Navy","Royalblue","Pink","Wheat","Magenta","Aliceblue","Antiquewhite","Aquamarine","Beize","Azure","Plum","Powderblue","Cornflowerblue","Cornsilk","Deeppink","Hotpink","Papayawhip","Peachpuff","Tomato","Springgreen","Steelblue","Skyblue"];
let colorChangeButton = 
document.getElementById("color-change-button") ;
 
const body = document.body;
const colorName = document.querySelector(".colorname");
 
colorName.innerHTML = "Plum" ;
body.style.backgroundColor = "Plum" ;
 
colorChangeButton.addEventListener("click", function(){

let randomNumber = Math.floor(Math.random() * (colors.length - 1) + 1);
body.style.backgroundColor = colors[randomNumber];
colorName.innerHTML = colors[randomNumber];
}); 
 /*
 colorName.innerHTML = toUpperCase(colors.slice(0,1)) +
  colors.slice(1)
 
 colors[randomNumber];*/