import styled from "styled-components";

export const Container: any = styled.div`
  padding: 16px 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
`;

Container.Stories = styled.div`
  width: 65px;
  margin-left: 10px;
  border: double 2px transparent;
  border-radius: 80px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #fd1d1d, #c13584);
  background-origin: border-box;
  background-clip: content-box, border-box;
  img {
    border: 2px solid ${(props) => props.theme.colors.background};
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  }
`;
