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
      console.log(`${this.name} a raté son attaque !`);
    }
  }
}

// FIN DE LA CLASSE POKEMON

let Kingambit = new Pokemon('Kingambit', 135, 120, 100, 30);
let Moltres = new Pokemon('Moltres', 85, 90, 100, 70);

Kingambit.attackPokemon(Moltres);

if (pokemon.hp >= 0) {
  Kingambit.attackPokemon(Moltres);
} else {
  console.log(`${this.name} has fainted !`);
}