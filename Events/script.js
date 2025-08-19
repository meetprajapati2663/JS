let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 Was Clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

//  object method :- 

// btn1.onclick = (e) => {
//     console.log(e);
// }

//  EventListner Method :- multiple uses 1. addevents

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked")
})
btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked  2times")
})

const times_3 = ()=>{
    console.log("btn1 was clicked  3times")
};
btn1.addEventListener("click",times_3);

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked  4times")
})

// remvovevent :- you first create variable and store after use removeevent method to pass of varible and delete.

btn1.removeEventListener("click", times_3);







let box = document.querySelector("div")

box.onmouseover = () =>{
    console.log("Hello Meet Prajapati.. ")
}
