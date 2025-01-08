// Liste des descriptions pour le produit
const productDescriptions = [
    { id: "desc1", text: "Easy prototyping of mechatronic application from hydraulic generation to servovalve control layer and the instrumented hydraulic cylinder level.", x: "35%", y: "10%" },
    { id: "desc2", text: "User-friendly G.U.I. to visualize the system’s performance characteristics data and curves", x: "60%", y: "30%" },
    { id: "desc3", text: "ROS 2 compatible", x: "30%", y: "70%" },
    { id: "desc4", text: "EtherCAT", x: "70%", y: "80%" }
  ];
  
  let currentDescriptionIndex = -1; // Index de description actif
  
  // Fonction pour afficher la prochaine description
  function showNextDescription() {
    if (currentDescriptionIndex < productDescriptions.length - 1) {
      currentDescriptionIndex++;
      const description = productDescriptions[currentDescriptionIndex];
  
      const descriptionBox = document.getElementById("description-box");
  
      // Crée un élément de texte
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
  
  // Initialisation
  document.addEventListener("DOMContentLoaded", () => {
    const descriptionBox = document.getElementById("description-box");
    if (!descriptionBox) {
      console.error("Element with id 'description-box' not found");
    }
  });
  