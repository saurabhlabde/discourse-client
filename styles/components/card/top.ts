import styled from "styled-components";


export const TopCardSection = styled.div`
background-color: ${props => props.theme.secondary};
display: flex;
width: 100%;
border-radius: 1.3em;
padding: 0.8rem 0.5rem;
`

export const BackButton = styled.div`
background-color: ${props => props.theme.primary};
display: flex;
align-items: center;
justify-content: center;
height: 2.2em;
width: 2.2em;
border-radius: 5em;
`

export const UserInfoSection = styled.div`
display: flex;
margin-left: 0.8rem;
`

export const ProfileSection = styled.div`
height: 2.5em;
width: 2.5em;
border-radius: 5em;
overflow: hidden;
`

export const Profile = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

export const InfoSection = styled.div`
display: flex;
flex-direction: column;
margin-left: 0.5rem;
`

export const TopSection = styled.div`
display: flex;
`

export const BottomSection = styled.div`
margin-top: 0.2rem;
`

export const FLNameSection = styled.div`
display: flex;

`

export const UsernameSection = styled.div`
margin-left: 0.5rem;
`

export const Username = styled.h2`
color:${props => props.theme.t_secondary};
font-size: 0.8em;
text-transform: capitalize;
`

export const FirstName = styled.h1`
color:${props => props.theme.t_primary};
font-size: 1em;
text-transform: capitalize;

`

export const LastName = styled.h1`
color:${props => props.theme.t_primary};
font-size: 1em;
margin-left: 0.2rem;
`

export const StatusSection = styled.div``

export const Status = styled.h2`
color:${props => props.theme.t_secondary};
font-size: 0.8em;
`