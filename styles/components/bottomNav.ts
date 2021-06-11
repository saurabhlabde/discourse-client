import styled from "styled-components";


export const NavBottomSection = styled.div`
background-color: rgba(255,255,255,0.3);
box-shadow: 0.1rem 0.1rem 1rem rgba(255,255,255,0.2);
height: 2.8em;
min-width: 2.8em;
max-width: auto;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
bottom: 0;
left: 0;
transform: translate(-0%,-50%);
padding:0 0.3rem;
border-top-right-radius: 5em;
border-bottom-right-radius: 5em;
`

export const NavItemSection = styled.div`
height: 2em;
width: 2em;
margin: 0 0.15rem;
background-color: ${props => props.theme.secondary};
border-radius: 5em;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
`