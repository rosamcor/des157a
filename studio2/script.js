(function () {

//Image Scrolling Caresol
    "use strict";
    console.log("reading js");
    
    window.addEventListener('load', function () {
        'use strict';
        const sliderContent = document.querySelector('.a');
    
        // How wide is the original set of images?
        const sliderWidth = sliderContent.offsetWidth;
    
        // clone the set of images and assign them the class name of '.b'
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";
    
        // add the clone to the DOM
        document.querySelector('.slider').appendChild(cloned);
    
        //get the :root element
        let root = document.querySelector(':root');
    
        // set the end of the left position based on the width of the slider
        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);
    
        //Add the animate class to start animating the slider
        document.querySelector('.slider').classList.add("animate");
    });

//Slideshow (Advanced)
let currentImage = 0;
const myphotos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

const container = document.getElementById('content');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

nextBtn.addEventListener('click', function (event) {
    event.preventDefault();

    currentImage++;
    if (currentImage > myphotos.length - 1) { currentImage = 0; }

    swapImage();
});

prevBtn.addEventListener('click', function (event) {
    event.preventDefault();

    currentImage--;
    if (currentImage < 0) { currentImage = myphotos.length - 1; }

    swapImage();
});

function swapImage() {
    const newSlide = document.createElement('img');
    newSlide.src = `slides/${myphotos[currentImage]}`;
    newSlide.className = "fadeinimg";
    container.appendChild(newSlide);

    if (container.children.length > 2) {
        container.removeChild(container.children[0]);
    }
}


//Overlays


document.querySelector('.open').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay').className = 'showing';
});

document.querySelector('.close').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay').className = 'hidden';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document.getElementById('overlay').className = 'hidden';
    }
});








})();