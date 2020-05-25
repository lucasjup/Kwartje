
var verificatie;

var x = document.getElementById('leeftijd');

  if(verificatie > 0) {
    //leeftijdcheck niet laten zien
    x.style.display = 'none';
  } else {
    //leeftijdcheck laten zien
    x.style.display = 'block';
  }

// Verbergt de leeftijd verificatie
function hideCheck() {
  verificatie + 1;
  return;
}

//Code om te controleren of de gebruiker deze vraag al eerder heeft beantwoord
