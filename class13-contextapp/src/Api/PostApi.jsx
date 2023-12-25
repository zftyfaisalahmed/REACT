import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://jsonplaceholder.typicode.com'

const PostApi = () => {
    const [post, setPost] = useState([])

    // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
    const getPost = useCallback(() => {
        const readPost = async () => {
            axios.get(`${url}/posts`)
            .then((out) => {
                console.log(out)
                setPost(out.data)
            })
            .catch(err => toast.error(err.message))
            setPost()
        }
        readPost()
    }, [])

    useEffect(() => {
        getPost()
    }, [])

  return {
    posts : [post , setPost]
  }
}

export default PostApi