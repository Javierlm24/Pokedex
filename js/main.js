const arcanineButton = document.getElementById("arcanine");
const squirtButton = document.getElementById("squirt");
const butterButton = document.getElementById("butterfree");
const poliwirthButton = document.getElementById("poliwirth");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonName = document.getElementById("name-pokemon");
const pokemonType = document.getElementById("pokemon-type");
const pokemonNumero = document.getElementById("pokemonNumero");
const backButton = document.getElementById("back-button");
const pokemonAbility = document.getElementById("ability");
const pokemonHeight = document.getElementById("height");
const pokemonWeight = document.getElementById("weight");

let charizardPokemon = {
    image: "",
    name: "",
    type: "",
    number: "",
    ability: "",
    height: "",
    weight: ""
  };

arcanineButton.addEventListener("click", () => {
    charizardPokemon.image = pokemonImage.src;
    charizardPokemon.name = pokemonName.innerText;
    charizardPokemon.type = pokemonType.innerText;
    charizardPokemon.number = pokemonNumero.innerText;
    charizardPokemon.ability = pokemonAbility.innerText;
    charizardPokemon.height = pokemonHeight.innerText;
    charizardPokemon.weight = pokemonWeight.innerText;

    pokemonImage.src = "assets/image/arcanine.gif";
    pokemonName.innerText = "Arcanine";
    pokemonNumero.innerText = "0059";
    pokemonType.innerText = "FIRE";
    pokemonAbility.innerText = "INTIMIDATION";
    pokemonHeight.innerText = "1,9m";
    pokemonWeight.innerText = "155,0 kg"

    backButton.disabled = false;
  });
  
  squirtButton.addEventListener("click", () => {
    charizardPokemon.image = pokemonImage.src;
    charizardPokemon.name = pokemonName.innerText;
    charizardPokemon.type = pokemonType.innerText;
    charizardPokemon.number = pokemonNumero.innerText;
    charizardPokemon.ability = pokemonAbility.innerText;
    charizardPokemon.height = pokemonHeight.innerText;
    charizardPokemon.weight = pokemonWeight.innerText;

    pokemonImage.src = "assets/image/squirtle.gif" ;
    pokemonName.innerText = "Squirtle";
    pokemonNumero.innerText = '0007';
    pokemonType.innerText = "WATER";
    pokemonAbility.innerText = "TORRENT";
    pokemonHeight.innerText = "0,5 M";
    pokemonWeight.innerText = "9,0KG";

    backButton.disabled = false;
  });
  
  butterButton.addEventListener("click", () => {
    charizardPokemon.image = pokemonImage.src;
    charizardPokemon.name = pokemonName.innerText;
    charizardPokemon.type = pokemonType.innerText;
    charizardPokemon.number = pokemonNumero.innerText;
    charizardPokemon.ability = pokemonAbility.innerText;
    charizardPokemon.height = pokemonHeight.innerText;
    charizardPokemon.weight = pokemonWeight.innerText;

    pokemonImage.src = "assets/image/butterfly.gif";
    pokemonName.innerText = "Butterfree";
    pokemonNumero.innerText = '0012';
    pokemonType.innerText = "Bug/Fly";
    pokemonAbility.innerText = "COMPOUND EYE";
    pokemonHeight.innerText = "1,1 M";
    pokemonWeight.innerText = "32,0KG";

    backButton.disabled = false;
  });
  
  poliwirthButton.addEventListener("click", () => {
    charizardPokemon.image = pokemonImage.src;
    charizardPokemon.name = pokemonName.innerText;
    charizardPokemon.type = pokemonType.innerText;
    charizardPokemon.number = pokemonNumero.innerText;
    charizardPokemon.ability = pokemonAbility.innerText;
    charizardPokemon.height = pokemonHeight.innerText;
    charizardPokemon.weight = pokemonWeight.innerText;

    pokemonImage.src = "assets/image/poliwrite.gif";
    pokemonName.innerText = "Poliwhirl";
    pokemonNumero.innerText = '0061';
    pokemonType.innerText = "WATER";
    pokemonAbility.innerText = "HUMIDITY";
    pokemonHeight.innerText = "1,0 m";
    pokemonWeight.innerText = "20,0kg";

    backButton.disabled = false;
  });

  backButton.addEventListener("click", () => {
    pokemonImage.src = charizardPokemon.image;
    pokemonName.innerText = charizardPokemon.name;
    pokemonType.innerText = charizardPokemon.type;
    pokemonNumero.innerText = charizardPokemon.number;
    pokemonAbility.innerText = charizardPokemon.ability;
    pokemonHeight.innerText = charizardPokemon.height;
    pokemonWeight.innerText = charizardPokemon.weight;

    backButton.disabled = true;
});