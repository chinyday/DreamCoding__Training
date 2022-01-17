'use strict';

const IMG_SIZE = 80;
const IMG_COUNT = 5;
const GAME_TIME = 10;
let score = 0;

let playground = document.querySelector('.playground');
let timer = document.querySelector('.play-notice__timer');
let counter = document.querySelector('.play-notice__count');
let play_btn = document.querySelector('.play-notice__button');

let alert = document.querySelector('.alert');
let alert_txt = document.querySelector('.alert__text');
let alert_btn = document.querySelector('.alert__button');

let interval = null;
let started = false;

const bgaudio = new Audio("./sound/bg.mp3");   
const alertSound = new Audio("./sound/alert.wav"); 
const winSound = new Audio("./sound/game_win.mp3"); 
const carrotSound = new Audio("./sound/carrot_pull.mp3"); 
const bugSound = new Audio("./sound/bug_pull.mp3"); 

play_btn.addEventListener('click', () => { 
    if(started){
        stopGame();
    }else{ 
        startGame();
    }  
});

playground.addEventListener('click', (e) => {
    let class_name = e.target.className;

    if(class_name == "playground"){
        return;
    }

    if(class_name.includes('carrot')){
        startSound(carrotSound);
        e.target.remove();
        score++;
        getCounter(score);
    }else if(class_name.includes('bug')){
        startSound(bugSound);
        clearInterval(interval);   
        finishGame(false);
    }
});

alert_btn.addEventListener('click', (e) => {
    clearInterval(interval);   
    showPlayButton();
    startGame();
});

function startGame() {
    started = true;
    clearInterval(interval);   
    showStopButton();
    startSound(bgaudio);

    let remainTime = GAME_TIME;
    interval = setInterval(() => {
        if(remainTime <= 0){
            clearInterval(interval);   
            startSound(bugSound);
            finishGame();
            return;
        }
        setTimerTxt(--remainTime);
    }, 1000);
    init();
}

function stopGame() {
    started = false;
    clearInterval(interval);   
    stopBgSound(bgaudio);
    displayPopUp('REPLAY??');
}

function finishGame(win) {
    started = false;
    stopBgSound(bgaudio);
    clearInterval(interval);   
    displayPopUp(win? 'YOU WIN!! ' : 'YOU LOST!!' );
}

function setTimerTxt(remainTime) {
    timer.innerHTML = `0:${remainTime}`;
}

function init() {
    score = 0;
    timer.innerHTML = "0:0";
    playground.innerHTML = '';
    alert.classList.add('alert--none');  
    addItems('carrot', IMG_COUNT, 'img/carrot.png');// 당근 추가
    addItems('bug', IMG_COUNT, 'img/bug.png');// 벌레 추가
}

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

function displayPopUp(txt) {
    alert.classList.remove('alert--none');
    alert_txt.innerHTML = txt;
}

function getCounter(cnt) {
    counter.innerHTML = IMG_COUNT - cnt;
    if(IMG_COUNT === cnt ){
        winSound.play();
        finishGame(true);
    }
}

function stopBgSound(sound) {
    sound.pause();  
}
function startSound(sound) {
    sound.play();
}
