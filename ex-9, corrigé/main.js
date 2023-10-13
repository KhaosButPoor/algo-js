class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    return Math.floor(Math.random() * 100) <= this.luck;
  }

  attackPokemon(pokemon) {
    if (this.isLucky()) {
      let damages = this.attack - pokemon.defense;
      pokemon.hp -= damages;
      console.log(`${this.name} attacked ${pokemon.name}, losing ${damages} hp !`);
    } else {
      console.log(`${this.name} Missed, L !`);
    }
  }
}

// FIN DE LA CLASSE POKEMON

let Kingambit = new Pokemon('Kingambit', 135, 120, 100, 30);
let Moltres = new Pokemon('Moltres', 85, 90, 100, 70);

Kingambit.attackPokemon(Moltres);

while (Kingambit.hp > 0 && Moltres.hp > 0) {
  Kingambit.attackPokemon(Moltres);


if (Kingambit.hp <= 0) {
  console.log('Kingambit fainted, skill issue tbh');
  break;
}

Moltres.attackPokemon(Kingambit);

if (Moltres.hp <= 0) {
  console.log('Moltres fainted, skill issue tbh');
  break;
 }
}
console.log('End of simulation.');