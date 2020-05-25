//Code om te controleren of de gebruiker deze vraag al eerder heeft beantwoord
//controle wordt uitgevoerd door te kijken of de vorige website van het kwartje was of niet

if(document.referrer.indexOf(window.location.hostname)==-1) {
  //leeftijdcheck laten zien
  document.getElementById('leeftijd').style.display = 'block';
}

document.getElementById('test').onclick = function () {
  document.getElementById('leeftijd').style.display = 'block';
};
