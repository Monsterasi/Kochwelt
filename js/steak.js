const originalValues = {
  steak: 200,
  olive_oil: 1,
  butter: 0.5,
  garlic: 1,
  rosemary: 1,
  asparagus: 125,
  olive_oil_asparagus: 1,
  butter_asparagus: 0.5,
  lemon_asparagus: 0.25,
  cherry_tomatos: 160,
  olive_oil_cherry: 1,
  balsamic_vinegar: 0.25,
};

function formatValue(value, unit) {
  if (value === 0.5) {
    return "1/2 " + unit;
  } else if (value === 0.25) {
    return "1/4 " + unit;
  } else {
    return value + " " + unit;
  }
}

function formatQuantity(quantity, singular, plural) {
  if (quantity === 1) {
    return singular;
  } else {
    return plural;
  }
}

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

  document.getElementById("steak").textContent = formatValue(
    originalValues.steak * portionen,
    "g Rindersteak"
  );
  document.getElementById("olive_oil").textContent = formatValue(
    originalValues.olive_oil * portionen,
    "TL Olivenöl"
  );
  document.getElementById("butter").textContent = formatValue(
    originalValues.butter * portionen,
    "EL Butter"
  );

  const garlicQuantity = originalValues.garlic * portionen;
  const rosemaryQuantity = originalValues.rosemary * portionen;
  document.getElementById("garlic").textContent =
    garlicQuantity +
    " " +
    formatQuantity(
      garlicQuantity,
      "Knoblauchzehe, angedrückt",
      "Knoblauchzehen, angedrückt"
    );
  document.getElementById("rosemary").textContent =
    rosemaryQuantity +
    " " +
    formatQuantity(
      rosemaryQuantity,
      "Zweig frischer Rosmarin",
      "Zweige frischer Rosmarin"
    );

  document.getElementById("asparagus").textContent = formatValue(
    originalValues.asparagus * portionen,
    "g grüner Spargel"
  );
  document.getElementById("olive_oil_asparagus").textContent = formatValue(
    originalValues.olive_oil_asparagus * portionen,
    "TL Olivenöl"
  );
  document.getElementById("butter_asparagus").textContent = formatValue(
    originalValues.butter_asparagus * portionen,
    "EL Butter"
  );
  document.getElementById("lemon_asparagus").textContent =
    "Saft von " +
    formatValue(originalValues.lemon_asparagus * portionen, "Zitronen");

  document.getElementById("cherry_tomatos").textContent = formatValue(
    originalValues.cherry_tomatos * portionen,
    "g Kirschtomaten"
  );
  document.getElementById("olive_oil_cherry").textContent = formatValue(
    originalValues.olive_oil_cherry * portionen,
    "TL Olivenöl"
  );
  document.getElementById("balsamic_vinegar").textContent = formatValue(
    originalValues.balsamic_vinegar * portionen,
    "TL Balsamico-Essig"
  );
}
