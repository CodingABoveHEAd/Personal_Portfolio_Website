import React from "react";
import styled from "styled-components";
import {
  FacebookRounded,
  WhatsApp,
  LinkedIn,
  Instagram,
  Telegram,
} from "@mui/icons-material"; // Make sure these icons are installed
import { Bio } from "../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: center;
  list-style: none;
  padding: 0;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 12px;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 10px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Niloy Chowdhury</Logo>
        <Nav>
          <NavItem>
            <NavLink href="#About">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Experience">Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Education">Education</NavLink>
          </NavItem>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookRounded />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2025 Niloy Chowdhury. All Rights Reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
