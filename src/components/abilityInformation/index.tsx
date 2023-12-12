/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/rules-of-hooks */
import {
    Badge
} from '@chakra-ui/react'


interface abilitiesInformation  {
    ability: string;
}
export default function abilityInformation(props: abilitiesInformation) {
    
    return (
        <Badge m={1} colorScheme="blue">
            {props.ability}
        </Badge>
    )
}