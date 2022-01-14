'use strict'

const IMG_SIZE = 80;
let IMG_COUNT = 5;
let GAME_TIME = 20
let playground = document.querySelector('.playground');
let playgroundRect = playground.getBoundingClientRect();
let timer = document.querySelector('.play-notice__timer');
let counter = document.querySelector('.play-notice__count');
let icon = document.querySelector('.icon');

function init() {
    // 1. 게임을 시작한다
    // 1.1 당근과 벌레를 게임 필드안에 배치 o
        // 1.2 타이머 작동 0
    // 2. 당근을 잡는다
        // 2.1 카운트를 줄인다 0
    // 3. 게임을 종료 및 팝업 실행한다
        // 3.1 당근을 다 잡으면, win 종료 팝업 실행
        // 3.2 타이머 종료와 벌레를 잡으면, lost 종료 팝업 실행
    // 4. 리플레이 버튼을 누른다
        // 4.1 리플레이할 것인지 팝업 실행

    timer.innerHTML = "0:0";
    counter.innerHTML = IMG_COUNT;
    // 당근 추가
    addItems('carrot', IMG_COUNT, 'img/carrot.png');
    // 벌레 추가
    addItems('bug', IMG_COUNT, 'img/bug.png');
    
    // setInterval(() => {setTimer();}, 1000);
}

function addItems(item, cnt, img) {
  
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
    }else if(class_name.indexOf('bug')){

    }
});

function getCounter(cnt) {
    cnt--;
    counter.innerHTML = cnt;
    IMG_COUNT = cnt;
}

function setTimer() {
    if(GAME_TIME != 0){
        timer.innerHTML = `0:${GAME_TIME}`;
        GAME_TIME--;
    }
}

init();