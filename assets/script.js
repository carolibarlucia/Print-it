const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"bulletPoint":""
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"bulletPoint":""
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"bulletPoint":""
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"bulletPoint":""
	}
]

let nombre = slides.length;

let imgElement = document.getElementById("banner-image");
let baseurl = "./assets/images/slideshow/"; 

let textElement = document.getElementById("banner-tagline");

let index = 0

function bulletDot(){
	for (let i=0; i<slides.length; i++){
		let ElementDot = document.createElement("span");
		let bulletParent = document.getElementsByClassName("dots")[0]
		bulletParent.appendChild(ElementDot)
	
	}
}
bulletDot()


let ElementDot2 = document.querySelectorAll(".dots span")
for (let index=0; index < ElementDot2.length; index++){
	ElementDot2[index].classList = ("dot")
	ElementDot2[0].classList.add("dot_selected")
}	
console.log(ElementDot2)

function nextPreviousDot(){
	if ((ElementDot2[index]).classList = ("dot_selected")){
		ElementDot2[index].classList.remove("dot_selected")
		ElementDot2[index].classList.add("dot")
}
}

function next(){
if (index == nombre -1){
	index = 0
} else {
	index++
}
	imgElement.setAttribute("src", baseurl + slides[index].image)
	textElement.innerHTML = (slides[index].tagLine)
	ElementDot2[index].classList.add("dot_selected")
}

function previous(){
if (index ==0){
	index = nombre -1
} else {
	index--
}
	imgElement.setAttribute("src", baseurl + slides[index].image)
	textElement.innerHTML = (slides[index].tagLine)
	ElementDot2[index].classList.add("dot_selected")
}

let precedent = document.getElementById("left");
precedent.addEventListener("click", function() {
	console.log("clic sur précédent")
	nextPreviousDot()
	previous()
});

let suivant = document.getElementById("right");
suivant.addEventListener("click", function() {
	console.log("clic sur >")
	nextPreviousDot()
	next()
});
