const button = document.getElementById("btn");



function colorChange() {
  btn.textContent = "Enjoy";
  const color = button.getAttribute("data-color");
  document.body.style.backgroundColor = color;
}
button.addEventListener("click", colorChange);


