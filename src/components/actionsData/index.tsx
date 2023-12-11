/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/rules-of-hooks */
import {
    Flex,
    Box
} from '@chakra-ui/react'

import SearchInput from '../searchInput/index'
import InputFileProps from '../inputFile/index'
import ButtonUpload from '../buttonUpload/index'

import { useImportFiles } from '../../hooks/useImportFiles/useImportFiles'

import '../../styles/inputFile.css'
import { useListUsers } from '../../hooks/useListUsers/useListUsers'

export default function withAction() {

    const {handleOnChange, handleOnSubmit, file, submitingCsv} = useImportFiles()
    const { handleChangeInput } = useListUsers()
    
    return (
        <Box width="100%" mb={10}>
            <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
                <Box flexBasis={{ base: '100%', md: '70%' }}>
                    <SearchInput handleChangeInput={handleChangeInput}/>
                </Box>
                <Box flexBasis={{ base: '100%', md: '15%' }} display="flex" justifyContent="flex-end">
                    <InputFileProps handleOnChange={handleOnChange}/>
                </Box>
                
                <Box flexBasis={{ base: '100%', md: '15%' }} display="flex" justifyContent={{ base: 'flex-start', md: 'flex-end' }}>
                    <ButtonUpload handleOnSubmit={handleOnSubmit} file={file} submitingCsv={submitingCsv}/>
                </Box>
            </Flex>
        </Box>
    )
}
