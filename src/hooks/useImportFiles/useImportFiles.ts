/* eslint-disable import/no-unresolved */
import { useContext } from 'react'
import { UserContext } from 'context/user/index'

export const useImportFiles = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error(
            'You must use useImportFiles hook inside the useImportFilesProvider'
        )
    }

    return {
        handleOnChange: context.handleOnChange,
        handleOnSubmit: context.handleOnSubmit,
        submitingCsv: context.submitingCsv,
        file: context.file
    }
}
