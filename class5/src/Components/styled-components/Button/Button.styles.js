import styled from "styled-components";

export const StyledButton = styled.button`
    border: 2px solid #4caf50;
    background-color: ${(props) => 
        (props.variant === 'outline' ? "#fff" : "#4caf50"
    )};
    color : ${(props) => (props.variant === 'outline' ? "#4caf50" : "#fff")};
    /* color: #fff; */
    padding: 15px 32px;
    margin: 0px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition: 1s all ease-out;
    &:hover{
        background-color: ${(props) => 
            (props.variant === 'outline' ? "#4caf50" : "#fff"
        )};
        color : ${(props) => (props.variant === 'outline' ? "#fff" : "#4caf50")};
    }
`;