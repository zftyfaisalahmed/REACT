import React from 'react'
const noImage = "https://www.lemontreehotels.com/images/dining/567x416No_Image_Available.jpg";

const Image = (props) => {
  return (
    <img src={props.data ? props.data.url : noImage} alt="" style={{height: "350px"}}/>
  )
}

export default Image