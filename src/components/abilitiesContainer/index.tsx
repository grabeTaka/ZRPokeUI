/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box
} from '@chakra-ui/react'

import AbilityInformation from '../abilityInformation'
import { useListAbilities } from '../../hooks/useListPokemon/useListPokemon'

export default function abilitiesContainer() {
    const { abilities } = useListAbilities()
    
    return (
        <Box>
            {abilities.map((ability, index) => (
                <AbilityInformation ability={ability} key={index}/>
            ))}
        </Box>
    )
}