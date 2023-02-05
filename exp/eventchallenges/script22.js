( function(){
    "use strict";
    console.log('JS is running');

    const para = document.querySelector('p');
    const btn = document.querySelector('button');

    btn.addEventListener( 'click', function(){
        para.style.color = 'green';
     });
            

} )();