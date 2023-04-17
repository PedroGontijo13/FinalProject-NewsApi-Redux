import { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  ul {
    align-items: center;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    justify-content: center; /* Add this line */
  }

  nav {
    background-color: #333;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }

  li:last-child {
    margin-left: auto;
  }

  @media screen and (max-width: 600px) {
    ul {
      display: ${({ isMobileMenuOpen }) =>
        isMobileMenuOpen ? "flex" : "none"};
      flex-direction: column;
      align-items: center;
    }

    li {
      float: none;
      margin-left: 0;
    }
    li:last-child {
      margin-left: 0;
    }
  }
`;

const SearchBar = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  width: 300px;

  /* Add mobile responsiveness */
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 14px 16px;

  /* Add mobile responsiveness */
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };

  return (
    <NavContainer isMobileMenuOpen={isMobileMenuOpen}>
      <nav>
        <MenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "Close" : "Menu"}
        </MenuButton>
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <SearchBar type="text" placeholder="Search news" />
          </li>
        </ul>
      </nav>
    </NavContainer>
  );
}
