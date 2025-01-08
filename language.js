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
  