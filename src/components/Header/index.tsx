import React, { useContext } from 'react';
import { Container } from './styles'
import logo from '../../assets/images/logo.png';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

const Header: React.FC = () => {
    const { colors } = useContext(ThemeContext);
    return (
        <Container>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <Switch
                onChange={() => { }}
                checked={true}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={20}
                offColor={colors.text}
                onColor={colors.link}
            />
        </Container>
    );
}

export default Header;