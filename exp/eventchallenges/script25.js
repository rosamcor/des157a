( function(){
    "use strict";
    console.log('JS is running');

    const div = document.querySelector('div');
    const Addbtn = document.querySelectorAll('button')[0];
    const Deletebtn = document.querySelectorAll('button')[1];

    Addbtn.addEventListener( 'click', function(){
       
       const nPara = document.createElement('p');
       const paraText = document.createTextNode('A new paragraph');
       nPara.appendChild(paraText);
       div.appendChild(nPara);

        
    });

    Deletebtn.addEventListener( 'click', function(){
       
       const AllPara = document.querySelectorAll('p');
       
       div.removeChild(div.children[AllPara.length-1]);

        
    });

} )();