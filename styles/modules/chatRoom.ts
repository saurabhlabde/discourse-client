import styled from "styled-components";


export const ChatRoomSection = styled.section`
background-color: ${props => props.theme.primary};
padding: 0 1rem;
height: 100vh;
width: 100vw;
position: relative;
`


export const TopSection = styled.div`
margin: 0 0 1rem 0;
padding-top: 1rem;
`

export const MessageCardSection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
max-height: 80%;
overflow: hidden;
overflow-y: scroll;
padding-bottom: 10rem;
`

export const AddMessageSection = styled.div`
position: fixed;
bottom: 0;
left: 50%;
transform: translate(-50%,-15%);
width: 95%;
`
