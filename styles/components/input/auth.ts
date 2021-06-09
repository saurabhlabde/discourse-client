import styled from 'styled-components'

export const InputSection = styled.div`
background-color: ${props => props.theme.secondary};
height: 3.5em;
width: 100%;
border-radius: 1.3em;
padding: 0 1rem 0 1.2rem;
margin:0.8rem 0;
`

export const Input = styled.input`
background-color: transparent;
color:${props => props.theme.t_primary};
height: 100%;
width: 100%;
font-size: 1em;
border: none;
outline: none;

::placeholder{
        color:${props => props.theme.t_secondary};
        opacity: 1;
}
`