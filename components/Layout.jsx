import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";

import styled, { createGlobalStyle } from "styled-components";

import {
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaAngellist,
} from "react-icons/fa";

const Global = createGlobalStyle`
  body, html{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const MainNav = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  background: transparent;
  cursor: pointer;
  border: none;
  z-index: 101;

  div {
    width: 1.8rem;
    height: 0.2rem;
    background: #ffffff;
    border-radius: 5px;
    transform-origin: 1px;
    margin-bottom: 6px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(50deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-50deg)" : "rotate(0)")};
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuLinks = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: #0f9fc0;

  top: 0;
  right: 0;
  z-index: 100;
  transition: ease-in-out 400ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};

  ul {
    list-style: none;
    margin-left: -12%;
  }

  li {
    margin: 15px 20px;
    text-align: left;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.8rem;
    color: #f8f8f8;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Layout = ({ children }) => {
  const [nav, showNav] = useState(false);

  return (
    <>
      {/* Global Styles */}
      <Global />

      {/* Large and Desktop Screen */}
      <MainNav>
        <Navbar />
      </MainNav>

      {/* Mobile Navigation */}

      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>

      <MenuLinks nav={nav}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            marginLeft: "20px",
            marginTop: "25px",
          }}
        >
          <h1 className="text-white text-4xl">
            <span className="logo-text">Dev</span> Amkam
          </h1>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a onClick={() => showNav(!nav)} href="#">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onClick={() => showNav(!nav)} href="#">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a onClick={() => showNav(!nav)} href="#">
                Skills
              </a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a onClick={() => showNav(!nav)} href="#">
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolios">
              <a onClick={() => showNav(!nav)} href="#">
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={() => showNav(!nav)} href="#">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </MenuLinks>

      <main className="container mx-auto px-8 layout-main">
        <div>{children}</div>
        <div className="social-medias rounded-md flex justify-center items-center z-50">
          <ul>
            <li>
              <Link href="https://github.com/AmaduKamara">
                <a target="_blank">
                  <FaGithubSquare className="text-4xl md:text-5xl h-text-color" />
                </a>
              </Link>
            </li>
            <li className="mt-4">
              <Link href="https://www.linkedin.com/in/amadu-kamara-3b60a25b/">
                <a target="_blank">
                  <FaLinkedin className="text-4xl md:text-5xl h-text-color" />
                </a>
              </Link>
            </li>

            <li className="mt-4">
              <Link href="https://angel.co/u/devamkam">
                <a target="_blank">
                  <FaAngellist className="text-4xl md:text-5xl h-text-color" />
                </a>
              </Link>
            </li>
            <li className="mt-4">
              {" "}
              <Link href="https://twitter.com/DevAmkam">
                <a target="_blank">
                  <FaTwitterSquare className="text-4xl md:text-5xl h-text-color" />
                </a>
              </Link>
            </li>
            <li className="mt-4">
              {" "}
              <Link href="https://www.facebook.com/amadus.kamara.7">
                <a target="_blank">
                  <FaFacebookSquare className="text-4xl md:text-5xl h-text-color" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Layout;
