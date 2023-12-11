import {
    InputGroup,

} from '@chakra-ui/react'

import '../../styles/inputFile.css'

interface InputFileProps {
    // eslint-disable-next-line no-unused-vars
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function inputFile(props: InputFileProps) {

    return (
        <InputGroup>
            <input
                type={'file'}
                data-testId='inputFile'
                multiple={false}
                accept={'csv'}
                onChange={(e) => props.handleOnChange(e)}
                            
            />
        </InputGroup>
    )
}
