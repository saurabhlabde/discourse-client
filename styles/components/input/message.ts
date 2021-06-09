import styled from "styled-components";


export const AddMessageSection = styled.div`
height: 3.5em;
width: 100%;
border-radius: 1.3em;
background-color: ${props => props.theme.secondary};
display: flex;
padding: 0 0.5rem;
`
export const MessageForm = styled.form`
display: flex;
height: 100%;
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

