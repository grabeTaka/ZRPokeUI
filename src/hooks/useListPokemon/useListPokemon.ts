/* eslint-disable import/no-unresolved */
import { useContext } from 'react'
import { PokemonContext } from 'context/pokemon/index'

export const useListAbilities = () => {
    const context = useContext(PokemonContext)
    if (!context) {
        throw new Error('You must use useListAbilities hook inside the useListAbilities')
    }

    return { abilities: context.abilities, search: context.search, emptySearch: context.emptySearch }
}