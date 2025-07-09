import React from "react";
import styled from "styled-components";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from '../images/IMG_20250709_152155.jpg' // Ensure you have the correct path to your image
import HeroBgAnimation from "./HeroBgAnimation";
import Tilt from "react-parallax-tilt";
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
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 100%); */
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
const Leftcont = styled.div`
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
const Rightcont = styled.div`
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
background-size: 200% 200%;
animation: gradientShift 5s ease infinite;

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

  appearance: button;
  text-decoration: none;
  cursor: pointer;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;
  background: linear-gradient(225deg, #7f00ff, #e100ff);
  box-shadow: 0 8px 20px rgba(129, 51, 255, 0.3),
              0 4px 10px rgba(255, 0, 255, 0.2);
  transition: all 0.4s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 40%);
    transform: rotate(25deg);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 10px 25px rgba(129, 51, 255, 0.4),
                0 6px 12px rgba(255, 0, 255, 0.25);
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
    <div id="About">
      <HeroCont>
        <HeroBg>
        <StarCanvas/>
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <Leftcont>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
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
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href="./resume/Niloy_Chowdhury_Resume.pdf" target="_blank">Check Resume</ResumeButton>
            </Leftcont>
            <Rightcont>
            <motion.div {...headContentAnimation}>
                 <Tilt>
                <Img src={HeroImg} alt="Niloy Chowdhury" />
              </Tilt>
            </motion.div>
             
            </Rightcont>
          </HeroInnerContainer>
        </motion.div>
      </HeroCont>
    </div>
  );
};

export default Hero;
