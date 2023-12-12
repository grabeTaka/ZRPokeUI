/* eslint-disable react-hooks/rules-of-hooks */
import { Grid } from '@chakra-ui/react'

import AbilityInformation from '../abilityInformation'
import AbilityHeader from '../abilityHeader'
import StartJorney from '../startJorney'
import PokemonNotFound from '../pokemonNotFound'
import { useListAbilities } from '../../hooks/useListPokemon/useListPokemon'

export default function abilitiesContainer() {
    const { abilities, search, emptySearch } = useListAbilities()

    if (emptySearch) {
        return <StartJorney />
    } else if (!emptySearch && !abilities) {
        return (
            <>
                <PokemonNotFound />
            </>
        )
    } else if (abilities.length > 0) {
        return (
            <>
                <AbilityHeader pokemonName={search} />

                <Grid
                    templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                    gap={6}
                    my={10}
                >
                    {abilities.map((ability, index) => (
                        <AbilityInformation ability={ability} key={index} />
                    ))}
                </Grid>
            </>
        )
    }

    return null
}
