import React from "react";
import styled from "styled-components";
import { skills } from "../data/constants";
import Tilt from "react-parallax-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
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
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 20px;
  justify-content: center;
  gap: 50px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media screen and (max-width: 768px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.li`
  font-size: 16px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of the skills I have acquired over the years:</Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={index}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index2) => (
                    <SkillItem key={index2}>
                      <SkillImage src={item.image} />
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
