import React from "react";
import styled from "styled-components";
import { educations } from "../data/constants";
import EducationCard from "./cards/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the styles for the vertical timeline
import EarthCanvas from "../canvas/Earth";

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

const Education = () => {
  return (
      <Container id="Education">
        <Wrapper>
          <Title>Education</Title>
          <Desc>
            My education has been a journey of self-discovery educatoinal
            details are as follows
          </Desc>
          <VerticalTimeline>
            {educations.map((education, index1) => (
              <EducationCard key={index1} education={education} />
            ))}
          </VerticalTimeline>
          <EarthCanvas />
        </Wrapper>
      </Container>
  );
};

export default Education;
