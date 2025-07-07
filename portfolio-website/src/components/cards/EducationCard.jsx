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
const School = styled.div`
font-weight: 600;
font-size: 18px;
color: ${({ theme }) => theme.text_primary + 99};

@media screen and (max-width: 768px) {
    font-size: 14px;
}
`;
const Degree = styled.div`
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

const Grade=styled.div`
font-size:14px;
font-weight: 500;
color: ${({ theme }) => theme.text_secondary + 99};
`;

const Span=styled.span`
display: -webkit-box;
max-width: 100%;
`;

const EducationCard = ({ education }) => {
    return (
        <VerticalTimelineElement
            icon={
                <img
                    src={education?.img}
                    width='100%'
                    height='100%'
                    alt={education?.school}
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
            date={education?.date}
        >
            <Top>
                <Image src={education.img} />
                <Body>
                    <School>{education.school}</School>
                    <Degree>{education.degree}</Degree>
                    <Dt>{education.date}</Dt>
                </Body>
            </Top>
            <Grade>
                <b>Grade : </b>
                {education.grade}
            </Grade>
            <Description>
                {education?.desc && <Span>{education.desc}</Span>}
            </Description>

        </VerticalTimelineElement>
    )
}

export default EducationCard;
