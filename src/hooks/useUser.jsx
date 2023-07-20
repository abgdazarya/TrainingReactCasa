import React, { useEffect, useState } from 'react'

const useUser = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(['Abdel', 'Budi', "Cintya"])
    }, [])

    const deleteUser = (user) => {
        setUsers(users.filter((filterUser) => user))
    }

    return [users, deleteUser]
}

export default useUser