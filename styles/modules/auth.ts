import styled from "styled-components";


export const AuthSection = styled.main`
background-color: ${props => props.theme.primary};
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
overflow-y: scroll;
`

export const AuthCard = styled.div`
background-color: ${props => props.theme.primary};
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 0 1rem;
`

export const AuthHeadingSection = styled.div`
width: 100%;
margin: 3rem 0 1.5rem 0;
`

export const AuthFrom = styled.form`
width: 100%;
margin: 1rem 0 2rem 0;
`

export const AuthInputSection = styled.div`
width: 100%;
margin-bottom: 4rem;
`

export const AuthBottomSection = styled.div`
width: 100%;
margin-top: 0.5rem;
padding-bottom: 5rem;
`

