let button = document.getElementById("button");
let topswoosh = document.getElementById("totop");

setTimeout(first, "2000");
topswoosh.style.opacity = "0";
topswoosh.style.pointerEvents = "none"

function show(){
    let y = window.scrollY;
    if(y >= 300){
        topswoosh.style.opacity = "1";
        topswoosh.style.pointerEvents = "all"
    }else{
        topswoosh.style.opacity = "0";
        topswoosh.style.pointerEvents = "none"
    }
}

function totop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function first(){
    button.style.transform = "rotate(7deg)";
    setTimeout(second, "100");
}

function second(){
    button.style.transform = "rotate(-7deg)";
    setTimeout(reset, "100");
}

function reset(){
    button.style.transform = "rotate(0deg)";
    setTimeout(first, "2000");
}

topswoosh.addEventListener("click", totop);
window.addEventListener("scroll", show);