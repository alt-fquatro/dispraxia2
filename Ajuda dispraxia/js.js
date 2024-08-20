
var modal = document.getElementById("loginModal");

var btn = document.getElementById("loginBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const carrosselWrapper = document.querySelector('.carrossel-wrapper');
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;
const visibleItems = 3; // Número de itens visíveis ao mesmo tempo
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarrossel();
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - visibleItems;
    }
    updateCarrossel();
});

function updateCarrossel() {
    const offset = -currentIndex * 300; // 300 é a largura de cada item
    carrosselWrapper.style.transform = `translateX(${offset}px)`;
}