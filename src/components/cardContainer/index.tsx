/* eslint-disable react/jsx-key */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect } from 'react'
import { useListUsers } from 'hooks/useListUsers/useListUsers'

import CardList from '../cardList/index'

const CardContainer: React.FC = () => {
    const {users, list, loading} = useListUsers()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const stableList = useCallback(list, [])

    useEffect(() => {
        stableList()
    }, [stableList])

    
    return (
        <CardList users={users} loading={loading}/>
    )
}

export default CardContainer
