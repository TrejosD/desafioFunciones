

document.addEventListener('keydown', (e)=>{
const ele = document.querySelector('#key');
const ele2 = document.querySelector('#key2');
const body = document.querySelector('body');

    if(ele == null && (e.key == 'a' || e.key == 'A' || e.key == 's' || e.key == 'S' || e.key == 'd' || e.key == 'D')){
       createDivElement('key',createContainer(body))
        }
    if(ele2 == null && (e.key == 'q' || e.key == 'Q' || e.key == 'w' || e.key == 'W' || e.key == 'e' || e.key == 'E')){
            createDivElement('key2', createContainer(body));
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

    function createContainer(body){
        let container = document.querySelector('#box');
        console.log('script ejecutado')
        if(container == null){
            var newBox = document.createElement('div');
            body.appendChild(newBox);
            newBox.id = 'box';
            newBox.style.display = 'flex';
            newBox.style.justifyContent = 'space-evenly';
        }else{
            var newBox = document.querySelector('#box');
        }
        return newBox;
    }

    function createDivElement(id, container){
        let newElemet = document.createElement('div');
            container.append(newElemet);
            newElemet.id = id;
            newElemet.style.width = '200px';
            newElemet.style.height = '200px';
            newElemet.style.border = '3px solid black';
    }
