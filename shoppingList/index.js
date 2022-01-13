let add_btn = document.querySelector('.footer__btn');
let input_txt = document.querySelector('.footer__input')
let ul = document.querySelector(".items");
let form = document.querySelector(".footer__form");

let id_num = 0; 
//item__row를 그려주는 함수
function paintItem(txt) {
    let li = document.createElement("li");
    li.setAttribute("class", "item__row");
    li.setAttribute("data-id", id_num);
    li.innerHTML = `
        <div class="item">
            <span class="item__name">${txt}</span>
            <button class="item__del"><i class="fas fa-trash-alt" data-id="${id_num}"></i></button>
        </div>
        <div class="item__divider"></div>`;
    id_num++;
    return li;
}

//추가 함수
function addItem() {
    let get_input_txt = input_txt.value; 
    if (get_input_txt.length !=0 ){
        let li = paintItem(get_input_txt);
        ul.appendChild(li);
        li.scrollIntoView({behavior: "smooth", block: "end"});
        document.querySelector('.footer__input').value = ""; 
    }
    input_txt.focus();
}

//삭제
ul.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    if(id){
        document.querySelector(`.item__row[data-id="${id}"]`).remove();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addItem();
});