/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    Flex,
} from '@chakra-ui/react'

export default function withAction() {
    return (
        <>
            <Box bg={'#2D3446'} px={4} p={5} style={{boxShadow: '0px 10px 5px -7px rgba(0,0,0,0.75)'}}>
                <Flex h={16} alignItems={'center'} justifyContent={'center'}>
                    <img src='https://shawandpartners.com/images/logo.png' style={{width: '400px'}} data-testid='logo'/>
                </Flex>
            </Box>
        </>
    )
}
