let button = document.getElementById("btn") ;
const body = document.body;
const name = document.querySelector(".name");
 
name.innerHTML = "White" ;
body.backgroundColor = "White" ; 
 
button.addEventListener("click", function(){
     
let r1 = Math.floor(Math.random() * 255 );
let r2 = Math.floor(Math.random() * 255 );
let r3 = Math.floor(Math.random() * 255 );
 
body.style.backgroundColor = "rgb("+r1+","+r2+","+r3+")";
name.innerHTML = "RGB( "+r1+" , "+r2+" , "+r3+" )";
}); 