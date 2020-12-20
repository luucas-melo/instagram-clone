import React, { useContext } from "react";
import { Navbar } from "./styles";
import logo from "../../assets/images/logo.png";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/store";
import { toggleTheme } from "../../store/modules/theme/actions";

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { title } = useSelector((state: StoreState) => state.theme);
  const dispatch = useDispatch();
  return (
    <Navbar>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Switch
        onChange={() => dispatch(toggleTheme({theme: title}))}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        offColor={colors.text}
        onColor={colors.link}
      />
    </Navbar>
  );
};

export default Header;
