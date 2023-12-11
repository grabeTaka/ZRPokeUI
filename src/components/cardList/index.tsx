/* eslint-disable react/jsx-key */
/* eslint-disable import/no-unresolved */
import React from 'react'
import {
    Card,
    CardBody,
    Text,
    Stack,
    SimpleGrid,
    Center,
    Flex,
    CardHeader,
    Divider,
    Box,
    useColorModeValue,
    Spinner
} from '@chakra-ui/react'

import { FaCity, FaFlag, FaBasketballBall, FaUserSlash } from 'react-icons/fa'
import { userType } from '../../@types/user'

interface CardListProps { 
    users: userType[];
    loading: boolean;
}
const CardList: React.FC<CardListProps> = (props) => {
    const textColor = useColorModeValue('gray.600', 'white')


    if (props.loading) {
        return <Spinner my={20} size="xl" data-testid='spinner'/>
    }
    
    if (props.users.length === 0) {
        return (
            <Box my='20' data-testid='nouser'>
                <div><FaUserSlash size={100} color={textColor}/></div>
                <Text fontSize="2xl" mt='10' color={textColor}>No users found</Text>
            </Box>
        )
    }
    
    return (
        <Center>
            <SimpleGrid columns={{ base: 1, lg: 4, xl: 6 }} spacing={{base: 5, md: 10, lg: 10}} justifyContent="space-between" mt={5} data-testid='withuser'>
                {props.users.map(user => (
                    <Card maxW='lg' my={10} boxShadow="lg" p="6" rounded="md" bg="white">
                        <CardHeader>
                            <Text fontSize="xl" fontWeight="bold" color="gray.700">
                                {user.name}
                            </Text>
                        </CardHeader>
                        <Divider color="gray.200"/>
                        <CardBody>
                            <Stack mt='6' spacing='3' align="start">
                                <Flex align="center">
                                    <FaCity />
                                    <Text ml={2} color="gray.600">
                                        City: {user.city}
                                    </Text>
                                </Flex>
                                <Flex align="center">
                                    <FaFlag />
                                    <Text ml={2} color="gray.600">
                                        Country: {user.city}
                                    </Text>
                                </Flex>
                                <Flex align="left">
                                    <FaBasketballBall />
                                    <Text ml={3} color="gray.600" textAlign={'left'}>
                                        Favorite Sport: {user.favoriteSport}
                                    </Text>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>   
                ))}
            </SimpleGrid>
        </Center>
    )
}

export default CardList
