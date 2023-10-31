import React from 'react'

// Global Variables
let x = 21;
const y = 124;
let title = "Welcome to string data";
let isAdmin = true


const user = {
    name:"Raju",
    age:22,
    email:"raju@gmail.com"
}

const emp = ['Manu','Somu','Sham','Ram'];

const Ex3 = (props) => {
  return (
    <div className='row'>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className="bg-warning text-white p-2 text-center">Example-3</h2>
        </div>
        <div className="col">
            <div className="border lead p-3 text-center">
                <h3>Variables in Functional Component</h3>
                <hr />

                <p><b>Number Variable X :</b>{x}</p>
                <p><b>Number Variable Y :</b>{y}</p>
                <p><b>PRODUCTS OF X*Y :</b>{x*y}</p>
                <hr />

                <p><b>String Variable TITLE : </b>{title}</p>
                <hr />

                <p><b>Boolean Variable isAdmin : </b>{isAdmin}</p>
                <hr />

                <p><b>Condition Statement : </b>{x>y ? "Say True" : "Say False"}</p>
                <p><b>Condition Statement : </b>{isAdmin ? "Say True" : "Say False"}</p>
                <hr />

                <p><b>Object USER.NAME : </b>{user.name}</p>
                <p><b>Object USER.AGE : </b>{user.age}</p>
                <p><b>Object USER.EMAIL : </b>{user.email}</p>
                <hr />

                <p><b>Array EMP : </b>{emp}</p>
                <p><b>Array EMP[0] : </b>{emp[0]}</p>
                <p><b>Array EMP[1] : </b>{emp[1]}</p>
                <hr />

                <div>
                    {
                        emp.map((item,index)=>{
                            return(
                                <p>key = {index} <b>MAP() : </b>{index} . {item}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex3
