import styled from "styled-components";


export const AddMessageSection = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
position: relative;
`
export const MessageForm = styled.form`
background-color: ${props => props.theme.secondary};
height: 3.5em;
padding: 0 0.5rem;
border-radius: 1.3em;
display: flex;
width: 100%;
align-items: center;
justify-content: flex-start;
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


export const InputSection = styled.div`
flex:1;
height: 100%;
margin-left: 0.5rem;
padding-left: 0.2rem;
`

export const Input = styled.input`
color:${props => props.theme.t_primary};
font-size: 1em;
background-color: transparent;
height: 100%;
width: 100%;
border: none;
outline: none;

::placeholder{
        color:${props => props.theme.t_primary};
        opacity: 1;
}
`

export const SendButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 2em;
width: 2em;

svg{
        height: 1.5em;
        width: 1.5em;
}

`


export const MediaSelectSection = styled.div`
height: 2.5em;
width: 2.5em;
border-radius: 5em;
display: flex;
align-items: center;
justify-content: center;
margin-right: 0.5rem;

:hover{
background-color: ${props => props.theme.primary};
}

svg{
        height: 1.2em;
        width: 1.2em;
        path{
                fill:${props => props.theme.t_primary}
        }
}
`

export const SelectedMediaSection = styled.div`
height: auto;
width: auto;
margin-bottom: 0.5rem;
position: absolute;
left: 0;
bottom: 0;
transform: translate(0,-70%);
`

export const SelectedMediaSec = styled.div`
height: 5em;
width: 5em ;
overflow: hidden;
border-radius: 1em;
`

export const SelectedMedia = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
position: relative;
`

export const SMIconSection = styled.div`
background-color: rgba(255,255,255,0.6);
display: flex;
align-items: center;
justify-content: center;
border-radius: 5em;
position: absolute;
right: 0;
top: 0;
transform: translate(-10%,10%);
z-index: 1;
height: 2em;
width: 2em;
`