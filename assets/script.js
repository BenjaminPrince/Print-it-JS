// Définition des diapositives (slides) pour le carrousel
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
];

// Récupération des éléments HTML importants
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Variable pour suivre l'indice de la diapositive actuelle
let currentSlide = 0;

// Fonction pour mettre à jour l'affichage de la diapositive
function updateSlide() {
  // Mettre à jour l'image de la diapositive et le texte
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  bannerText.innerHTML = slides[currentSlide].tagLine;

  // Mettre à jour la classe des points (dots)
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('dot_selected');
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    }
  });
}

// Écouter le clic sur la flèche gauche
arrowLeft.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    // Si on est sur la première diapositive et on clique à gauche, revenir à la dernière diapositive
    currentSlide = slides.length - 1;
  }
  updateSlide();
});

// Écouter le clic sur la flèche droite
arrowRight.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    // Si on est sur la dernière diapositive et on clique à droite, revenir à la première diapositive
    currentSlide = 0;
  }
  updateSlide();
});

// Créer dynamiquement les bullet points (dots) pour chaque diapositive
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('span');
  dot.className = 'dot';
  if (i === currentSlide) {
    dot.classList.add('dot_selected'); // Marquer la diapositive actuelle
  }
  // Écouter le clic sur le point pour passer à la diapositive correspondante
  dot.addEventListener('click', () => {
    currentSlide = i;
    updateSlide();
  });
  dotsContainer.appendChild(dot); // Ajouter le point au conteneur
}

// Mettre à jour l'affichage de la première diapositive au chargement de la page
updateSlide();
