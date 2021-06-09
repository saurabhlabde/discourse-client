import styled from "styled-components";

export const SearchSection = styled.div`
background-color: ${props => props.theme.secondary};
height: 3.3em;
width: 100%;
border-radius: 1.2em;
overflow: hidden;
padding: 0 1rem 0 1.2rem;
`

export const SearchForm = styled.form`
height: 100%;
width: 100%;
display: flex;
`

export const SearchInput = styled.input`
background-color: transparent;
color: ${props => props.theme.t_primary};
font-size: 1em;
height: 100%;
width: 100%;
border: none;
outline: none;
::placeholder{
        color: ${props => props.theme.t_secondary};
        opacity: 1;
}
`

export const SearchIconSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
