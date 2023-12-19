import React from 'react'

const AgeInfo = (props) => {

    const {ageInfo} = props

  return (
    <div className='row'>
        <div className="col">
            <h3 className="display-3 text-warning">
                Age Info {ageInfo()}
            </h3>
        </div>
    </div>
  )
}

export default AgeInfo