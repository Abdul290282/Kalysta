// Liste des descriptions pour le produit
const productDescriptions = [
    { id: "desc1", text: "Custom BLDC motor", x: "55%", y: "23%" },
    { id: "desc2", text: "Miniature axial pump", x: "68%", y: "24%" },
    { id: "desc3", text: "Integrated oil jacket", x: "65%", y: "55%" },
    { id: "desc4", text: "Oil Input/Output", x: "23%", y: "60%" },
  ];
  
  let currentDescriptionIndex = -1; // Index de la description active
  
  // Fonction pour afficher une description
  function showNextDescription() {
    if (currentDescriptionIndex < productDescriptions.length - 1) {
      currentDescriptionIndex++;
      const description = productDescriptions[currentDescriptionIndex];
  
      const descriptionBox = document.getElementById("description-box");
  
      // Créez l'élément texte
      const textElement = document.createElement("p");
      textElement.textContent = description.text;
      textElement.classList.add("description-text");
      textElement.style.left = description.x;
      textElement.style.top = description.y;
      textElement.id = description.id;
  
      descriptionBox.appendChild(textElement);
    }
  }
  
  // Fonction pour cacher la dernière description
  function hideLastDescription() {
    if (currentDescriptionIndex >= 0) {
      const description = productDescriptions[currentDescriptionIndex];
      const descElement = document.getElementById(description.id);
  
      if (descElement) {
        descElement.remove(); // Supprime l'élément de la description
      }
      currentDescriptionIndex--;
    }
  }
  
  // Gestion des événements de défilement
  window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      // Défilement vers le bas
      showNextDescription();
    } else if (event.deltaY < 0) {
      // Défilement vers le haut
      hideLastDescription();
    }
  });
  
  // Initialisation de la description-box au chargement
  document.addEventListener("DOMContentLoaded", () => {
    const descriptionBox = document.getElementById("description-box");
    if (!descriptionBox) {
      console.error("Element with id 'description-box' not found");
    }
  });
  