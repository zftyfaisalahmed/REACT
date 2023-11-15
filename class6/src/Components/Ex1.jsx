import React, { Fragment } from 'react'

const Ex1 = () => {
    const showAlert = () => {
        alert("I'm an alert")
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="lead my-3 p-3 border">
                            <p>
                                <b>
                                    (2) React event listeners
                                </b>
                            </p>
                            <p>To Listen to events in React, add the onClick attribute which is the event handler to the target elements. This  specifies the function to be executed when that element is clicked </p>
                            <button className='btn btn-outline-info' onClick={showAlert}>
                                Ex1 - show Alert
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Ex1