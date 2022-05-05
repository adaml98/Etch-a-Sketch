
function createGrid(){
    for (i = 1; i <= gridSize; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        let side = 800 / squares;
        div.style.height = side + "px";
        div.style.width = side + "px";
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "grey";
        });
        div.addEventListener("mouseout", () => {
            div.style.backgroundColor = "black";
        });
    };
};


function numberSquares(){
    squares = prompt("Number of squares per side");
    gridSize = squares * squares;
    if(squares<1 || squares>100){
        alert("Must be between 1 and 100")
    }else{
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        createGrid();
    }
}

let gridSize = 256;
let squares = 16;

const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
btn.addEventListener("click", numberSquares);

createGrid();

