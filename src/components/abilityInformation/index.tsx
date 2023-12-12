import { Badge } from '@chakra-ui/react'

interface abilitiesInformation {
  ability: string;
}
export default function abilityInformation(props: abilitiesInformation) {
    return (
        <Badge
            m={1}
            p={3}
            borderRadius="lg"
            colorScheme="gray"
            variant={'solid'}
            role="status"
        >
            {props.ability}
        </Badge>
    )
}
