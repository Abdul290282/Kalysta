window.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieAccept = document.getElementById("cookie-accept");
    const cookieRefuse = document.getElementById("cookie-refuse");
  
    // Au clic sur "Accept"
    cookieAccept.addEventListener("click", () => {
      // Cache la bannière
      cookieBanner.style.display = "none";
      // Tu peux mettre du code ici pour stocker le choix dans localStorage, par ex.
      // localStorage.setItem('cookieChoice', 'accepted');
    });
  });
// Au chargement
const userChoice = localStorage.getItem('cookieChoice');
if (userChoice === 'accepted' || userChoice === 'refused') {
  cookieBanner.style.display = 'none';
}

// Au clic sur "Accept"
cookieAccept.addEventListener("click", () => {
  localStorage.setItem('cookieChoice', 'accepted');
  cookieBanner.style.display = "none";
});

// Au clic sur "Refuse"
cookieRefuse.addEventListener("click", () => {
  localStorage.setItem('cookieChoice', 'refused');
  cookieBanner.style.display = "none";
});









