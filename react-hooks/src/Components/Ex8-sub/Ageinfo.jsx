import React from 'react'

const AgeInfo = (props) => {

    const {updateAge} = props

  return (
    <div className='row'>
        <div className="col">
            <h3 className="display-3 text-warning">
                Age Info {updateAge()}
            </h3>
        </div>
    </div>
  )
}

export default AgeInfo