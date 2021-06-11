import styled from "styled-components";


export const SearchMSection = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
.back_btn{
        background-color: ${props => props.theme.secondary};
        margin-right: 0.5rem;
        svg{
                height: 0.8em;
                width: 0.8em;
                margin-right: 0.2rem;
        }
}
.search_section{
        flex: 1;
}
`