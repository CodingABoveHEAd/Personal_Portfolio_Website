import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link as linkr } from "react-router-dom";
import { Bio } from "../data/constants";
import MenuRounded from '@mui/icons-material/MenuRounded';


const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
   z-index: 5000; 
`;

const NavLogo = styled(linkr)`
  padding: 0 6px;
  text-decoration: none;
  color: inherit;
  width: 80%;
  font-weight: 500;
  font-size: 18px;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
   z-index: 5000; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
z-index: 5000; 
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 6px;
   z-index: 5000; 

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  z-index: 5000; 
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  height: 100%;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  // justify-content:center;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  padding: 12px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "100" : "-100")};
`;

const Navbar = () => {
  const [open, setopen] = useState(false);
  const theme=useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Geek</NavLogo>
        <MobileIcon onClick={() => setopen(!open)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {open && (
          <MobileMenu open>
            <NavLink  onClick={() => setopen(!open)} href="#About">About</NavLink>
            <NavLink  onClick={() => setopen(!open)} href="#Skills">Skills</NavLink>
            <NavLink  onClick={() => setopen(!open)} href="#Experience">Experience</NavLink>
            <NavLink  onClick={() => setopen(!open)} href="#Projects">Projects</NavLink>
            <NavLink  onClick={() => setopen(!open)} href="#Education">Education</NavLink>
             <GithubButton href={Bio.github} target="_Blank" style={{ 
                background: theme.primary,
                color: theme.text_primary,
              }}>
            Github Profile
          </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_Blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
