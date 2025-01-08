let currentDescriptionIndex = -1;

const product2Descriptions = [
  { text: "Pressure sensors", x: "15%", y: "53%" }, // Position 1
  { text: "Temperature sensor", x: "35%", y: "45%" }, // Position 2
  { text: "Force sensor", x: "78%", y: "28%" }, // Position 3
  { text: "Integrated position sensor", x: "55%", y: "50%" }, // Position 4
  { text: "Compact electronic board", x: "20%", y: "75%", image: "images/compact_board.png" }, // Position 5
];

function displayDescriptions(index) {
  const descriptionBox = document.getElementById("description-box");

  if (!descriptionBox) return;

  // Effacer les descriptions précédentes
  descriptionBox.innerHTML = "";

  // Ajouter les descriptions jusqu'à l'index actuel
  for (let i = 0; i <= index; i++) {
    const desc = product2Descriptions[i];

    // Ajouter le texte
    const textElement = document.createElement("div");
    textElement.classList.add("description-text");
    textElement.style.left = desc.x;
    textElement.style.top = desc.y;
    textElement.textContent = desc.text;
    descriptionBox.appendChild(textElement);

    // Ajouter une image si nécessaire
    if (desc.image) {
      const imageElement = document.createElement("img");
      imageElement.src = desc.image;
      imageElement.alt = desc.text;
      imageElement.classList.add("description-image");
      imageElement.style.left = desc.x; 
      imageElement.style.top = desc.y;
      descriptionBox.appendChild(imageElement);
    }
  }
}

// Gestion des événements de défilement
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0 && currentDescriptionIndex < product2Descriptions.length - 1) {
    currentDescriptionIndex++;
    displayDescriptions(currentDescriptionIndex);
  } else if (event.deltaY < 0 && currentDescriptionIndex > 0) {
    currentDescriptionIndex--;
    displayDescriptions(currentDescriptionIndex);
  }
});
