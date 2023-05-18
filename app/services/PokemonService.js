import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokemonService {

  async setActivePokemon(url) {
    const res = await pokeApi.get('api/v2/pokemon' + url)
    
    console.log(res.data);
    AppState.activePokemon = new Pokemon(res.data)
  }
  async getPokemonFromPokeApi() {
      const res = await pokeApi.get('api/v2/pokemon')
      AppState.pokeDex = res.data.results

  }


}


export const pokemonService = new PokemonService()