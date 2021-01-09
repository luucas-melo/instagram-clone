import styled from "styled-components";

export const Container = styled.div``;
export const Modal = styled.div`
  svg {
    position: absolute;
    top: 20px;
    color: #fafafa;
    &:hover {
      cursor: pointer;
    }
  }
  .close-icon {
    right: 20px;
  }

  .instagram-icon {
    left: 20px;
  }
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: #f9f9f9;
  color: var(--text-color);
  box-shadow: 0px 4px 15px rgba(40, 40, 40, 0.3),
    0px 1px 10px rgba(20, 20, 20, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  max-width: 40%;
  @media (max-width: 600px) {
    max-width: 80%;
  }
`;
