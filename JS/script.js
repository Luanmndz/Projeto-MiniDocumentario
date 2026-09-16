
// Texto Animado
let i = 0;
let txt = "Ditadura Militar No Brasil";
let speed = 120; 

function textAnimacao() {
    if (i < txt.length) 
    {
        document.getElementById("h1-hero").innerHTML += txt.charAt(i);
    i++;
        setTimeout(textAnimacao, speed);
    } 
    else {
        setTimeout(() => {
        i = 0; 
        document.getElementById("h1-hero").innerHTML = ""; 
        textAnimacao(); 
    }, 2000);
}
}
document.addEventListener("DOMContentLoaded", textAnimacao);