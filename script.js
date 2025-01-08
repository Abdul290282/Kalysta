// Menu hamburger
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.getElementById("side-menu");

// Vidéo de fond
const backgroundVideo = document.getElementById("background-video");

// Ouvrir le menu
hamburgerBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

// Fermer le menu
closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

// Rediriger vers la page des produits
const productsLink = document.getElementById("products-link");
productsLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "products.html"; // Redirige vers la page products.html
});

// Répéter la vidéo automatiquement lorsqu'elle se termine
backgroundVideo.addEventListener("ended", () => {
  backgroundVideo.currentTime = 0; // Remet la vidéo au début
  backgroundVideo.play(); // Relance la vidéo
});
document.getElementById("language-dropdown").addEventListener("change", function () {
  const selectedLanguage = this.value;
  loadTranslations(selectedLanguage);
});

function loadTranslations(lang) {
  fetch(`translations-${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      // Traduire les éléments de navigation
      document.querySelector(".main-nav ul li:nth-child(1) a").textContent = translations.industries;
      document.querySelector(".main-nav ul li:nth-child(2) a").textContent = translations.applications;
      document.querySelector(".main-nav ul li:nth-child(3) a").textContent = translations.customerService;
      document.querySelector(".main-nav ul li:nth-child(4) a").textContent = translations.career;

      // Traduire le menu latéral
      const menuLinks = document.querySelectorAll(".menu-nav li a");
      menuLinks[0].textContent = translations.products;
      menuLinks[1].textContent = translations.solutions;
      menuLinks[2].textContent = translations.customerService;
      menuLinks[3].textContent = translations.trainingEducation;
      menuLinks[4].textContent = translations.newsMedia;
      menuLinks[5].textContent = translations.aboutKalysta;
      menuLinks[6].textContent = translations.career;
      menuLinks[7].textContent = translations.contact;

      // Traduire les icônes
      document.querySelector(".icon-action:nth-child(1) span").textContent = translations.search;

      // Gérer le sens RTL pour l'arabe
      if (lang === "ar") {
        document.body.style.direction = "rtl";
        document.body.style.textAlign = "right";
      } else {
        document.body.style.direction = "ltr";
        document.body.style.textAlign = "left";
      }
    })
    .catch((error) => console.error("Error loading translations:", error));
}

// Charger la langue par défaut
loadTranslations("en");
document.addEventListener("DOMContentLoaded", function() {
  let count = 0;
  const target = 2550;
  const speed = 10; // interval en millisecondes

  const peopleCountSpan = document.getElementById('peopleCount');

  // Incrémente toutes les "speed" millisecondes
  const timer = setInterval(() => {
    count++;
    peopleCountSpan.textContent = count;

    if (count >= target) {
      clearInterval(timer);
    }
  }, speed);
});
// Quand on clique sur "SEARCH", on toggle l'affichage du champ
const searchToggle = document.getElementById('search-toggle');
const searchBox = document.getElementById('search-box');

if (searchToggle) {
  searchToggle.addEventListener('click', (e) => {
    e.preventDefault();
    // Toggle display
    if (searchBox.style.display === 'none') {
      searchBox.style.display = 'flex'; // ou 'block'
    } else {
      searchBox.style.display = 'none';
    }
  });
}

// Dictionnaire : mot-clé -> fichier ou URL
const pages = {
  'products': 'products.html',
  'solutions': 'solutions.html',
  'the founders': 'thefounders.html',
  'news & media': 'https://www.lesechos.fr/idees-debats/sciences-prospective/des-robots-plus-legers-mais-plus-forts-1988964',
  'about kalysta': 'about.html',
  'career': 'career.html',
  'contact': 'contact.html',
  'industries': 'industries.html',
  'applications': 'applications.html'
};

// Fonction de recherche
function performSearch() {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  // Vérifie si l'entrée correspond exactement à une clé dans le dictionnaire
  if (pages[input]) {
    window.location.href = pages[input];
  } else {
    alert("No page found for: " + input + ".");
  }
}

// Quand on clique sur le bouton “Go”
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
  searchBtn.addEventListener('click', performSearch);
}

// (Optionnel) Si on veut valider en appuyant sur Enter 
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");
  if (audio) {
    audio.volume = 1; // Réduit le volume à 20%
  }
});
