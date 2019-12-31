import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: aliceblue;

  @media screen and (max-width: 900px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
