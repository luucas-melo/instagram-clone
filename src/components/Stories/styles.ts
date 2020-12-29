import styled from "styled-components";

export const Container: any = styled.div`
  padding: 16px 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: initial;
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 5px;
  }
`;

Container.Stories = styled.div`
  border: double 2px transparent;
  border-radius: 50%;
  max-width: 60%;
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
