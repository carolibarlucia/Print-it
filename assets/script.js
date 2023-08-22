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

// let newSlides = slides.map(slides => slides.bulletPoint)
// console.log(newSlides)

// let bulletElement = document.createElement("p")
// bulletElement.innerText = slides[0].bulletPoint + slides[1].bulletPoint + slides[2].bulletPoint + slides[3].bulletPoint
// let bulletParent = document.querySelector("points")
// bulletParent.appendChild(bulletElement)
// // bulletElement.classList = ("dot")

// // console.log(newSlides)

let imgElement = document.getElementById("banner-image");
let baseurl = "./assets/images/slideshow/"; 

let textElement = document.getElementById("banner-tagline");

let index = 0

function bulletDot(){
	for (let i=0; i<slides.length; i++){
		let ElementDot = document.createElement("span");
		ElementDot.classList.add("dot")
		if(i==0){
			ElementDot.classList.add("dot_selected")
		}
		let bulletParent = document.getElementsByClassName("dots")[0]
		console.log(bulletParent)
		bulletParent.appendChild(ElementDot)
	console.log(ElementDot)
	}
}

bulletDot()

function next(){
if (index == nombre -1){
	index = 0
} else {
	index++
}
	imgElement.setAttribute("src", baseurl + slides[index].image)
	textElement.innerHTML = (slides[index].tagLine)
	
	
	// bulletElement.classList.add("dot_selected")
}

function previous(){
if (index ==0){
	index = nombre -1
} else {
	index--
}
	imgElement.setAttribute("src", baseurl + slides[index].image)
	textElement.innerHTML = (slides[index].tagLine)
	// bulletElement = (slides[index].bulletPoint)
	// bulletElement.classList.add("dot_selected")
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
