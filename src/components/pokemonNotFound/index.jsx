import { Text, Box } from '@chakra-ui/react'

export default function pokemonNotFound() {
    
    return (
        <Box mt={10} mb={10}>
            <img data-testId='logo' src="https://archives.bulbagarden.net/media/upload/thumb/8/8c/0025Pikachu-Gigantamax.png/110px-0025Pikachu-Gigantamax.png"></img>
            <Text mt={10} fontSize="xl" color="gray.600"> Unfortunately we were unable to locate this pokemon in our national dex. </Text><br></br>
        </Box>
    )
}