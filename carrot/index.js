'use strict'

let playground = document.querySelector('.playground');
let playgroundRect = playground.getBoundingClientRect();
const IMG_SIZE = 80;

function init() {
    // 1. 게임을 시작한다
    // 1.1 당근과 벌레를 게임 필드안에 배치
        // 1.2 타이머 작동 
    // 2. 당근을 잡는다
        // 2.1 카운트를 줄인다
    // 3. 게임을 종료 및 팝업 실행한다
        // 3.1 당근을 다 잡으면, win 종료 팝업 실행
        // 3.2 타이머 종료와 벌레를 잡으면, lost 종료 팝업 실행
    // 4. 리플레이 버튼을 누른다
        // 4.1 리플레이할 것인지 팝업 실행

    // 당근 추가
    addItems('carrot', 5, 'img/carrot.png');
    // 벌레 추가
    addItems('bug', 5, 'img/bug.png');

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


init();