const button = document.getElementById("btn") ;
const body = document.body;
const name = document.querySelector(".name");
const redInput = document.getElementById("R");
const greenInput = document.getElementById("G");
const blueInput = document.getElementById("B");
const redLabel = document.getElementById("Rlabel");
const greenLabel = document.getElementById("Glabel");
const blueLabel = document.getElementById("Blabel");
setInterval( function(){

if(redInput.value == "" || greenInput.value == "" || blueInput.value == "" ){
        
    button.addEventListener("click", function(){
        let r1 = Math.floor(Math.random() * 255 );
        let r2 = Math.floor(Math.random() * 255 );
        let r3 = Math.floor(Math.random() * 255 );

        body.style.backgroundColor = "RGB("+r1+","+r2+","+r3+")";
        name.innerHTML = "RGB( " + r1 +" , " + r2 +" , " + r3 + " )";
    });
}
else{
    button.addEventListener("click" , function (){
        body.style.backgroundColor = "rgb("+redInput.value+","+greenInput.value+","+blueInput.value+")";
        name.innerHTML = "rgb("+redInput.value+","+greenInput.value+","+blueInput.value+")";
        redInput.style.borderColor = "rgb("+redInput.value+",0,0)";
        greenInput.style.borderColor = "rgb(0,"+greenInput.value+",0)";
        blueInput.style.borderColor = "rgb(0,0,"+greenInput.value+")";
    });
}
}, 250);