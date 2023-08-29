const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// déclaration image et tagline en fonction du tableau
let nombre = slides.length;

let imgElement = document.getElementById("banner-image");
let baseurl = "./assets/images/slideshow/";

let textElement = document.getElementById("banner-tagline");

let index = 0

// Création des points
function bulletDot() {
	for (let i = 0; i < slides.length; i++) {
		let ElementDot = document.createElement("span");
		let bulletParent = document.getElementsByClassName("dots")[0]
		bulletParent.appendChild(ElementDot)

	}
}
bulletDot()

// ajout class dot_selected au 1er point
let ElementDot2 = document.querySelectorAll(".dots span")

for (let index = 0; index < ElementDot2.length; index++) {
	ElementDot2[index].classList = ("dot")
	ElementDot2[0].classList.add("dot_selected")
	ElementDot2[index].onclick = function (e) {
		setSlide(index)
	}
}

// suppression de la class dot_selected quand on sélectionne un autre point
function removeDot() {
	let dotSelected = document.querySelector(".dot_selected")
	console.log(dotSelected)
	dotSelected.classList.remove("dot_selected")
}

// clic sur flèche "suivant"
function next() {
	if (index == nombre - 1) {
		index = 0
	} else {
		index++
	}
	setSlide(index)
}

// clic sur flèche "précédent"
function previous() {
	if (index == 0) {
		index = nombre - 1
	} else {
		index--
	}
	setSlide(index)
}

// affichage image-tagline-point en fonction de l'index
function setSlide(index) {
	removeDot()
	imgElement.setAttribute("src", baseurl + slides[index].image)
	textElement.innerHTML = (slides[index].tagLine)
	ElementDot2[index].classList.add("dot_selected")
}

// ajout eventlisteners sur flèches droite et gauche
let precedent = document.getElementById("left");
precedent.addEventListener("click", function () {
	previous()
});

let suivant = document.getElementById("right");
suivant.addEventListener("click", function () {
	next()
});
