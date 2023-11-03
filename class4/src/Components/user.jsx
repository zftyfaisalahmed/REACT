import React from "react";
import data from '../data/userss'

function User(props){
    console.log(props)
    return (
        data.map((users) =>       
        <div className="col">
            <div className="bg-secondary text-white p-2 text-center border lead p-3 text-center">
                <h3>Personal Details</h3>
            </div>
                
            <div className='text-center'>
                <p><b>Name :</b>{users.name}</p>
                <p><b>Id :</b>{users.id}</p>
                <p><b>Email :</b>{users.email}</p>
                <p><b>Age : </b>{users.age}</p>
                <p><b>Address : City-</b>{users.address.city}</p>   
                <p><b>Zipcode - </b>{users.address.pin}</p>
<hr />
                <h2 className="text-decoration-underline">Banking Details</h2>
                 <h3 className="text-decoration-underline">Bank-1</h3><br />
                 <p>
                     <b>Account Number : </b>{users.bank[0].accNo}<br/>
                     <b>Bank Name : </b>{users.bank[0].bankName}<br/>
                     <b>Account Type: </b>{users.bank[0].type}<br/>
                 </p> 
<hr />
                 <h2 className="text-decoration-underline">Banking Details</h2>
                 <h3 className="text-decoration-underline">Bank-2</h3><br />
                 <p>
                     <b>Account Number : </b>{users.bank[1].accNo}<br/>
                     <b>Bank Name : </b>{users.bank[1].bankName}<br/>
                     <b>Account Type: </b>{users.bank[1].type}<br/>
                 </p> 
                </div>
                
            </div>
        )
    )
}

export default User 