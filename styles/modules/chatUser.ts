import styled from "styled-components";


export const ChatsUserSection = styled.section`
background-color: ${props => props.theme.primary};
padding: 0 1rem;
height: 100vh;
width: 100vw;
position: relative;

`

export const NavSection = styled.div`
padding: 2rem 0 0.5rem 0;
`

export const SearchSection = styled.div`
margin: 1rem 0;
`

export const UserCardSection = styled.div`
margin-top: 2rem;
`

export const MessageHeadingSection = styled.div`
margin: 0.5rem 0 2rem 0;
`

export const MessageHeading = styled.h1`
color:${props => props.theme.t_primary};
font-size: 1em;
`

export const NotAnyMessageSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 2rem 0;
`

export const NotMessage = styled.h1`
color:${props => props.theme.t_secondary};
font-size: 1.1em;
`