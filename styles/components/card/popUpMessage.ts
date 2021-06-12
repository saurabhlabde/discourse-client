import styled from "styled-components";


export const PopUpMainSection = styled.div`
position: fixed;
bottom: 0;
left: 50%;
transform: translate(-50%,0%);
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-bottom: 1rem;
`

export const PopUpMessageSection = styled.div`
height: 3em;
width: 90%;
background-color: ${props => props.theme.secondary};
border-radius: 1em;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.2rem 0.6rem 0.2rem 1rem;
margin: 0.3rem 0;
cursor: default;
`

export const LeftSection = styled.div`
flex: 1;
`
export const RightSection = styled.div``

export const MessageSection = styled.div``

export const Message = styled.h1`
color:${props => props.theme.t_primary};
font-size: 1em;
::first-letter{
        text-transform: capitalize;
}
`
export const CloseSection = styled.div`
height: 2em;
width: 2em;
border-radius: 5em;
background-color: ${props => props.theme.primary};
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

svg{
        height: 0.8em;
        width: 0.8em;
}
`