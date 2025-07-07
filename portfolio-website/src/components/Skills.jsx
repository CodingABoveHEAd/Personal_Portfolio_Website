import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
display: flex;
flex-direction: column;
position: relative;
z-index: 1;
justify-content: center;
align-items: center;
`;

const Wrapper=styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
max-width: 1100px;
gap:12px;

@media screen and (max-width: 960px) {
    flex-direction: column;
}
`;
const Title=styled.div`
font-size: 52px;
font-weight: 600;
margin-top: 20px;
text-align: center;
color: ${({ theme }) => theme.text_primary};

@media screen and (max-width: 960px) {
    font-size: 32px;
    margin-top: 12px;
}
`;
const Desc=styled.div`
font-size: 18px;
text-align: center;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};

@media screen and (max-width: 768px) {
    font-size: 16px;
}
`;


const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
        Here are some of the skills I have acquired over the years:
        </Desc>
      </Wrapper>
    </Container>
  )
}

export default Skills
