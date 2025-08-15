// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText  +  "MeetPrajapati"; 

let boxes = document.querySelectorAll(".box");

let idx = 1 ;
for (const div of boxes) {
// console.log(div.innerText);
div.innerText = `New  ${idx}`
idx++;
}
