( function(){
    "use strict";
    console.log('JS is running');

    const div = document.querySelector('div');

    div.addEventListener('mouseover', function(){
        div.className='big';
    });

    div.addEventListener('mouseout',function(){
        div.removeAttribute('class');
    });
   

} )();