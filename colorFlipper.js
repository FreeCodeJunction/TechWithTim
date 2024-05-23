 const allButtons = document.querySelectorAll("button");
const body = document.querySelector("body")

 allButtons.forEach ((btn) => {
  btn.addEventListener("click", changeColorBYId);
})

function changeColorBYId(el) {
  const btnId = el.target.id;
  if (btnId === "green" || btnId === "red" || btnId === "blue") {
    body.style.backgroundColor = btnId;
  } else if (btnId === "random") {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`

    body.style.backgroundColor = color;
    document.querySelector("#random").style.backgroundColor = color;
    
  }
}