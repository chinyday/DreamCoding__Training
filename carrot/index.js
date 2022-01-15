'use strict';

const IMG_SIZE = 80;
const IMG_COUNT = 5;
let GAME_TIME = 5;
let score = 0;

let playground = document.querySelector('.playground');
let timer = document.querySelector('.play-notice__timer');
let counter = document.querySelector('.play-notice__count');
let play_btn = document.querySelector('.play-notice__button');

let alert = document.querySelector('.alert');
let alert_txt = document.querySelector('.alert__text');
let alert_btn = document.querySelector('.alert__button');

let interval = null;
let checked = false;

function addItems(item, cnt, img) {
   
    let playgroundRect = playground.getBoundingClientRect();
    let x1 = 0;
    let y1 = 0;
    let x2 = playgroundRect.width - IMG_SIZE;
    let y2 = playgroundRect.height - IMG_SIZE;

    for (let i = 0; i < cnt; i++) {
        let x = getRandomNumber(x1, x2); 
        let y = getRandomNumber(y1, y2);
        let span = document.createElement("img");
        span.setAttribute("class", `${item} icon`);
        span.setAttribute("src", img);
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        playground.appendChild(span);
    }
}

function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

playground.addEventListener('click', (e) => {
    let class_name = e.target.className;

    if(class_name == "playground"){
        return;
    }

    if(class_name.includes('carrot')){
        e.target.remove();
        score++;
        getCounter(score);
    }else if(class_name.includes('bug')){
        stopTimer()
        displayPopUp('YOU LOST!!');
    }
});

alert_btn.addEventListener('click', (e) => {
    stopTimer();
    showStopButton();
    init();
}) 


play_btn.addEventListener('click', () => { 
    console.log(checked);
    if(checked){
        stopGame();
    }else{
        init();
    }  
});

function init() {
    checked = true;
    GAME_TIME = 5;
    score = 0;
    timer.innerHTML = "0:0";
    playground.innerHTML = '';
    alert.classList.add('alert--none');  
    
    addItems('carrot', IMG_COUNT, 'img/carrot.png');// 당근 추가
    addItems('bug', IMG_COUNT, 'img/bug.png');// 벌레 추가
    
    stopTimer();
    showStopButton();
    interval = setInterval(() => {setTimer();}, 1000);
}

function showPlayButton() {
    let icon = play_btn.querySelector('.fas'); 
    icon.classList.add('fa-play');
    icon.classList.remove('fa-stop');
}
function showStopButton() {
    let icon = play_btn.querySelector('.fas'); 
    icon.classList.remove('fa-play');
    icon.classList.add('fa-stop');
}

function setTimer() {
    if(GAME_TIME > 0){
         GAME_TIME--;
         timer.innerHTML = `0:${GAME_TIME}`;
     }else if(GAME_TIME == 0){
         displayPopUp('YOU LOST!!');
     } 
 }

function stopTimer() {
    clearInterval(interval);   
}

function stopGame() {
    checked = false;
    showPlayButton();
    stopTimer()
    displayPopUp('REPLAY??');
}

function displayPopUp(txt) {
    alert.classList.remove('alert--none');
    alert_txt.innerHTML = txt;
}

function getCounter(cnt) {
    counter.innerHTML = IMG_COUNT - cnt;
    if(IMG_COUNT === cnt ){
        stopTimer();
        displayPopUp('YOU WIN!!');
    }
}
