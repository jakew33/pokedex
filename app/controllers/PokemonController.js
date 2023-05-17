import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";


function _drawPokeDex() {
  console.log('pokeDex', AppState.pokeDex);
  let template = ''
}


export class PokemonControler {
  constructor() {
    console.log('pokemans');
    AppState.on('pokeDex', _drawPokeDex)
    this.getPokemonFromPokeApi()
    }

  async getPokemonFromPokeApi(){
    try {
      await pokemonService.getPokemonFromPokeApi()
    } catch (error) {
      Pop.error(error)
    }
  }
}
