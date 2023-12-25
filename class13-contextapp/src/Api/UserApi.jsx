import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://jsonplaceholder.typicode.com'

const UserApi = () => {
    const [user, setUser] = useState([])

    // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
    const getUsers = useCallback(() => {
        const readUser = async () => {
            axios.get(`${url}/users`)
            .then((out) => {
                console.log(out)
                setUser(out.data)
            })
            .catch(err => toast.error(err.message))
            setUser()
        }
        readUser()
    }, [])

    useEffect(() => {
        getUsers()
    }, [])

  return {
    users : [user, setUser]
  }
}

export default UserApi