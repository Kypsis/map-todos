import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 99999;

  > * {
    padding: 0 2rem;
  }

  /* @media screen and (max-width: 900px) {
    height: 60px;
    padding: 10px;
  } */
`;
