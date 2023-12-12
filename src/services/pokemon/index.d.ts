/* eslint-disable no-unused-vars */
export interface pokemonServiceInterface {
    byName(pokemonName: string): Promise<{abilities: string[] | {status: string, message: string}}>
}