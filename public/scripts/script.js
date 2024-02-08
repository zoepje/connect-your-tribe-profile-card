const button = document.querySelector("#flip1"),
      button1 = document.querySelector("#flip2"),
      body = document.querySelector("body");

button.addEventListener("click", flip);
button1.addEventListener("click", flip);

function flip(){
  body.classList.toggle("flip");
}

