( function(){
    "use strict";
    console.log('JS is running');

    const h1 = document.querySelector('h1');
    const  form = document.querySelector('form');

    form.addEventListener('submit', function(event){

     event.preventDefault();
     let num = parseInt(document.querySelector('input').value);

     if(num){
         h1.style.fontSize = num +'px';
     }
     else {
         alert('please enter a number');
     }
    });

} )();