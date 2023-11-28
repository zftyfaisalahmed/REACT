import React from 'react'

const Geners = (props) => {
  return (
    <div className='text-left text-success'>Genres : {props ? props.data : ""}</div>
  )
}

export default Geners