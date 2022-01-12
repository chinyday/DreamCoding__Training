let ver = document.querySelector('.ver');
let hor = document.querySelector('.hor');
let target = document.querySelector('.target');
let tag = document.querySelector('.tag');
let targetHalWidth = target.getBoundingClientRect().width / 2; 
let targetHalHeight = target.getBoundingClientRect().height / 2; 

window.addEventListener("mousemove", (e) => {
    ver.style.transform = `translateX(${e.clientX}px)`;
    hor.style.transform = `translateY(${e.clientY}px)`;
    target.style.transform = `translate(${e.clientX-targetHalWidth}px, ${e.clientY-targetHalHeight}px)`;
    tag.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    tag.innerHTML = `x : ${e.clientX}px, y : ${e.clientY}px`;
})