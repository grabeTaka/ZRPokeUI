/* eslint-disable import/no-unresolved */
import React from 'react'
import { Box, Divider } from '@chakra-ui/react'

import PokemonProvider from 'context/pokemon'
import ActionsData from 'components/actionsData'
import PageTitle from 'components/pageTitle'
import AbilitiesContainer from 'components/abilitiesContainer'

const Home: React.FC = () => {
    return (
        <PokemonProvider>
            <center>
                <Box bg='white' w='95%' p={5} mt={10} justifyContent={'center'}>
                    <PageTitle/>
                    <ActionsData/>
                    <Divider/>
                    <AbilitiesContainer/>
                </Box>
            </center>
                
        </PokemonProvider>
    )
}

export default Home
