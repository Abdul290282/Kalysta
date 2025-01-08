const descriptions = [
    "desc1",
    "desc2",
    "desc3",
    "desc4",
    "desc5",
    "desc6"
  ];
  
  let currentIndex = -1; // Index de description affichée
  
  function showNextDescription() {
    if (currentIndex < descriptions.length - 1) {
      currentIndex++;
      const descElement = document.getElementById(descriptions[currentIndex]);
      descElement.style.display = "flex"; // Afficher la description
    }
  }
  
  function removeLastDescription() {
    if (currentIndex >= 0) {
      const descElement = document.getElementById(descriptions[currentIndex]);
      descElement.style.display = "none"; // Cacher la description
      currentIndex--;
    }
  }
  
  // Gestion des événements de défilement
  window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      // Défilement vers le bas
      showNextDescription();
    } else if (event.deltaY < 0) {
      // Défilement vers le haut
      removeLastDescription();
    }
  });
  