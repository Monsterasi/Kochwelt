const originalValues = {
  tofu: 200,
  cashew_butter: 30,
  lime: 1,
  cashew: 330,
  leek: 1,
  pepper: 1,
  spring_onion: 1,
  mie_noodles: 130,
  sesame_oil: 2,
  soy_sauce: 2,
  rice_vinegar: 1,
  garlic: 1,
};

function formatValue(value, unit) {
  return value + " " + unit;
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

  document.getElementById("tofu").textContent = formatValue(
    originalValues.tofu * portionen,
    "g Tofu Natur"
  );
  document.getElementById("cashew-butter").textContent = formatValue(
    originalValues.cashew_butter * portionen,
    "g Cashewmus"
  );
  document.getElementById("lime").textContent =
    originalValues.lime * portionen +
    " " +
    formatQuantity(portionen, "Limette", "Limetten");
  document.getElementById("cashew").textContent = formatValue(
    originalValues.cashew * portionen,
    "g Cashewkerne - ungesalzen"
  );

  document.getElementById("leek").textContent =
    originalValues.leek * portionen +
    " " +
    formatQuantity(portionen, "Stange Porree", "Stangen Porree");
  document.getElementById("pepper").textContent =
    originalValues.pepper * portionen +
    " " +
    formatQuantity(portionen, "rote Paprika", "rote Paprikas");
  document.getElementById("spring-onion").textContent =
    originalValues.spring_onion * portionen +
    " " +
    formatQuantity(portionen, "Frühlingszwiebel", "Frühlingszwiebeln");
  document.getElementById("mie-noodles").textContent = formatValue(
    originalValues.mie_noodles * portionen,
    "g Mie-Nudeln"
  );

  document.getElementById("sesame-oil").textContent = formatValue(
    originalValues.sesame_oil * portionen,
    "EL Sesamöl, geröstet"
  );
  document.getElementById("soy-sauce").textContent = formatValue(
    originalValues.soy_sauce * portionen,
    "EL Sojasauce"
  );
  document.getElementById("rice-vinegar").textContent = formatValue(
    originalValues.rice_vinegar * portionen,
    "EL Reisessig"
  );
  document.getElementById("garlic").textContent =
    originalValues.garlic * portionen +
    " " +
    formatQuantity(portionen, "Knoblauchzehe", "Knoblauchzehen");
}
