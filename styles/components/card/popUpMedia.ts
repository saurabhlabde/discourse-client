import styled from "styled-components";


export const PopUpMediaSection = styled.div`
background-color: rgba(255, 115, 0,0.8);
position: absolute;
top: 0;
right: 0;
transform: translate(-40%,-90%);
display: flex;
align-items: center;
justify-content: center;
padding: 0.2rem 0.2rem;
border-radius: 5rem;
`

export const ItemSection = styled.div`
background-color: ${props => props.theme.primary};
display: flex;
align-items: center;
justify-content: center;
height: 2em;
width: 2em;
margin: 0 0.1rem;
border-radius: 5em;

svg{
        path{
                fill: ${props => props.theme.t_primary};
        }
}
`