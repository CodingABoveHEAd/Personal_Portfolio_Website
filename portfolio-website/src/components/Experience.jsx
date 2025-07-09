import React from "react";
import styled from "styled-components";
import { experiences } from "../data/constants";
import ExperienceCard from "./cards/ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the styles for the vertical timeline


const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
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
margin-top: 100px;
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


const Experience = () => {
  return (
    <div>
      <Container id="Experience">
        <Wrapper>
          <Title>Experience</Title>
            <Desc>
            Simulated real-world development environments with version control (Git), REST API design, and deployment workflows with competitive mindset.
            </Desc>
          <VerticalTimeline>
            {experiences.map((experience,index1)=>(
                <ExperienceCard 
                    key={index1}
                    experience={experience}
                />
            )

            )}
          </VerticalTimeline>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Experience;
