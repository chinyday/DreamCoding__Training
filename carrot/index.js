'use strict'

const IMG_SIZE = 80;
let IMG_COUNT = 5;
let GAME_TIME = 5;
let playground = document.querySelector('.playground');
let timer = document.querySelector('.play-notice__timer');
let counter = document.querySelector('.play-notice__count');
let play_btn = document.querySelector('.play-notice__button');
let alert = document.querySelector('.alert');
let alert_txt = document.querySelector('.alert__text');
let alert_btn = document.querySelector('.alert__button');
let interval = null;

function init() {

    IMG_COUNT = 5;
    GAME_TIME = 5;
    timer.innerHTML = "0:0";
    counter.innerHTML = IMG_COUNT;
    playground.innerHTML = '';
    alert.classList.add('alert--none');  

    addItems('carrot', IMG_COUNT, 'img/carrot.png');// 당근 추가
    addItems('bug', IMG_COUNT, 'img/bug.png');// 벌레 추가
    
    interval = setInterval(() => {setTimer();}, 1000);
}

function addItems(item, cnt, img) {
   
    let playgroundRect = playground.getBoundingClientRect();
    let x1 = 0;
    let y1 = 0;
    let x2 = playgroundRect.width - IMG_SIZE;
    let y2 = playgroundRect.height - IMG_SIZE;

    for (let i = 0; i < cnt; i++) {
        
        let x = (Math.floor(Math.random() * (x2 - x1)) + x1);
        let y = (Math.floor(Math.random() * (y2 - y1)) + y1);

        let span = document.createElement("img");
        span.setAttribute("class", `${item} icon`);
        span.setAttribute("src", img);
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        playground.appendChild(span);
    }
}

playground.addEventListener('click', (e) => {
    let class_name = e.target.className;

    if(class_name == "playground"){
        return;
    }

    if(class_name.includes('carrot')){
        e.target.remove();
        getCounter(IMG_COUNT);
    }else if(class_name.includes('bug')){
        clearInterval(interval);
        displayPopUp('YOU LOST!!');
    }
});

function getCounter(cnt) {
    cnt--;
    counter.innerHTML = cnt;
    IMG_COUNT = cnt;
    
    if(IMG_COUNT === 0 ){
        clearInterval(interval);
        displayPopUp('YOU WIN!!');
    }
}

function displayPopUp(txt) {
    alert.classList.remove('alert--none');
    alert_txt.innerHTML = txt;
}

function setTimer() {

   if(GAME_TIME > 0){
        GAME_TIME--;
        timer.innerHTML = `0:${GAME_TIME}`;
    }else if(GAME_TIME == 0){
        displayPopUp('YOU LOST!!');
    } 
  
}

alert_btn.addEventListener('click', (e) => {
    // let stop = play_btn.querySelector('.fa-stop');
    // stop.classList.add('fa-play');
    // stop.classList.remove('fa-stop');
    clearInterval(interval);
    init();
}) 

play_btn.addEventListener('click', (e) => { 

    let play = play_btn.querySelector('.fa-play'); 

    if(play){
        play.classList.remove('fa-play');
        play.classList.add('fa-stop');
        init();
    }else if(stop){
        displayPopUp('REPLAY??');
    }

});
