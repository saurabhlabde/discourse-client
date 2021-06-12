import styled from "styled-components";


export const NavBottomSection = styled.div`
background-color: ${props => props.theme.secondary};
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

.sh_icon{
        svg{
                height: 0.9em;
        width: 0.9em;      
        }
}

.ni_logout{
        svg{
        margin-right: 0.2rem;
        }
}

.sh_icon_unVisible{
        svg{
                transform: rotate(180deg);
                margin-left: 0.2rem;
        }
}
.sh_icon_visible{
        svg{
                margin-left: 0;
        }
}
`

export const NavItemSection = styled.div`
height: 2em;
width: 2em;
margin: 0 0.15rem;
background-color: ${props => props.theme.primary};
border-radius: 5em;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
svg{
        height: 1.1em;
        width: 1.1em;
        path{
                fill:${props => props.theme.t_primary};
                
        }
}
`
export const ProfileSection = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`