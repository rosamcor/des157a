(function () {

//Slideshow on Interval
const myImages = ['laksa-stall.jpg','laksa-table.jpg','laksa-close.jpg'];

let currentImage = 0;

const slide = document.getElementById('myimage');
setInterval(
function nextPhoto(){
    currentImage++;

    if(currentImage > myImages.length-1) {
        currentImage = 0;
    }

    slide.src = `images/${myImages[currentImage]}`;
}, 4000)



//Overlays


//Overlay 1 - Here (Laksa)
    document.querySelector('#office').addEventListener('click', function (event) {
        
        document.getElementById('laksa-overlay').className = 'showing';
        document.getElementById('homepage').className = 'hidden';
    });

    document.querySelector('.close').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('laksa-overlay').className = 'hidden';
        document.getElementById('homepage').className = 'home';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('laksa-overlay').className = 'hidden';
            document.getElementById('homepage').className = 'home';
        }
    });

//Overlay 2 - Or (Whoa)
    document.querySelector('#dog').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('whoa-overlay').className = 'showing';
        document.getElementById('homepage').className = 'hidden';
    });

    document.querySelector('#whoa-overlay .close').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('whoa-overlay').className = 'hidden';
        document.getElementById('homepage').className = 'home';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('whoa-overlay').className = 'hidden';
            document.getElementById('homepage').className = 'home';
        }
    });


//Overlay 3 - There (Tree)
    document.querySelector('#pointing').addEventListener('click', function (event) {
        
        document.getElementById('tree-overlay').className = 'showing';
        document.getElementById('homepage').className = 'hidden';
    });

    document.querySelector('#tree-overlay .close').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('tree-overlay').className = 'hidden';
        document.getElementById('homepage').className = 'home';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('tree-overlay').className = 'hidden';
            document.getElementById('homepage').className = 'home';
        }
    });








})();