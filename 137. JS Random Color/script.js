var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button")[0];

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ '#'+Math.floor(Math.random()*16777215).toString(16)
	+ ", " 
	+ '#'+Math.floor(Math.random()*16777215).toString(16)
	+ ")";

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", randomGradient);