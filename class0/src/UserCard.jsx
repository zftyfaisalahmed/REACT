import React, { Component } from 'react'
import Address from "./Address"
import Ban from "./Ban"

export default class UserCard extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

  render() {
    const {firstName, lastName, image, email, id, age, birthDate, maidenName} = this.props
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                        <div className='card'>
                            <img src={image} alt=""  className='rounded-circle img-fluid'/>
                            <h1 className='id text-center'>ID : {id}</h1>
                            <h4 className='text-dark text-center'>{firstName +" "+ maidenName +" "+ lastName}</h4>
                            <div className='card-body'>
                                <details>
                                    <summary>Details</summary>
                                <p className='lead'>
                                    <i className='bi bi-envelope-open-fill'></i>
                                    <p><b>Email :</b>{email}</p>
                                    <p><b>Age :</b>{age}</p>
                                    <p><b>DOB :</b>{birthDate}</p>
                                </p>
                                    <Address addr = {this.props.address} />
                                    <Ban Bank = {this.props.bank} />

                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
  }
}
