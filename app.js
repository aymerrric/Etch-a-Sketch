const container = document.querySelector("#container");

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
}

const button = document.querySelector("button")
button.addEventListener("click", ()=> {
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
            let number = parseInt(prompt("Please enter a valid number below 100 !"))
        }
    }
    createLayout(number)
})


createLayout(16)