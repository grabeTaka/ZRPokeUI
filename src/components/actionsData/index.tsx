/* eslint-disable react-hooks/rules-of-hooks */
import { Flex, Box } from '@chakra-ui/react'

import SearchInput from '../searchInput/index'
import ButtonSearch from '../buttonSearch/index'

import { useSearchPokemon } from '../../hooks/useSearchPokemon/useSearchPokemon'

export default function headerAction() {
    const { handleChangeInput, handleOnSubmit, loading } = useSearchPokemon()

    return (
        <Box width="100%" mb={10}>
            <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
                <Box flexBasis={{ base: '100%', md: '70%' }}>
                    <SearchInput handleChangeInput={handleChangeInput} />
                </Box>
                <Box
                    flexBasis={{ base: '100%', md: '30%' }}
                    display="flex"
                    justifyContent="flex-end"
                >
                    <ButtonSearch handleOnSubmit={handleOnSubmit} loading={loading} />
                </Box>
            </Flex>
        </Box>
    )
}
