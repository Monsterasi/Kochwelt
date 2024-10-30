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

   
    document.getElementById("butter").textContent = (125 * portionen) + "g " + "Butter ";    
    document.getElementById("eggs").textContent = (2 * portionen) + " Eier" ;    
    document.getElementById("baking-powder").textContent = (1 * portionen) +  " Pkg. " + " Backpulver";    
    document.getElementById("vanilla-sugar").textContent = (1 * portionen) +  " Pkg. " + " Vanillezucker";    
    document.getElementById("flower").textContent = (250 * portionen) +  "g " + "Mehl";  
    
    document.getElementById("blueberries").textContent = (800 * portionen) + "g " + "Heidelbeeren "; 
    
    document.getElementById("sugar-bottom").textContent = (125 * portionen) + "g " + "Zucker ";
    document.getElementById("butter-bottom").textContent = (125 * portionen) + "g " + "Butter ";
    document.getElementById("flower-bottom").textContent = (250 * portionen) +  "g " + "Mehl";
  
   
}

        