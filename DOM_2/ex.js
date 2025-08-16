let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "Click me !";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body = document.querySelector("body");
body.prepend(newBtn);


// Q.2

let para = document.querySelector("p");
para.getAttribute("class")
// para.setAttribute("class", "newPara") setatt is not good because its remove first class propeties.
para.classList.add("newPara"); //  claslist . add helps new class to add.