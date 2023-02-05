( function(){
    "use strict";
    console.log('JS is running');

    const div = document.querySelector('div');
    const Addbtn = document.querySelectorAll('button')[0];
    const Deletebtn = document.querySelectorAll('button')[1];
    let numOfParas = 1;

    Addbtn.addEventListener( 'click', function(){
       
    numOfParas++;
       const nPara = document.createElement('p');
       const paraText = document.createTextNode(`This is paragragh # ${numOfParas}`);

    
       nPara.appendChild(paraText);
       div.appendChild(nPara);

        
    });

    Deletebtn.addEventListener( 'click', function(){
       
      if (numOfParas > 1) {

       div.removeChild (div.children[numOfParas-1]);
       numOfParas--;

        }

    else {
            alert("Do not delete the last paragraph!");
        }
    });

} )();