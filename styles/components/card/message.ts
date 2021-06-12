import styled from "styled-components";


export const MessageCardSection = styled.div`
display: flex;
margin: 0.8rem 0;
align-self: flex-start;
`

export const ProfileSection = styled.div`
height: 2em;
width: 2em;
border-radius: 5em;
overflow: hidden;
`

export const Profile = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

export const ContentSection = styled.div`
display: flex;
flex-direction: column;
`

export const TopSection = styled.div`
background-color: ${props => props.theme.b_primary};
width: max-content;
padding: 0.5rem 1rem 0.5rem 1rem;
-webkit-border-radius: 1em;
-webkit-border-top-left-radius: 0.1rem;
-moz-border-radius: 1em;
-moz-border-radius-topleft: 0.1rem;
border-radius: 1em;
border-top-left-radius: 0.1rem;
margin-left: 0.5rem;
`

export const BottomSection = styled.div`
display: flex;
`

export const TextSection = styled.div`
margin: 0.5rem 0;
`

export const ContentText = styled.h1`
color:${props => props.theme.t_primary};
font-size: 0.9em;
cursor: default;
`

export const MediaSection = styled.div`
height: 5em;
width: 100%;
border-radius: 0.8em;
overflow: hidden;
`

export const ContentMedia = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

export const OtherInfoSection = styled.div`
display: flex;
margin: 0.6rem 0 0 1rem;
`

export const UsernameSection = styled.div``

export const Username = styled.h2`
color:${props => props.theme.t_secondary};
font-size: 0.7em;
text-transform: capitalize;
`

export const TimeSection = styled.div`
margin-left: 0.3rem;
`

export const TimeT = styled.h2`
color:${props => props.theme.t_secondary};
font-size: 0.7em;
`