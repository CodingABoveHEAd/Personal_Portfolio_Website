import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../data/constants";
import ProjectCard from "./cards/ProjectCard";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
  padding: 0 16px;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
    background : ${theme.primary + 20}
    `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary + 20};
`;

const CardContainer = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web applications to
          automation tools, each project showcases my passion for building
          efficient and user-friendly solutions. Here are some of my projects
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "android app"}
            onClick={() => setToggle("android app")}
          >
            Android App
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            machine Learning
          </ToggleButton>
        </ToggleButtonGroup>
       <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
