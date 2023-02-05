( function(){
    "use strict";
    console.log('JS is running');

    const para = document.querySelectorAll('p');
    const btn = document.querySelector('button');

    btn.addEventListener( 'click', function(){
       
       for (let i=0; i<para.length; i++) {
        para[i].style.color = 'green';
       }
        
    });
    

} )();