const button = document.querySelector("#flip1");
const button1 = document.querySelector("#flip2");

button.addEventListener("click", flip);
button1.addEventListener("click", flip);

function flip(){
  document.body.classList.toggle("flip");
  }

