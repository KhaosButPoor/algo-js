// Creation de Jason avec une classe Tueur
class Tueur {
  constructor() { 
    this.name = "Jason"; 
    this.lifePoints = 100; // Ajout de 100 pv a Jason
  }


// Definition de a classe survivants
class survivants {
  constructor(name, characteristic) { 
    this.name = name; // Assigne un nom aux survivants
    this.characteristic = characteristic; // Assigne sa caracteristique (nerd, sportif...)
    this.isAlive = true; // Etat de depart des survivants 
  }

  attack(survivants) { 
    const random = Math.random(); // ajout d'un rng entre 0 et 1

    // ajout des probabilités
    if (random < 0.3) {
      survivants.dodge(); // si on obtient moins de 0.3, on va call la mecanique d'esquive
    } else if (random < 0.8) {
      survivants.inflictDamage(10); // si on obtient entre 0.3 et 0.8, on fait des degats
    } else {
      survivants.inflictDamage(15); // si on obtient plus de 0.8, on attaque mais on meurt
    }
  }

  dodge() { 
    console.log(`${this.name} a esquivé l'attaque de Jason!`); // Log d'esquive d'un survivant
  }

  inflictDamage(points) { 
    this.isAlive = true;
    console.log(`${this.name} a infligé ${points} points de dégats a Jason.`);
  }
}

const names = ["Ash", "Edd", "Joel", "Ben", "Emma"]; 
const characteristics = ["nerd", "sportif", "blonde", "goth", "geek"]; 

const survivants = []; // Creation d'un array vide pour mettre les objets des survivants

for (let i = 0; i < 5; i++) { // Genère 5 objets pour les survivants
  const name = names[Math.floor(Math.random() * names.length)]; // Choix du nom parmi la const
  const characteristic = characteristics[Math.floor(Math.random() * characteristics.length)]; // Choix d'une characteristique parmi la const
  survivants.push(new Survivants(name, characteristic)); // Cree un nouveau object survivant en mettant ces characteristiques et nom dans un array
}

const jason = new Tueur(); // 

while (jason.lifePoints > 0 && survivants.some(Survivants => Survivants.isAlive)) { // Boucle jusqu'a l'un des 2 camp meurt
  const targetIndex = Math.floor(Math.random() * Survivants.length); // Choix d'un index parmi l'array du survivant
  const target = Survivants[targetIndex]; // met l'objet survivant dans l'index choisi
  jason.attack(target); // 
}

console.log("Deaths:"); // Log de tout les morts a la fin
if (jason.lifePoints <= 0) { 
  console.log("Jason est mort!"); 
} else {
  Survivants.forEach(Survivants => { // Iterate over each survivor in the survivors array
    if (!Survivants.isAlive) { // si le survivant n'est pas vivant alors log
      console.log(`${Survivants.name} est mort.`); 
    }
  });
}
