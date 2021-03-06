import React, {useState, useEffect} from 'react'
import {isUserLogged } from '../../utils/actions'
import Loading from '../../components/Loading'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Account() {

    const [login, setLogin] = useState(null)

    useEffect (() => {
            setLogin(isUserLogged())
        }, [])
  
    if (login == null) {
        return <Loading isVisible={true} text="Cargando..."/>
    }

    return login ? <UserLogged/> : <UserGuest/>
}
