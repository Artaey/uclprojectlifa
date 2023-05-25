let button = document.getElementById("button");
console.log(button);

setTimeout(first(), "1000");

function first(){
    button.style.transform = "rotate(7deg)";
    setTimeout(second(), "100");
}

function second(){
    button.style.transform = "rotate(-7deg)";
    setTimeout(reset(), "100");
}

function reset(){
    button.style.transform = "rotate(0deg)";
    setTimeout(first(), "1000");
}