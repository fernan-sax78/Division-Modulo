(function(){
"use strict";



let btn = document.querySelector('.btn');
let h1 = document.querySelector('.h1');

btn.addEventListener('click', ()=>{
    let num1 = parseInt(document.querySelector('#text').value);
    let num2 = parseInt(document.querySelector('#text2').value);

    h1.innerHTML=`${num1}<i class="fas fa-divide m-2"></i>${num2} = <span class ="green">${Math.floor(num1 / num2)}</span> <br> con Resto = <span class = "red"> ${num1 % num2}</span>`;

   if (!isNaN(num1) && !isNaN(num2)) {
    document.querySelector('#text').value = null;
    document.querySelector('#text2').value = null;
   }else{
       h1.innerHTML = `<span class = "error">Per favore inserire numeri...</span>`;
       document.querySelector('#text').value = null;
       document.querySelector('#text2').value = null;
   }
})





}());