import { Grid, Text } from '@chakra-ui/react'

interface abilityHeaderInterface {
  pokemonName: string;
}

export default function abilityHeader(props: abilityHeaderInterface) {
    return (
        <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}  
            gap={6}
            alignItems="center"
            justifyItems="center"
            mt={10}
            mb={10}
        >
            <img
                data-testId="leftImage"
                src="https://archives.bulbagarden.net/media/upload/thumb/8/85/0025Pikachu-Starter.png/110px-0025Pikachu-Starter.png"
            />
            <div>
                <Text fontSize="xl" color="gray.600">
                    {' '}
          Pikachu brought some information about{' '}
                    <strong>{props.pokemonName}</strong> abilities.{' '}
                </Text>
                <br></br>
                <Text fontSize="md" style={{ marginTop: '-15px' }} color="gray">
                    {' '}
          The information was sorted alphabetically, from left to right{' '}
                </Text>
            </div>
            <img
                data-testId="rigthImage"
                src="https://archives.bulbagarden.net/media/upload/thumb/2/21/0025Pikachu-Original.png/110px-0025Pikachu-Original.png"
            />
        </Grid>
    )
}
