/* eslint-disable import/no-unresolved */
import { useContext } from 'react'
import { PokemonContext } from 'context/pokemon/index'

export const useSearchPokemon = () => {
    const context = useContext(PokemonContext)
    if (!context) {
        throw new Error(
            'You must use userSearchPokemon hook inside the userSearchPokemonProvider'
        )
    }

    return {
        handleOnSubmit: context.handleOnSubmit,
        handleChangeInput: context.handleChangeInput,
    }
}
