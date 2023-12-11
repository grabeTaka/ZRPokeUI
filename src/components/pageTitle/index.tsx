import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'

export default function pageTitle() {    
    return (
        <Box mb={10} mt={5} textAlign={'left'}>
            <Heading size="lg" mb={2} color={'gray.700'}>Users informations</Heading>
            <Text fontSize='lg' color={'gray.600'}>Upload and search users in database</Text>
        </Box>
    )
}
