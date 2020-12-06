var total = 0;
var newBasket = new Map();
newBasket.set("Клубничный водоворот — 300", 0).set("Радуга — 270", 0).set("Бананка — 270", 0).set("Бетон — 150", 0).set("Солнышко — 170", 0);

function add(item) {
    let tmp = item.split('/');
    total += Number(tmp[1]);

    let a = "";
    for (let [key, value] of newBasket) {
        if (`${tmp[0]} — ${tmp[1]}` === key) {
            newBasket.set(key, ++value);
        }
        if (value != 0) {
            a += `<p>${key}&#8381;   [x${value}]</p>`;
        }
    }

    let start = document.getElementById("start");
    start.innerHTML = a;

    let right = document.getElementById("right");
    right.innerHTML = `${total}`;
}



function toWEB() {
    var viewport = document.querySelector("meta[name=viewport]");

    if (window.matchMedia("(min-width: 1024px)").matches) {
        viewport.setAttribute('content', 'width=device-width');
    } else {
        viewport.setAttribute('content', 'width=1280px');
    }
}

function toAPP() {
    var viewport = document.querySelector("meta[name=viewport]");

    if (window.matchMedia("(max-width: 639px)").matches) {
        viewport.setAttribute('content', 'width=device-width');
    } else {
        viewport.setAttribute('content', 'width=425px');
    }
}