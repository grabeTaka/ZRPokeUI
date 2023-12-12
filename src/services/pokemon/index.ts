import api from '../api/index'
import { pokemonServiceInterface } from './index.d'

class PokemonService implements pokemonServiceInterface {
    async byName(pokemonName: string) {

        try {
            const response = await api.get(`/pokemons/${pokemonName}`)
            console.info(response)
            return response.data
        } catch (error: any) {
            console.info(error.response)
            return {status: error.response.data.code, message: error.response.data.message}
        }
    }
}

const pokemonService = new PokemonService()
export default pokemonService
