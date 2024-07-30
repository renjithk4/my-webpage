// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  padding: 50px;
  background-color: #fff;
`;

const Project = styled(motion.div)`
  margin-bottom: 20px;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
`;

const projectVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

const Projects = () => (
  <ProjectsContainer>
    <h2>Projects</h2>
    <Project
      variants={projectVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h3>Machine Learning for Image Classification</h3>
      <p>
        Developed an image classification model using deep learning techniques to classify images with high accuracy. Used TensorFlow and Keras for model development.
      </p>
    </Project>
    <Project
      variants={projectVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3>Anomaly Detection in Manufacturing</h3>
      <p>
        Created an anomaly detection system for a toy rocket manufacturing pipeline. Used machine learning and computer vision techniques to identify anomalies and improve manufacturing efficiency.
      </p>
    </Project>
  </ProjectsContainer>
);

export default Projects;
