import styled, { css } from "styled-components";

export const Navbar: any = styled.nav`
  height: 54px;
  background-color: ${(props) => props.theme.colors.header};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  svg {
    &:hover {
      cursor: pointer;
    }
    path {
      fill: ${(props) => props.theme.colors.logo};
    }
  }
  /* @media (max-width: 650px) {
    & .react-switch-bg {
      width: 20px !important;
      height: 10px !important;
    }

    & .react-switch-handle {
      width: 20px !important;
      height: 20px !important;
    }
  } */
`;

Navbar.Icons = styled.div`
  display: flex;
  svg {
    margin-right: 1rem;
    &:first-child {
      color: ${(props) => props.theme.colors.logo};
      path {
        &:first-child {
          fill: ${(props) => props.theme.colors.background};
        }
        &:nth-child(2) {
          fill: ${(props) => props.theme.colors.logo};
        }
      }
    }
    &:nth-child(2) {
      path {
        fill: white;
      }
    }
  }

  img {
    width: 24px;
    display: flex;
    border-radius: 50%;
  }
`;

Navbar.Label = styled.label`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  span {
    font-weight: 500;
    font-size: 14px;
    position: absolute;
    right: 40%;
    top: 3px;
    display: flex;
    color: #8e8e8e;
  }
  svg {
    position: absolute;
    right: 62%;
    top: 8px;
    path {
      fill: #8e8e8e;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

Navbar.Input = styled.input`
  background: #333;
  outline: 0;
  border: 0;
  background-color: ${(props) => props.theme.colors.background};
  resize: none;
  padding: 2px;
`;
