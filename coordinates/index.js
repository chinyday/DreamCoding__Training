let ver = document.querySelector('.ver');
let hor = document.querySelector('.hor');
let target = document.querySelector('.target');
let tag = document.querySelector('.tag');

window.addEventListener("mousemove", (e) => {
    ver.style.left = `${e.clientX}px`;
    hor.style.top =  `${e.clientY}px`;
    target.style.left = `${e.clientX}px`;
    target.style.top = `${e.clientY}px`;
    tag.style.left = `${e.clientX}px`;
    tag.style.top = `${e.clientY}px`;
    tag.innerHTML = `x : ${e.clientX}px, y : ${e.clientY}px`;
})