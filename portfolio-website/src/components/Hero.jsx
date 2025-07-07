import React from "react";
import styled from "styled-components";
import { Bio } from "../data/constants";
import Typewriter from "typwriter-effect";
import HeroImg from "../assets/hero.png"; // Ensure you have the correct path to your image
import HeroBgAnimation from "./HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation } from "../utils/motion";
import StarCanvas from "../canvas/Star"; // Ensure you have the correct path to your Star component

const HeroCont = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80 30px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const leftcont = styled.div`
  width: 100%;
  order: 1;
  //background-color: red;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
`;
const rightcont = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  /* background-color: blue; */

  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;

  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  //transition: all 0.3s ease-in-out;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0px;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );

  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  justify-content: flex-end;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media screen and (max-width: 960px) {
    justify-content: center;
    padding: 0px;
  }
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroCont>
        <HeroBg>
        <StarCanvas/>
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <leftcont>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.skills,
                        autoStart: true,
                        loop: true,
                        // delay: 75,
                        // deleteSpeed: 50,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <subTitle>{Bio.description}</subTitle>
              </motion.div>

              <ResumeButton>Check Resume</ResumeButton>
            </leftcont>
            <rightcont>
            <motion.div {...headContentAnimation}>
                 <Tilt>
                <Img src={HeroImg} alt="Niloy Chowdhury" />
              </Tilt>
            </motion.div>
             
            </rightcont>
          </HeroInnerContainer>
        </motion.div>
      </HeroCont>
    </div>
  );
};

export default Hero;
