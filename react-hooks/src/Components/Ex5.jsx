import React, { useLayoutEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com';

const Ex5 = () => {
  /* useLayoutEffect has same signature as useEffect hook */
  const [users,setUsers] = useState([])

  const getUsers = async () => {
    await fetch(`${url}/users`)
          .then(res => res.json())
          .then(out => {
            console.log('out =', out)
            setUsers(out)
          }).catch(err => console.log(err.message))
    }

    useLayoutEffect(() => {
      getUsers()
    },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3 ">useLayoutEffect Hook</h5>
          <p className="text-secondary">
          The useLayoutEffect Hook is a variation of the useEffect Hook that runs synchronously before the browser repaints the screen.
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col text-center">
          <table className="table table-bordered table-dark table-striped table-hover table-responsive">
            <thead>
              <tr className='table-secondary'>
                <th>useEffect</th>
                <th>useLayoutEffect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  The function pass inside the useEffect hook fires after layout
                  print
                </td>
                <td>
                  The function pass inside the useLayoutEffect hook fires before
                  the browser updates the screen
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  This is ok for most of side effects that shouldn't block the
                  browser from updating the screen
                </td>
                <td>
                  There are cases where you may not want the behavior of
                  useEffect hook. It fits where, to prevent the user from seeing
                  flickers of changes we can use useLayoutEffect.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="row">
        {
          users && users.map((item,index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3" key={index}>
                <div className="card">
                  <div className="card-header">
                    <h5 className="text-center text-success">{item.id}) {item.name} </h5>
                  </div>
                  <div className="card-body">
                    <p><b>Name </b> <span className='float-end'>{item.name}</span></p>
                    <p><b>Email </b> <span className='float-end'>{item.email}</span></p>
                    <p><b>Phone </b> <span className='float-end'>{item.phone}</span></p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Ex5
