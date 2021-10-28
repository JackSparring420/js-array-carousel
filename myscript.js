const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
// creo delle variabili per inserire gli elementi
const itemsCont = document.querySelector(".items");
const thamsCont = document.querySelector(".thumbs");


// creo i conenuti del blocco di sx
// creo una variabile di partenza fuori dal flusso
let item = "";
for(let i = 0; i < items.length; i++) {
    item += `
    <div class="item">
        <img src="${items[i]}" alt="">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>`;
}
// stampo i contenuti del blocco di sx
itemsCont.innerHTML = item;

// creo i conenuti del blocco di dx
let thumbs = "";
for(let i = 0; i < items.length; i++) {
    thumbs += `
    <div class="thumb">
        <img src="${items[i]}" alt="">
    </div>`;
}
// stampo i contenuti del blocco di sx
thamsCont.innerHTML += thumbs;

// agiungho la classe active ai blocchi
document.getElementsByClassName("thumb")[0].classList.add("active");
document.getElementsByClassName("item")[0].classList.add("active");

// cambio img con il click
const next = document.querySelector(".next");


// per registrare il click
let activePosition = 0;

// dico al pulsanre next come deve comportarsi
next.addEventListener("click",
    function() {

        if(activePosition < items.length -1){
            activePosition = activePosition +1;
        } else {
            activePosition = 0;
        }


        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active"); 
    }
);

// dico al pulsanre prev come deve comportarsi
const prev = document.querySelector(".prev");
prev.addEventListener("click",
    function() {

        if(activePosition === 0){
            activePosition = items.length -1;
        } else {
            --activePosition;
        }

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active"); 
    }
); 