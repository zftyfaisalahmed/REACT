import React from 'react'

const PostCard = (props) => {
    const {body, id, title, userId} = props
  return (
    <div className="col-xs-12 col-sx-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card my-3">
            <div className="card-header">
                <h4 className="text-secondary">
                    {body}
                </h4>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item text-success">
                        <i class="bi bi-android2"></i>                        
                        <span className='float-end'>{id}</span>
                    </li>
                    <li className="list-group-item text-success">
                        <i class="bi bi-headset"></i>
                        <span className='float-end'>{userId}</span>
                    </li>
                    <li className="list-group-item text-success">
                        <i class="bi bi-browser-chrome"></i>
                        <span className='float-end'>{title}</span>
                    </li>
                    {/* <li className="list-group-item text-success">
                        <i class="bi bi-person-add"></i>
                        <span className='float-end'>{username}</span>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PostCard