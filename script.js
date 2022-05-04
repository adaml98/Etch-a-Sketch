const container = document.querySelector("#container");

for(i=1;i<=256;i++){
    const div = document.createElement("div");
    container.appendChild(div);
    //divs.textContent = ("hello");
    //div.style.border = "solid black";
    div.style.height = "50px";
    div.style.width = "50px";
    div.addEventListener("mouseover",() =>{
        div.style.backgroundColor = "grey";
    });
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "black";
    });
};
