var arr = { 0: "Клубничный рожок/300", 1: "Рожок «Радуга»/270", 2: "Бананка/270" };
var total = 0;
var newBasket = new Map();
newBasket.set("Клубничный рожок — 300", 0).set("Рожок «Радуга» — 270", 0).set("Бананка — 270", 0);

function add(item) {
    let tmp = arr[item].split('/');
    total += Number(tmp[1]);

    for (let [key, value] of newBasket) {
        if (`${tmp[0]} — ${tmp[1]}` === key) {
            newBasket.set(key, ++value);
        }
    }

    let a = "";
    for (let [key, value] of newBasket) {
        if (value != 0) {
            a += `<p>${key}&#8381;   [x${value}]</p>`;
        }
    }

    let start = document.getElementById("start");
    if (start.innerHTML === "Корзина пуста") {
        start.className = "no";
    }
    start.innerHTML = a;

    let right = document.getElementById("right");
    right.innerHTML = `${total}`;



}