import React, { useContext } from 'react'
import { DataContext } from '../Context/Context'
// import UserCard from './UserCard';
import PostCard from './PostCard';
// import PostApi from './../Api/PostApi';

const Post = () => {

    const context = useContext(DataContext)

    const [posts] = context.usePost.posts

    console.log(`this is posts components`, posts)

  return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <h3 className="display-3 text-secondary">
                    Posts
                </h3>
            </div>
        </div>
        <div className="row">
            {
                posts && posts.map((item, index) => {
                    return(<PostCard key={index} {...item}/>)
                })
            }
        </div>
    </div>
  )
}

export default Post