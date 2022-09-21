const categories = ["All", "Korea", "Japan", "China"];

const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured-500x500.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let divButtonDOM = document.querySelector(".btn-container");

//Buttonlarımızı oluşturduk
categories.forEach( function(item){
    let buttonDOM = document.createElement("button");
    buttonDOM.textContent = item;
    buttonDOM.classList.add("btn", "btn-outline-dark", "btn-item");
    buttonDOM.setAttribute("data-id", item);

    divButtonDOM.appendChild(buttonDOM);
});

let allButton = document.querySelectorAll("button");
//Bütün butonlara tıklanınca sortCategory fonksiyonuna yönlendirdik
for(let i = 0; i < allButton.length; i++){
    allButton[i].addEventListener("click", sortCategory);
}

//Seçilen kategoriye göre yiyeckleri gösterdik
function sortCategory(){
    //Öncelikle daha önce doldurduklarımızı boşalttık
    let sectionDOM = document.querySelector(".section-center");
    sectionDOM.innerHTML = "";

    let foods = [];
    let currentCategory = this.getAttribute("data-id");

    //Seçilen kategoriye göre yiyecekleri yeni bir(foods) array'ine atadık
    if(currentCategory == "All")
        foods = menu;
    else
        foods = menu.filter(item => item.category == currentCategory);

    //Seçilen kategoriye göre yiyeceklerimizi gösterdik
    foods.forEach(function(item){
        let singleItemDOM = document.createElement("div");
        singleItemDOM.classList.add("menu-items", "col-sm-12", "col-lg-6");

        let imageDOM = document.createElement("img");
        imageDOM.setAttribute("src", item.img);
        imageDOM.setAttribute("alt", item.title);
        imageDOM.classList.add("photo");

        let secondDivDOM = document.createElement("div");
        secondDivDOM.classList.add("menu-info");

        singleItemDOM.appendChild(imageDOM);
        singleItemDOM.appendChild(secondDivDOM);

        let titleDOM = document.createElement("div");
        titleDOM.classList.add("menu-title");

        let textDOM = document.createElement("div");
        textDOM.classList.add("menu-text");
        textDOM.textContent = item.desc;

        secondDivDOM.appendChild(titleDOM);
        secondDivDOM.appendChild(textDOM);

        let headerDOM = document.createElement("h4");
        headerDOM.textContent = item.title;

        let priceDOM = document.createElement("h4");
        priceDOM.textContent = item.price;
        priceDOM.classList.add("price");

        titleDOM.appendChild(headerDOM);
        titleDOM.appendChild(priceDOM);

        sectionDOM.appendChild(singleItemDOM);
    });
}

//Sayfa ilk açıldığında all'u çağır
document.addEventListener("DOMContentLoaded", function(event) { 
    var first = document.querySelector("[data-id='All']");
    first.click();
});