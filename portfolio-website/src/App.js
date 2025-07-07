import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";

const Body = styled.div`
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper=styled.div`
padding-bottom: 100px;
background: linear-gradient(
38.73deg,
rgba(204,0,187,.15) 0%,
rgba(201,32,184,0) 50%

),

linear-gradient(
141.27deg,
rgba(0,70,209,0) 50%,
rgba(201,32,184,0) 100%
);
width: 100%;
clip-path:polygon(0 0,100% 0,100% 100%,30% 98%,0 100%);
`;

function app() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>

          <Education />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default app;
