// src/components/Experience.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  padding: 50px;
  background-color: #f0f0f0;
`;

const Job = styled(motion.div)`
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const jobVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

const Experience = () => (
  <ExperienceContainer>
    <h2>Experience</h2>
    <Job
      variants={jobVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h3>Research Assistant</h3>
      <p>
        Worked on AI institute at USC.
      </p>
    </Job>
    <Job
      variants={jobVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3>Goldman Sachs - Summer Analyst</h3>
      <p>
        Assisted in migrating a JMS publisher-consumer system to a Kafka-based system, enhancing data processing efficiency and scalability.
      </p>
    </Job>
  </ExperienceContainer>
);

export default Experience;
