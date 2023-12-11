/* eslint-disable import/no-unresolved */
import React from 'react'
import { Box, Divider } from '@chakra-ui/react'

import UserProvider from 'context/user'

import CardContainer from 'components/cardContainer/index'
import ActionsData from 'components/actionsData'
import PageTitle from 'components/pageTitle'

const Home: React.FC = () => {
    return (
        <UserProvider>
            <center>
                <Box bg='white' w='95%' p={5} mt={10} justifyContent={'center'}>
                    <PageTitle/>
                    <ActionsData/>
                    <Divider/>
                    <CardContainer />
                </Box>
            </center>
                
        </UserProvider>
    )
}

export default Home
