/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Flex } from '@chakra-ui/react'

export default function navigationBar() {
    return (
        <>
            <Box
                bg={'#ef5350'}
                px={4}
                p={2}
                style={{ boxShadow: '0px 10px 5px -7px rgba(0,0,0,0.75)' }}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'center'}>
                    <img
                        src="https://assets-global.website-files.com/63d2978de907ee09794c3999/6434448b2675f35f85ae53cd_logo-p-500.png"
                        style={{ width: '100px', backgroundColor: 'white', padding: '15px', borderRadius: '20px' }}
                        data-testid="logo"
                    />
                </Flex>
            </Box>
        </>
    )
}
