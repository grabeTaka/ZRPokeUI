/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../api/index'
import { pokemonServiceInterface } from './index.d'

class PokemonService implements pokemonServiceInterface {
    async byName(pokemonName: string) {

        try {
            const response = await api.get(`/pokemons/${pokemonName}`)
            return response.data
        } catch (error: any) {
            return {status: error.response.data.code, message: error.response.data.message}
        }
    }
}

const pokemonService = new PokemonService()
export default pokemonService
