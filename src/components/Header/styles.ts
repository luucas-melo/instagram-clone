import styled from "styled-components";

export const Navbar = styled.nav`
  height: 70px;
  background-color: ${props => props.theme.colors.header};
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;
