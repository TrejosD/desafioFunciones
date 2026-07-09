function changeBgColor(element){
element.style.backgroundColor = 'black';
}

const ele1 = document.querySelector('#div-1');
const ele2 = document.querySelector('#div-2');
const ele3 = document.querySelector('#div-3');
const ele4 = document.querySelector('#div-4');

ele1.addEventListener('click',()=>changeBgColor(ele1));
ele2.addEventListener('click',()=>changeBgColor(ele2));
ele3.addEventListener('click',()=>changeBgColor(ele3));
ele4.addEventListener('click',()=>changeBgColor(ele4));