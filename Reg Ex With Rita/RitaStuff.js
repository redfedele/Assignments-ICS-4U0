

var ritaString;
var changeRitaString;
var posRita;


function makeRitaString() {
  ritaString = rhesusText.join("\n");
  changeRitaString = new RiString(ritaString);
  posRita = changeRitaString.pos();
  
}

function nounsPronounsAndVerbs() {
  var amountOfPronouns = 0;
  var amountOfVerbs = 0;
  var numberOfNouns = 0;

  for (var i = 0; i < posRita.length; i = i + 1) {
    if (posRita[i].charAt(0) === "p") {
      amountOfPronouns = amountOfPronouns + 1;
    }
    if (posRita[i].charAt(0) === "v") {
      amountOfVerbs = amountOfVerbs + 1;
    }
    if (posRita[i].charAt(0) === "n") {
      numberOfNouns = numberOfNouns + 1;
    }
  }
  text("The number of pronouns are: " + amountOfPronouns, width/2 -75, height/4 + 120);
  text("The number of verbs are: " + amountOfVerbs, width/2 -75, height/4 + 140);
  text("The number of nouns are: " + numberOfNouns, width/2 -75, height/4 + 160);
}