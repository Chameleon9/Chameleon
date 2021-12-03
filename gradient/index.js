const button = document.getElementById("btn");
const body   = document.body ;
const colors = ["Red","Green","Silver","Purple" 
,"Mintcream","Navy","Royalblue","Pink","Wheat","Magenta","Aliceblue","Antiquewhite","Aquamarine","Azure","Plum","Powderblue","Cornflowerblue","Cornsilk","Deeppink","Hotpink","Papayawhip","Peachpuff","Tomato","Springgreen","Steelblue","Skyblue"];
let angle = "135deg" ;
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
color1.innerHTML = "Red";
color2.innerHTML = "Yellow";

button.addEventListener("click", function (){
    let r1 = Math.floor(Math.random()*colors.length);
    let r2 = Math.floor(Math.random()*colors.length);
    
    body.style.background = "linear-gradient("+ angle +","+colors[r1]+","+colors[r2]+")" ;
    color1.innerHTML = colors[r1];
    color2.innerHTML = colors[r2];
});
