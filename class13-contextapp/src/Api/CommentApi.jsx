import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://jsonplaceholder.typicode.com'

const CommentApi = () => {
    const [comment, setComment] = useState([])

    // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
    const getPost = useCallback(() => {
        const readComment = async () => {
            axios.get(`${url}/comments`)
            .then((out) => {
                console.log(out)
                setComment(out.data)
            })
            .catch(err => toast.error(err.message))
            setComment()
        }
        readComment()
    }, [])

    useEffect(() => {
        getPost()
    }, [])

  return {
    comments : [comment , setComment]
  }
}

export default CommentApi