import React from 'react'
import { InputGroup, Input} from '@chakra-ui/react'

interface SearchInputProps { 
    // eslint-disable-next-line no-unused-vars
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput: React.FC<SearchInputProps> = (props) => {
    return (
        <InputGroup size={'lg'}>
            <Input type='text' placeholder='Search Pokemon' onChange={props.handleChangeInput}/>
        </InputGroup>
    )
}

export default SearchInput
