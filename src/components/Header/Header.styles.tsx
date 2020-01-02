import styled from "styled-components";

export const HeaderContainer = styled.div`
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 99999;

  @media screen and (max-width: 900px) {
    height: 60px;
    padding: 10px;
  }
`;
