import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './theme';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

const Body = styled.div`
width: 100%;
height:90vh;
overflow-x: hidden;
position: relative;
color: ${({ theme }) => theme.text_primary};
background-color: ${({ theme }) => theme.bg};
`;

function app(){
  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
<Navbar/>
<Body>
<Hero />
<Skills/>
</Body>
    </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default app;
