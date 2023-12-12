import { Text, Box } from '@chakra-ui/react'

export default function startJorney() {
    
    return (
        <Box mt={10} mb={10}>
            <img data-testId="logo" src="https://archives.bulbagarden.net/media/upload/thumb/b/b4/0025Pikachu-Cosplay.png/110px-0025Pikachu-Cosplay.png"></img>
            <Text mt={10} fontSize="xl" color="gray.600"> Pikachu is waiting for you to start your journey. </Text><br></br>
            <Text fontSize="md" style={{marginTop: '-15px'}} color="gray"> Insert de pokemon name in the input and click on search button, <strong>lets get them!</strong> </Text>
        </Box>
    )
}