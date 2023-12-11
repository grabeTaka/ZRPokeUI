/* eslint-disable import/no-unresolved */
import React from 'react'

import { InputGroup, Input, InputRightElement,} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

interface SearchInputProps { 
    // eslint-disable-next-line no-unused-vars
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput: React.FC<SearchInputProps> = (props) => {
    return (
        <InputGroup size={'lg'}>
            <InputRightElement pointerEvents='none'>
                <Search2Icon color='gray.700' />
            </InputRightElement>
            <Input type='text' placeholder='Search Users' onChange={props.handleChangeInput}/>
        </InputGroup>
    )
}

export default SearchInput
