// Récupérer le formulaire et le message
const paymentForm = document.getElementById('paymentForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Écoute l'événement "submit" sur le formulaire
paymentForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  // Vérifie la validité du formulaire (pattern, required, etc.)
  if (!paymentForm.checkValidity()) {
    paymentForm.reportValidity();
    return;
  }

  // Affiche un message de confirmation
  confirmationMessage.style.display = 'block';

  // Attend 5 secondes, puis redirige vers la page d'accueil
  setTimeout(() => {
    window.location.href = 'kalysta_new_version.html'; 
  }, 5000);
});
