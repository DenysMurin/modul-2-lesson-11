const button2 = document.getElementById("btn2");

const colors = ["red", "blue", "green", "orange", "magenta", "cyan", "white" , 'yellow', 'brown', 'darkblue'];
let nextColor = 0;
function flashColors() {
    
  document.body.style.backgroundColor = colors[nextColor];
    // nextColor = (nextColor + 1) % colors.length; 
    ++nextColor;
 
}
 setInterval(flashColors, 2000);
button2.addEventListener("click", flashColors);


