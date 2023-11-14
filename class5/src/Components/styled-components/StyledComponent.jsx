import React from 'react'
import { styles1 } from '../Object-style/style'
import { StyledButton } from './Button/Button.styles';

const StyledComponent = () => {
  return (
    <div>
        <div style={styles1.Container1}>
            <h2 style={styles1.Header1}>STYLED COMPONENTS</h2>
        </div>
        {/* <button style={styledButton.button}>STYLED BUTTON</button> */}
        <StyledButton>Styled Default Button</StyledButton>
        <StyledButton variant= 'outline'>Styled Property Button</StyledButton>
    </div>
  )
}

export default StyledComponent;