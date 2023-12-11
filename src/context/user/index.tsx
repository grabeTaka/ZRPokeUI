/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react'
import { importFilesContextProps } from './index.d'
import { UserContextType } from '../../@types/userContext'
import fileService from 'services/file'
import { useToast } from '@chakra-ui/react'
import userService from 'services/user'
import debounce from 'lodash.debounce'
import { userType} from '../../@types/user'
export const UserContext = React.createContext<UserContextType | null>(null)

const UserProvider: React.FC<importFilesContextProps> = ({ children }) => {
    const [file, setFile] = useState()
    const [disabled, setDisabled] = useState(true)
    const [submitingCsv, setSubmitingCsv] = useState(false)
    const [users, setUsers] = React.useState<userType[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)

    const toast = useToast()

    const handleOnChange = (e: any) => {
        if (e.target.files[0]?.type === 'text/csv') {
            setFile(e.target.files[0])
            setDisabled(false)
        } else {
            toast({
                title: 'Ops invalid file type!',
                description: 'Please select a CSV file to continue',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }
    }

    const list = async (query?: string) => {
        setLoading(true)
        const data = await userService.list(query)
        setUsers(data)
        setLoading(false)
    }

    const handleOnSubmit = async () => {
        setSubmitingCsv(true)
        const {status, message} = await fileService.send(file)
        toast({
            title: status === 200 ? 'File uploaded' : 'Ops something went wrong!',
            description: status === 200 ? 'Your file has been uploaded successfully' : message,
            status: status === 200 ? 'success' : 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right'
        })
        setSubmitingCsv(false)
        if (status === 200)
            list()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSave = useCallback(
        debounce(query => list(query), 2000),
        [],
    )

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSave(e.target.value)
    }


    return (
        <UserContext.Provider value={{ handleOnChange, handleOnSubmit, file, disabled, submitingCsv, users, list, loading, handleChangeInput }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
