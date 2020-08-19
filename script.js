var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.getElementById("color2");
var body = document.getElementsByTagName("body")[0];
var random = document.getElementById("random");
var style = window.getComputedStyle(document.body).getPropertyValue("background");

color1.value = "#008000";
color2.value = "#0000ff";
css.textContent = style + ";";

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input", setGradient);

function randomColorGenerator(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandom(){
	color1.value = randomColorGenerator();
	color2.value = randomColorGenerator();
	setGradient();
}

random.addEventListener("click", setRandom);