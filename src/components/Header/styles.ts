import styled from "styled-components";

export const Navbar: any = styled.nav`
  height: 54px;
  background-color: ${(props) => props.theme.colors.header};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  svg {
    path {
      fill: ${(props) => props.theme.colors.logo};
    }
  }
`;

Navbar.Icons = styled.div`
  svg {
    margin-right: 1rem;
  }
`;
