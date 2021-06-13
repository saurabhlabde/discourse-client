import styled from "styled-components";


export const LoadingSection = styled.div`
  background-color: ${(props) => props.theme.primary};
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;

.cssload-dots{
  position: fixed;
  top: 0%;
  left: 0%;
  transform: translate(50%,50%);
}
`;
