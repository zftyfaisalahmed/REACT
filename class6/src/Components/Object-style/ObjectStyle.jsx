import React from 'react'

const ObjectStyle = () => {

    const Container = {display: 'flex',  flexDirection: 'column'};
    const Header = {padding: "20px 20px", textAlign: 'center', color: 'white', background: 'red', borderRadius: "10px", margin: '15px'};
    
  return (
    <div style={Container}>
        <h2 style={Header}>CREATING A STYLE OBJECT VARIABLES</h2>
    </div>
  )
}

export default ObjectStyle