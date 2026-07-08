

document.addEventListener('keydown', (e)=>{
const ele = document.querySelector('#key');
const ele2 = document.querySelector('#key2');
const body = document.querySelector('body');
    if(ele == null && (e.key == 'a' || e.key == 'A' || e.key == 's' || e.key == 'S' || e.key == 'd' || e.key == 'D')){
       let newEle = document.createElement('div');
       body.appendChild(newEle);
            newEle.style.width = '200px';
            newEle.style.height = '200px';
            newEle.style.border = '3px solid black'
            newEle.id = 'key';  
        }
    if(ele2 == null && (e.key == 'q' || e.key == 'Q' || e.key == 'w' || e.key == 'W' || e.key == 'e' || e.key == 'E')){
            let newEle2 = document.createElement('div');
            body.appendChild(newEle2);
            newEle2.style.width = '200px';
            newEle2.style.height = '200px';
            newEle2.style.border = '3px solid black'
            newEle2.id = 'key2';
        }
        let element = document.querySelector('#key');
        if(e.key == 'a' || e.key == 'A'){
            const pink = 'pink';
            element.style.backgroundColor = pink;
        }else if(e.key == 's' || e.key == 'S'){
            const orange = 'orange';
            element.style.backgroundColor = orange;
        }else if(e.key == 'd' || e.key == 'D'){
            const ligthBlue = 'lightBlue';
            element.style.backgroundColor = ligthBlue;
        }
        let element2 = document.querySelector('#key2');
        if(e.key == 'q' || e.key == 'Q'){
            const purple = 'purple';
            element2.style.backgroundColor = purple;
        }else if(e.key == 'w' || e.key == 'W'){
            const gray = 'gray';
            element2.style.backgroundColor = gray;
        }else if(e.key == 'e' || e.key == 'E'){
            const brown = 'brown';
            element2.style.backgroundColor = brown;
        }
        }
    )
