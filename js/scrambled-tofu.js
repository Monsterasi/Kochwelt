const originalValues = {
  tofu: 400,
  onion: 1,
  garlic: 1,
  soy: 300,
};

function anpassen() {
  const portionenInput = document.getElementById("portionen");
  const errorMessage = document.getElementById("error-message");

  let portionen = parseInt(portionenInput.value);

  if (portionen < 1 || portionen > 5 || isNaN(portionen)) {
    errorMessage.style.display = "block";
    portionenInput.value = 1;
    return;
  } else {
    errorMessage.style.display = "none";
  }

  if (portionen === 1) {
    document.getElementById("tofu").textContent =
      originalValues.tofu + "g Tofu Natur";
    document.getElementById("onion").textContent =
      originalValues.onion + " Zwiebel";
    document.getElementById("garlic").textContent =
      originalValues.garlic + " Knoblauchzehe";
    document.getElementById("soy").textContent =
      originalValues.soy + "g Soja-Joghurt";
  } else {
    document.getElementById("tofu").textContent =
      originalValues.tofu * portionen + "g Tofu Natur";
    document.getElementById("onion").textContent =
      originalValues.onion * portionen + " Zwiebeln";
    document.getElementById("garlic").textContent =
      originalValues.garlic * portionen + " Knoblauchzehen";
    document.getElementById("soy").textContent =
      originalValues.soy * portionen + "g Soja-Joghurt";
  }
}
