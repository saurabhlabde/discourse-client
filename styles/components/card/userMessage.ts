import styled from "styled-components";
import { TopSection, MessageCardSection, OtherInfoSection } from './message'


export const UserMessageCardSection = styled(MessageCardSection)`
align-self: flex-end;
`

export const UserTopSection = styled(TopSection)`
background-color: ${props => props.theme.secondary};
border-top-left-radius: 1em;
border-top-right-radius: 0.1rem;
margin-left: 0rem;
margin-right: 0.5rem;

`


export const UserOtherInfoSection = styled(OtherInfoSection)`
margin: 0.6rem 0 0 0.5rem;
`