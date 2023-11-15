import React, { Fragment, useState } from 'react'

const Ex2 = () => {
    let [count, setCount] = useState(0);

    const sayHello = (para) => {
        alert(`Hello, ${para}`)
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="lead my-3 p-3 border">
                            <p>
                                <b>
                                    (3) Call multiple function in an onclick event handler
                                </b>
                            </p>
                            <button className='btn btn-outline-info' onClick={ () => {
                                sayHello("REACT");
                                count = setCount(count + 1);
                            }}>
                                Ex2 - Say Hello and increment
                            </button>
                            <p><b>Increment : </b>{count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Ex2