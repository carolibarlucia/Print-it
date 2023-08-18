const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let nombre = slides.length;

let imgElement = document.getElementById("banner-image");
let baseurl = "./assets/images/slideshow/"; 

let textElement = document.getElementById("banner-tagline");

let index = 0


function next(){
if (index == nombre -1){
	index = 0
} else {
	index++
}
	imgElement.setAttribute("src", baseurl + slides[index].image)
	textElement.innerHTML = (slides[index].tagLine)
}

function previous(){
if (index ==0){
	index = nombre -1
} else {
	index--
}
	imgElement.setAttribute("src", baseurl + slides[index].image)
	textElement.innerHTML = (slides[index].tagLine)
}

let precedent = document.getElementById("left");
precedent.addEventListener("click", function() {
	
	console.log("clic sur précédent")
	previous()
});

let suivant = document.getElementById("right");
suivant.addEventListener("click", function() {

	console.log("clic sur >")
	next()
});
