import React, { useRef } from 'react'
import {registerUser} from '../data/User';

const Register = () => {

  const fName = useRef();
  const fEmail = useRef();
  const fMobile = useRef();
  const fPass = useRef();

  const submitHandler=async (e)=>{
    e.preventDefault();
    const data = {
      name : fName.current.value,
      email : fEmail.current.value,
      mobile : fMobile.current.value,
      password : fPass.current.value
    };
    console.table('New Data', data);
    await registerUser(data);
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h3 className="display-3 text-dark text-center">
                    Register
                </h3>
            </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
            <div className="card">
              <div className="card-body">
                <form action="" autoComplete='off' onSubmit={submitHandler}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' className='form-control' required  ref={fName}/>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='form-control' required ref={fEmail}/>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" id='mobile' name='mobile' className='form-control' required ref={fMobile} />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' id='password' name='password' required ref={fPass}/>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Register" className='btn btn-outline-success' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register
