const container = document.querySelector("#container");

for(i=1;i<=256;i++){
    const divs = document.createElement("div");
    container.appendChild(divs);
    //divs.textContent = ("hello");
    divs.style.border = "solid black";
    divs.style.height = "3rem";
    divs.style.width = "3rem";
}

