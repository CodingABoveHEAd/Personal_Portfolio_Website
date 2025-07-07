import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import styled from 'styled-components'

const Top = styled.div`
width: 100%;
display: flex;
max-width: 100%;
gap: 12px;
`;
const Image = styled.img`
height:50px;
border-radius: 10px;
margin-top:4px;

@media screen and (max-width: 768px) {
    height: 40px;
}
`;
const Body = styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* gap: 4px; */
`;
const Role = styled.div`
font-weight: 600;
font-size: 18px;
color: ${({ theme }) => theme.text_primary + 99};

@media screen and (max-width: 768px) {
    font-size: 14px;
}
`;
const Company = styled.div`
font-size: 14px;
font-weight: 500;
color: ${({ theme }) => theme.text_secondary + 99};
@media screen and (max-width: 768px) {
    font-size: 12px;
}
`;
const Dt = styled.div`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 99};
@media screen and (max-width: 768px) {
    font-size: 10px;
}
`;

const Description = styled.div`
width: 100%; 
font-size: 15px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 99};
margin-bottom:10px;

@media screen and (max-width: 768px) {
    font-size: 12px;
}
`;
const Skills = styled.div`
width: 100%;
display: flex;
gap:12px;
margin-top: -10px;
`;
const Span = styled.span`
display: -webkit-box;
max-width: 100%;
`;

const Skill = styled.div`
font-size: 15px;
font-weight:400;
color: ${({ theme }) => theme.text_secondary + 99};
@media screen and (max-width: 768px) {
    font-size: 12px;
    }
`;

const ItemWrapper=styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`;

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            icon={
                <img
                    src={experience?.img}
                    width='100%'
                    height='100%'
                    alt={experience?.school}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
            }
            contentStyle={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                // background:'#1d1836',
                color: '#fff',
                boxShadow: "rgba(23,92,230,.15) 0px 4px 24px",
                border: '1px solid rgba(255,255,255,.125)',
                backgroundColor: "rgba(17,25,40,.83)",
                borderRadius: '6px',
            }}
            contentArrowStyle={{
                borderRight: '7px solid  rgba(255,255,255,0.3)',

            }}
            date={experience?.date}
        >
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Dt>{experience.date}</Dt>
                </Body>
            </Top>
            <Description>
                {experience?.desc && <Span>{experience.desc}</Span>}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <b>Skills</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index1) => (
                                <Skill>{Skill}</Skill>
                            ))}
                            </ItemWrapper>
                            
                        </Skills>
                    </>
                )}
            </Description>

        </VerticalTimelineElement>
    )
}

export default ExperienceCard
