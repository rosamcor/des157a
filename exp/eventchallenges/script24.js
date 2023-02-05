( function(){
    "use strict";
    console.log('JS is running');

    const div = document.querySelector('div');
    const btn = document.querySelector('button');

    btn.addEventListener( 'click', function(){
       
       const nPara = document.createElement('p');
       const paraText = document.createTextNode('A new paragraph');
       nPara.appendChild(paraText);
       div.appendChild(nPara);

        
    });
    

} )();