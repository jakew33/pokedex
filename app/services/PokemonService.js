import { pokeApi } from "./AxiosService.js";
import { AppState } from "../AppState.js"

class PokemonService {
  async getPokemonFromPokeApi() {
      const res = await pokeApi.get('api/v2/pokemon')
      console.log('res', res.data.results);
      AppState.pokeDex = res.data.results

  }
  }


export const pokemonService = new PokemonService()