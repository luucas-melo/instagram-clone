import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  max-width: 935px;
  width: 100%;
  position: relative;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  flex-grow: 1;
`;

export const Main = styled.div`
  max-width: 614px;
  margin-right: 28px;

  @media(max-width: 650px) {
    width: 100%;
  }

`;

export const Posts = styled.div``;
export const Side = styled.div`
  border: 1px solid green;
  height: 100vh;
  position: sticky;
  max-width: 293px;
  width: 100%;

  @media (max-width: 650px) {
    display: none;
  }
`;
