import React from 'react'
import { styles1 } from '../Object-style/style'
import { styledButton } from './button';

const StyledComponent = () => {
  return (
    <div>
        <div style={styles1.Container1}>
            <h2 style={styles1.Header1}>STYLED COMPONENTS</h2>
        </div>
        <button style={styledButton.button}>STYLED BUTTON</button>
    </div>
  )
}

export default StyledComponent;