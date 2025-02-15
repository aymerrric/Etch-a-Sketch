const container = document.querySelector("#container");
let darkening = 0;



function createLayout(sizeOfTheGrid){
    for (let i = 0; i<sizeOfTheGrid; i++){
    const newLign = document.createElement("div");
    newLign.classList.add("line");    
        for (let j = 0; j<sizeOfTheGrid; j++){
            let newBlock = document.createElement("div");
            newBlock.classList.add("block");
            newLign.appendChild(newBlock);        
        }
    container.appendChild(newLign);
    }
    const blocks = document.querySelectorAll(".block")
    blocks.forEach(elem =>{
        elem.addEventListener('mouseenter', ()=>{
            if (darkening<1) {
                darkening += 0.1;
            };
            random1 = Math.round(Math.random()*255);
            random2 = Math.round(Math.random()*255);
            random3 = Math.round(Math.random()*255);
            elem.style.backgroundColor = `rgba(${random1},${random2},${random3},${darkening})`;
        });
        elem.addEventListener("mouseleave", ()=>{
            elem.style.backgroundColor = 'white';
        });
    });
}

const button = document.querySelector("button")
button.addEventListener("click", ()=> {
    darkening = 0
    const nodes = Array.from(container.childNodes)
    nodes.forEach(element => {
        element.remove();
    });
    let number = parseInt(prompt("What should be the size of the grid ?"))
    while (true){
        if (typeof(number)==="number" && number <= 100 && number >= 0){
            break;
        }
        else{
            let number = parseInt(prompt("Please enter a valid number below 100 !"));
        }
    }
    createLayout(number)
});


createLayout(16)