/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/rules-of-hooks */
import {
    Button

} from '@chakra-ui/react'
import { MdCloudUpload } from 'react-icons/md'

import '../../styles/inputFile.css'

interface ButtonUploadProps {
    handleOnSubmit: () => void;
    file: File | null | undefined;
    submitingCsv: boolean;
}

export default function buttonUpload(props: ButtonUploadProps) {
    return (
        <Button 
            isLoading={props.submitingCsv}
            leftIcon={<MdCloudUpload />} 
            bg={'#2d3446bb'} 
            color='white' 
            h={'3rem'}
            w={{base: '100%', md:'155px' }}
            variant='solid' 
            isDisabled={props.file ? false : true}
            justifyContent={{ base: 'flex-start', md: 'center' }}
            // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
            onClick={(_e) => {
                props.handleOnSubmit()
            }}>
            <span style={{marginLeft: '15px'}}> Upload </span>
        </Button>
    )
}
