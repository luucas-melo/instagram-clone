import React, { useContext } from "react";
import { Navbar } from "./styles";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/store";
import { toggleTheme } from "../../store/modules/theme/actions";
import { AiOutlineHeart } from "react-icons/ai";
import { ImCompass2 } from "react-icons/im";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiHomeAlt, BiSearch } from "react-icons/bi";

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { title } = useSelector((state: StoreState) => state.theme);
  const dispatch = useDispatch();
  return (
    <Navbar>
      <Logo width={105} height={54} />

      <Navbar.Label>
        <BiSearch size={12} />
        <span>Search</span>
        <Navbar.Input />
      </Navbar.Label>
      <Navbar.Icons>
        <BiHomeAlt size={24} />
        <IoPaperPlaneOutline size={24} />
        <ImCompass2 size={24} />
        <AiOutlineHeart size={24} />
        <img src="https://github.com/luucas-melo.png" alt="profile" />
      </Navbar.Icons>
      <Switch
        onChange={() => dispatch(toggleTheme({ theme: title }))}
        checked={title === "light"}
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
