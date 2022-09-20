function newElement(){
    let ulDOM = document.querySelector("#list");
    let inputDOM = document.querySelector("#task");

    if(inputDOM.value.trim() == "" || inputDOM.value == null){
        $('#liveToastError').toast('show');
        return;
    }
    else
        $('#liveToastSuccess').toast('show');

    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${inputDOM.value}`;
    ulDOM.appendChild(liDOM);

    let iDOM = document.createElement("i");
    iDOM.classList.add("fa", "fa-times", "close");
    iDOM.setAttribute("id", (ulDOM.children.length - 1));
    liDOM.appendChild(iDOM);

    window.localStorage.setItem(ulDOM.children.length - 1, inputDOM.value);

    liDOM.addEventListener("click", completed);
    iDOM.addEventListener("click", close);
    inputDOM.value = "";
}

let liAllDOM = document.querySelectorAll("li");

for(let i = 0; i < liAllDOM.length; i++){ 
    liAllDOM[i].addEventListener("click", completed);
}

function completed(){
    if(this.classList.contains("checked"))
        this.classList.remove("checked");
    else
        this.classList.add("checked");
}

let iAllDOM = document.querySelectorAll("i");

for(let i = 0; i < iAllDOM.length; i++){ 
    iAllDOM[i].addEventListener("click", close);
}

function close(){
   this.parentElement.remove();
   localStorage.removeItem(this.id);
}

$(document).ready(function() {
    const items = {...localStorage};
    let result = Object.keys(items).map((key) => [Number(key), items[key]]);
    let ulDOM = document.querySelector("#list");

    if(result.length > 0){
        for(let i = 0; i < result.length; i++){

            let liExistDOM = document.createElement("li");
            liExistDOM.innerHTML = `${result[i][1]}`;
            ulDOM.appendChild(liExistDOM);
        
            let iExistDOM = document.createElement("i");
            iExistDOM.classList.add("fa", "fa-times", "close");
            iExistDOM.setAttribute("id", (result[i][0]));
            liExistDOM.appendChild(iExistDOM);

            liExistDOM.addEventListener("click", completed);
            iExistDOM.addEventListener("click", close);
        }
    }
});