import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const Title: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.header};

  svg,
  img,
  span {
    &:hover {
      cursor: pointer;
    }
  }
`;
export const Image = styled.div`
  width: 100%;
  img {
    width: 100%;
    max-height: 700px;
  }
`;

Title.Image = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 35px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export const Options = styled.div``;

export const PostComments: any = styled.div`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.header};
`;

PostComments.Icons = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    margin-right: 14px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const InteractionIcons = styled.div``;
export const SaveIcon = styled.div``;
