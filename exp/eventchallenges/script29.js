( function(){
    "use strict";
    console.log('JS is running');

    let doctop;
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() {
        doctop = window.pageYOffset;

        switch(true){
            case doctop < 500: body.className='one'; break;
            case doctop < 1000: body.className='two'; break;
            case doctop < 1500: body.className='three'; break;
            case doctop < 2000: body.className='four'; break;
            default:body.className='five';
        }
    })
   

} )();