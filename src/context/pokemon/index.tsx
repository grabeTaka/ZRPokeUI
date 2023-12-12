/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react'
import { importFilesContextProps } from './index.d'
import { PokemonContextType } from '../../@types/pokemonContext'
import { useToast } from '@chakra-ui/react'
import pokemonService from 'services/pokemon'
import debounce from 'lodash.debounce'

export const PokemonContext = React.createContext<PokemonContextType | null>(null)

const PokemonProvider: React.FC<importFilesContextProps> = ({ children }) => {
    const [search, setSearch] = useState('')
    const [emptySearch, setEmptySearch] = useState(true)
    const [abilities, setAbilities] = React.useState<string[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)

    const toast = useToast()

    const handleOnSubmit = async () => {

        if (!search.trim()) {
            setAbilities([])
            setEmptySearch(true)
            toast({
                title: 'Ops something went wrong!',
                description: 'Please select a pokemon',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
            return
        }
        setEmptySearch(false)
        setLoading(true)
        try {
            const result = await pokemonService.byName(search)
            setAbilities(result.abilities)
        } catch (error) { 
            console.info(error)
        } finally {
            setLoading(false)
        }
    }

    const setInputVariable = (pokemon: string) => {
        setSearch(pokemon)
        setAbilities([])
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSave = useCallback(
        debounce(pokemon => setInputVariable(pokemon), 500),
        [],
    )

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSave(e.target.value)
    }


    return (
        <PokemonContext.Provider value={{ handleOnSubmit, handleChangeInput, abilities, loading, search, emptySearch }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider
