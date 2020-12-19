import React, { useContext, useState } from "react";
import { Navbar } from "./styles";
import logo from "../../assets/images/logo.png";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

const Header: React.FC = () => {
  const [theme, setTheme] = useState(false);
  const { colors } = useContext(ThemeContext);
  return (
    <Navbar>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Switch
        onChange={() => setTheme(!theme)}
        checked={theme}
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
