(function () {



// Sounds by Rosaamelia Cordova
const onImage = new Audio('sounds/On.m4a');
const overlayClose = new Audio('sounds/Close.m4a');

//Music
//Emotion - By David Fesliyan from https://www.fesliyanstudios.com/

const emSong = new Audio('sounds/emotion.mp3');
const sillySong = new Audio('sounds/silly.mp3');

//Video
const treeShow = document.getElementsByTagName('video');

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

//Overlay 3 - There (Tree)
document.querySelector('#office').addEventListener('click', function (event) {
    document.querySelector('#video').innerHTML = '<video height="500" controls autoplay><source src="images/tree-show.mov"></video>';

    document.getElementById('tree-overlay').className = 'showing';
    document.getElementById('homepage').className = 'hidden';
});



document.querySelector('#tree-overlay .close').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#video').innerHTML = '';
    overlayClose.play();
    document.getElementById('tree-overlay').className = 'hidden';
    document.getElementById('homepage').className = 'home';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document.querySelector('#video').innerHTML = '';
        overlayClose.play();
        document.getElementById('tree-overlay').className = 'hidden';
        document.getElementById('homepage').className = 'home';
    }
});



//Overlay 2 - Or (Whoa)
    document.querySelector('#dog').addEventListener('click', function (event) {
        event.preventDefault();
        
        sillySong.play();
        document.getElementById('whoa-overlay').className = 'showing';
        document.getElementById('homepage').className = 'hidden';
    });

    document.querySelector('#whoa-overlay .close').addEventListener('click', function (event) {
        sillySong.pause();
        sillySong.currentTime = 0;

        overlayClose.play();
        document.getElementById('whoa-overlay').className = 'hidden';
        document.getElementById('homepage').className = 'home';
        
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            sillySong.pause();
            sillySong.currentTime = 0;

            overlayClose.play();
            document.getElementById('whoa-overlay').className = 'hidden';
            document.getElementById('homepage').className = 'home';
        }
    });

    //Overlay 3 - There (Laksa)
    document.querySelector('#pointing').addEventListener('click', function (event) {
        
        emSong.play();
        document.getElementById('laksa-overlay').className = 'showing';
        document.getElementById('homepage').className = 'hidden';
        
    });

    document.querySelector('#laksa-overlay .close').addEventListener('click', function (event) {
        
        emSong.pause();
        emSong.currentTime = 0;

        overlayClose.play();
        document.getElementById('laksa-overlay').className = 'hidden';
        document.getElementById('homepage').className = 'home';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            emSong.pause();
            emSong.currentTime = 0;
            overlayClose.play();
            document.getElementById('laksa-overlay').className = 'hidden';
            document.getElementById('homepage').className = 'home';
        }
    });




    //Hover: Transperancy & Sound

   //Mouseover
    document.querySelector('#pointing').addEventListener('mouseover', function (event) {


        onImage.play();

        document.getElementById('dog').style.opacity = "0.45";
    
        document.getElementById('office').style.opacity = "0.45";

        
        
        
    });

    document.querySelector('#office').addEventListener('mouseover', function (event) {
        
        onImage.play();

        document.getElementById('dog').style.opacity = "0.45";
    
        document.getElementById('pointing').style.opacity = "0.45";
        
        
    });

    document.querySelector('#dog').addEventListener('mouseover', function (event) {
        
        onImage.play();
        
        document.getElementById('pointing').style.opacity = "0.45";
    
        document.getElementById('office').style.opacity = "0.45";
        
        
    });


    //Mouseout
    document.querySelector('#pointing').addEventListener('mouseout', function (event) {
        
        document.getElementById('dog').style.opacity = "1";
    
        document.getElementById('office').style.opacity = "1";
        
        
    });

    document.querySelector('#office').addEventListener('mouseout', function (event) {
        
        document.getElementById('dog').style.opacity = "1";
    
        document.getElementById('pointing').style.opacity = "1";
        
        
    });

    document.querySelector('#dog').addEventListener('mouseout', function (event) {
        
        document.getElementById('pointing').style.opacity = "1";
    
        document.getElementById('office').style.opacity = "1";
        
        
    });
    




})();