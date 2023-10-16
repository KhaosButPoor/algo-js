let char = {
  name: 'John',
  santeMentale: 10
};
// ^Definition du personnage 'John' avec sa base de points mentale^
class Trajet {
  constructor() {
    this.radio = "éteinte";
    this.feuxRouges = 30;
    this.playlist = ["Anissa-Wejdene", "Cloned-Lukhash", "Paranoia-Kentenshi", "Forgiveness-Alice Glass", "Lost-CRIM3S"];
  }
// ^Création d'une classe 'Trajet' comprenant la playlist, les feux rouges et la mecanique de radio^

CompteSanteMentale() {
  console.log("Points de santé mentale de John: " + char.santeMentale);
}

passerFeuRouge() {
    console.log("Feux rouges restants: " + this.feuxRouges);
    
    if (this.radio === "Anissa-Wejdene") {
      char.santeMentale -= 1;
      console.log("John a perdu 1 point de santé mentale.");

      if (char.santeMentale <= 0) {
        console.log("Explosion");
        return;
      }
    }
// ^Implementation du mecanisme de retrait de santé mentale, et the retour si on a perdu tout ses points^
    this.radio = this.playlist[Math.floor(Math.random() * this.playlist.length)];

    console.log("Dernière musique écoutée: " + this.radio);

    this.feuxRouges--;
    this.CompteSanteMentale();
// ^Creation du randomizer anver un retour log de la musique jouée^
    if (this.feuxRouges > 0) {
      this.passerFeuRouge();
    } else {
      console.log("Arrivé ! Il a fallu " + (30 - this.feuxRouges) + " changements de taxi pour y arriver.");
    }
  }
}
// ^IfElse permettant de log l'arrivé sans perdre de santé mentale^
const trajet = new Trajet();
trajet.passerFeuRouge();