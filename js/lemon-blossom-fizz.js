const originalValues = {
    gin: 50,
    lemon: 30,
    cinnamon: 1,
    ginger: 2
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
        document.getElementById("gin").textContent = originalValues.gin + " ml Gin";
        document.getElementById("lemon").textContent = originalValues.lemon + " ml frischer Zitronensaft";
        document.getElementById("cinnamon").textContent = originalValues.cinnamon + " Zimtstange";
        document.getElementById("ginger").textContent = originalValues.ginger + " Scheibe kandierter Ingwer";
    } else {
        document.getElementById("gin").textContent = (originalValues.gin * portionen) + " ml Gin";
        document.getElementById("lemon").textContent = (originalValues.lemon * portionen) + " ml frischer Zitronensaft";
        document.getElementById("cinnamon").textContent = (originalValues.cinnamon * portionen) + " Zimtstangen";
        document.getElementById("ginger").textContent = (originalValues.ginger * portionen) + " Scheiben kandierter Ingwer";
    }
}
