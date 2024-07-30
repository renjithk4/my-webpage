// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #282c34;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkStyled = styled(Link)`
  color: #61dafb;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <NavBar>
    <h1 style={{ color: '#61dafb' }}>My Portfolio</h1>
    <NavLinks>
      <LinkStyled to="/">About</LinkStyled>
      <LinkStyled to="/projects">Projects</LinkStyled>
      <LinkStyled to="/experience">Experience</LinkStyled>
      <LinkStyled to="/contact">Contact</LinkStyled>
    </NavLinks>
  </NavBar>
);

export default Header;
