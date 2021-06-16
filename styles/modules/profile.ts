import styled from "styled-components";

export const ProfileImageSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
`

export const Form = styled.form`
width: 100%;
`

export const TopSection = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 5rem 0 4rem 0;
position: relative;
`

export const ImageSection = styled.div`
background-color: ${props => props.theme.secondary};
height: 18em;
width: 18em;
border-radius: 7em;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
`

export const Label = styled.label`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const Images = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

export const Input = styled.input``

export const Text = styled.h1`
font-size: 1em;
color: ${props => props.theme.t_secondary};
`

export const BottomSection = styled.div`
width: 100%;
`

