import styled from "styled-components";

export const NavSection = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
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

export const LeftSection = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
`

export const DeviceSection = styled.div`
height: 2.5em;
width: 2.5em;
background-color: ${props => props.theme.secondary};
border-radius: 5em;
display: flex;
align-items: center;
justify-content: center;
margin-right: 1rem;

svg{
        height: 1.1em;
        width: 1.1em;

        path{
                fill:${props => props.theme.t_primary}
        }
}
`

export const HiMessageSection = styled.div``

export const HiMessage = styled.h1`
color:${props => props.theme.t_primary};
font-size: 1em;
cursor: default;
`
