import styled from "styled-components";


export const ButtonSection = styled.div`
background-color: ${props => props.theme.b_primary};
height: 3.5em;
width: 100%;
border-radius:1.3em;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

`

export const Button = styled.button`
background-color: transparent;
color:${props => props.theme.t_primary};
height: 100%;
width: 100%;
border:none;
outline: none;
font-size: 1em;
`