let add_btn = document.querySelector('.footer__btn');
let input_txt = document.querySelector('.footer__input')
let ul = document.querySelector(".items");

//item__row를 그려주는 함수
function paintItem(txt) {
    let li = document.createElement("li");
    li.setAttribute("class", "item__row");
    
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    
    let span = document.createElement("span");
    span.innerHTML = txt;
    span.setAttribute("class", "item__name");

    let btn = document.createElement("button");
    btn.setAttribute("class", "item__del");
    btn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    btn.addEventListener("click", deleteItem);
   
    let divier = document.createElement("div");
    divier.setAttribute("class", "item__divider");

    div.appendChild(span);
    div.appendChild(btn);
    li.appendChild(div);
    li.appendChild(divier);
    
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

//삭제 함수
function deleteItem(e) {   
    e.currentTarget.parentElement.parentElement.remove();
}

add_btn.addEventListener("click", () => {
    addItem();
});

window.addEventListener("keypress", (e) => {
    if(e.key =="Enter"){
        addItem();
    }
});