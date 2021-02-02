import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <StyledLogo>
        <img src={logo} alt="logo"></img>
        <h1>R.A.W.G</h1>
      </StyledLogo>
      <section className="search">
        <input type="text" />
        <button>Search</button>
      </section>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;
const StyledLogo = styled(motion.figure)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;