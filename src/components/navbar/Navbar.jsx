import React, { useState } from "react";
import { menuIcon } from "../../helper/iconData";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Nav justify= "space-between" wrap="wrap">
      <Logo >Clarus Library</Logo>
      <HamburgerIcon onClick= {() => setToggle (!toggle)}>{menuIcon}</HamburgerIcon>
      <Menu showMenu={true}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/">About</MenuLink>
        <MenuLink to="/">Register</MenuLink>
        <MenuLink to="/">Login</MenuLink>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
