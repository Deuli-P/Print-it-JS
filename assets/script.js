// -------------------------------- Variables ------------------------------------

const arrowRight = document.querySelector(`.arrow_right`);
const arrowLeft = document.querySelector('.arrow_left');
const dotContainer = document.querySelector(`.dots-container`);
const banner = document.getElementById(`banner`);
let bannerImg = document.getElementsByClassName('banner-img');


let slideIndex = 0;
let slideIndexPlus = slideIndex +1;
const slides = [
	{
		image:"../assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"../assets//images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"../assets//images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"../assets//images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slideTotal = slides.length;
let dots = document.getElementsByClassName('dot');
//----------------------------- FUNCTION -----------------------------

// ----------------INIT-----------
function init () {
	

	slides.forEach( (slide , index) => {	
		const originalIndex = index +1;
		// Creer chaque dot
		let newDot = document.createElement('div');
			// ajouter class
		newDot.classList.add('dot');
		// ajouter chaque dot a la fin de la div container
		dotContainer.appendChild(newDot);
		// Creer chaque image 
		let img = document.createElement('img');
			// ajouter class
		img.classList.add('banner-img');
			// hide l'image
		img.style.visibility= 'hidden'
			// ajouter l'id different pour chaque img 
		img.id = 'slide' + (originalIndex);
			// source de l'image depuis le tableau slides
		img.src = slide.image;
		img.alt = "Slide";
			// ajouter chaque image a la fin de la div banner
		banner.append(img);
	});
	createP ();
	show ()	
}
init();
// ------------------ Fleche ---------------------------
arrowRight.addEventListener('click',  () => slideAction(`right`));
arrowLeft.addEventListener('click',() =>  slideAction(`left`));



function slideAction(sens) {
 	bannerImg[slideIndex].style.visibility = 'hidden';			//  cache l'image selectionné
 	dots[slideIndex].classList.remove('dot_selected');		// supprime la qui donne le bg blanc du dot selectionné
		// Boucle infini 
	if ( sens = 'right') {
		if(slideIndex === slides.length -1){
			slideIndex = 0} 
		else { slideIndex++ }
	}
	else if (sens = 'left') {
		if(slideIndex === 0 ){
				 slideIndex = slides.length-1} 
	 	else { slideIndex--}
	}
	// affichage de l'image / text / dot avec le nouveau slideIndex
 	show ()
};

// -------------------- Create Paragraphe ---------------
function createP () {
	let description = document.createElement('p')
	description.innerHTML = slides[slideIndex].tagLine
	banner.append(description)
}
// ------------------Afficher element select ------------

function show () {
	let bannerText = document.querySelector('#banner p');
	bannerText.innerHTML = slides[slideIndex].tagLine;
	bannerImg[slideIndex].style.visibility = 'visible';
	dots[slideIndex].classList.add('dot_selected');
}