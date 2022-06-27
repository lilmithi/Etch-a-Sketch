let mybutton1 = document.getElementById("mybutton");
let container = document.getElementById("container");
mybutton1.addEventListener("click", appendElements, { once: true });

function selection() {
  let myinput = +document.getElementById("input1").value;
  return myinput;
}
function appendElements() {
  const myselsection = selection();
  // console.log(myselsection)
  for (let i = 0; i < myselsection * myselsection; i++) {
    var div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
    console.log(container.childElementCount);
  }
}
