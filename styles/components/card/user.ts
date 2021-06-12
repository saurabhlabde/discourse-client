import styled from "styled-components";

export const CardSection = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin: 1.5rem 0;

:hover{
        background-color: ${props => props.theme.secondary};
        padding: 0.5rem 0.8rem 0.5rem 0.7rem;
        border-radius: 1.2em;
}
`

export const LeftSection = styled.div`
display: flex;
flex: 1;
cursor: default;
`

export const RightSection = styled.div`
display: flex;
cursor: default;

`

export const ProfileSection = styled.div`
height: 3.3em;
width: 3.3em;
border-radius: 5em;
overflow: hidden;
`

export const Profile = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

export const UserInfoSection = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
margin-left: 0.5rem;
margin-top: 0.5rem;
`

export const UsernameFLNameSection = styled.div`
display: flex;
`

export const UsernameSection = styled.div`
display: flex;
margin-left: 0.3rem;
`

export const FLNameSection = styled.div`
display: flex;

`

export const Username = styled.h1`
color:${props => props.theme.t_secondary};
font-size: 0.8em;
text-transform: capitalize;
`

export const FirstName = styled.h2`
color:${props => props.theme.t_primary};
font-size: 0.9em;
text-transform: capitalize;

`

export const LastName = styled.h2`
color:${props => props.theme.t_primary};
font-size: 0.9em;
margin-left: 0.2rem;
`

export const LastMessageSection = styled.div`
width: 100%;
margin-top: 0.3rem;
`

export const LastMessage = styled.h2`
color:${props => props.theme.t_secondary};
font-size: 0.8em;
text-transform: capitalize;
`

export const TimeSection = styled.div`
display: flex;
padding-top: 1.4rem;
`

export const TimeT = styled.h2`
color:${props => props.theme.t_secondary};
font-size: 0.8em;
`

