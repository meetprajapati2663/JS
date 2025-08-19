// Q.1 Change the mode dark to white :- 


let btn1 = document.querySelector("#btn1");
let mode = "light-mode"

btn1.addEventListener("dblclick", () => {
    if (mode === "light-mode") {
        mode = "dark-mode";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        mode = "light-mode";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(mode);
})

