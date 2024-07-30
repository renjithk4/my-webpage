// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg'; // Ensure you have a profile photo in the assets folder
import decorativePhoto from '../assets/decorative.jpg'; // Ensure you have a decorative photo in the assets folder

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const DecorativeImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${decorativePhoto});
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: -50px; // Adjust to overlap with the decorative image if needed
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
`;

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

const About = () => (
  <AboutContainer>
    <DecorativeImageContainer />
    <ContentContainer>
      <TextContainer>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          I am a master's student at the University of South Carolina with a focus on ML.  I am passionate about developing innovative solutions to complex problems.
        </motion.p>
      </TextContainer>
      <ProfileContainer>
        <ProfileImage src={profilePhoto} alt="Profile" />
      </ProfileContainer>
    </ContentContainer>
  </AboutContainer>
);

export default About;
