const display = document.getElementById("display");
// const buttons=Array.from(document.querySelectorAll('.button'))
// const buttons=document.getElementsByClassName('button')
const buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);
buttons.map((e) => {
  e.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.innerText)
    // console.log(e.target.innerHTML)
    switch (e.target.innerHTML) {
      case "C":
        display.innerHTML = "";
        break;
      case "←":
        display.innerHTML = display.innerHTML.slice(0, -1);
      case "=":
        if (display.innerHTML) {
          try {
            display.innerHTML = eval(display.innerHTML);
          } catch {
            display.innerHTML = "Error!!!";
          }
        }
        break;
      default:
        display.innerHTML += e.target.innerHTML;
    }
  });
});
