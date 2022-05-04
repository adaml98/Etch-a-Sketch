const container = document.querySelector("#container");
let gridSize = 256;
let squares = 16;


for(i=1;i<=gridSize;i++){
    const div = document.createElement("div");
    container.appendChild(div);
    let height = 800/squares;
    let width = 800/squares;
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.addEventListener("mouseover", () =>{
        div.style.backgroundColor = "grey";
    });
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "black";
    });
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", numberSquares);

function numberSquares(){
    let squares = prompt("Number of squares per side");
    gridSize = squares * squares;
    console.log(gridSize);
    if(squares<1 || squares>100){
        alert("Value must be bigger than 0 and smaller than 100")
    }else{
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        for (i = 1; i <= gridSize; i++) {
            const div = document.createElement("div");
            container.appendChild(div);
            let height = 800 / squares;
            let width = 800 / squares;
            div.style.height = height + "px";
            div.style.width = width + "px";
            //div.style.height = "50px";
            //div.style.width = "50px";
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "grey";
            });
            div.addEventListener("mouseout", () => {
                div.style.backgroundColor = "black";
            });
        };
    }
}
