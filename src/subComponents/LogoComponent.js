// home top button
import styled from "styled-components";
import React from "react";
import { darkTheme } from "../components/Themes";
import { NavLink } from "react-router-dom";


const Logo = styled.h2`
display: inline-block;
font-family: 'Karla', sans-serif;
font-weight: 400;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body };
position: fixed;
left: 2rem;
top: 1.5rem;
z-index: 3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            <NavLink to="/" style={{ color: 'black', textDecoration:'none', fontSize: '0.65em', marginBottom:'5px' }}>
                www
            </NavLink>
        </Logo>
    )
}

export default LogoComponent