import React, { useContext } from 'react'
import { DataContext } from '../Context/Context'
import CommentCard from './CommentCard'
// import UserCard from './UserCard';
// import PostCard from './PostCard';
// import PostApi from './../Api/PostApi';

const Comment = () => {

    const context = useContext(DataContext)

    const [comments] = context.useComment.comments

    console.log(`this is comments components`, comments)

  return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <h3 className="display-3 text-secondary">
                    Comment
                </h3>
            </div>
        </div>
        <div className="row">
            {
                comments && comments.map((item, index) => {
                    return(<CommentCard key={index} {...item}/>)
                })
            }
        </div>
    </div>
  )
}

export default Comment