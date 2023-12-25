import React from 'react'

const UserCard = (props) => {
    const {name, email, phone, website, username} = props
  return (
    <div className="col-xs-12 col-sx-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card my-3">
            <div className="card-header">
                <h4 className="text-secondary">
                    {name}
                </h4>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item text-success">
                        <i class="bi bi-envelope-at"></i>
                        <span className='float-end'>{email}</span>
                    </li>
                    <li className="list-group-item text-success">
                        <i class="bi bi-headset"></i>
                        <span className='float-end'>{phone}</span>
                    </li>
                    <li className="list-group-item text-success">
                        <i class="bi bi-browser-chrome"></i>
                        <span className='float-end'>{website}</span>
                    </li>
                    <li className="list-group-item text-success">
                        <i class="bi bi-person-add"></i>
                        <span className='float-end'>{username}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UserCard