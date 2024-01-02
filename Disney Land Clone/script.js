const slider = 
document.querySelector(".image-slider");
const arrLeft = 
document.querySelector(".arrow-left");
const arrRight = 
document.querySelector(".arrow-right");
const heading = 
document.querySelector(".caption h1");
const description = 
document.querySelector(".caption p");

const images= [
    "img/poster 1.png" , "img/poster 2.png" ,
    "img/poster 3.png" , "img/poster 4.png"
    , "img/poster 5.png"
]
const headings= [
    "Loki" , "Shoki" ,
    "Femki" , "Menki"
    , "Zenki"
]
const descriptions= [
    "Embark on a whimsical journey at Dummy Disney Land." ,
    
    
    "Step into the enchantment of Dummy Disney Land, a realm where " ,



    
"Experience the joy of imagination at Dummy Disney Land." , 



"Explore the wonders of Dummy Disney Land, where dreams take flight"
    , 


    "Immerse yourself in the magic of Dummy Disney Land"
]

//
let id= 0;

//
function slide(id) {
    slider.style.backgroundImage = `url(img${images[id]})`;


    slider.classList.add('image-fade')
  
    
    setTimeout(() => {
        slider.classList.remove('image-fade')
    }, 550);
    
    heading.innerText = headings[id]
    description.innerText = descriptions[id];
}



arrLeft.addEventListener("click" , function name(params) {
    id--;
    if (id< 0) {
        id = images.length - 1;
    }
    slide(id)
})
arrRight.addEventListener("click" , function name(params) {
    id++;
    if (id > images.length - 1) {
    id = 0
    }
    slide(id)
})

// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})


// 
// cards sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
