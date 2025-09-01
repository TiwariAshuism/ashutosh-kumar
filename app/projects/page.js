"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectBox from "../../components/ProjectBox";
import { motion } from "framer-motion";
import data from '../../data/data.json';

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#4DB4D7",
  textTransform: "uppercase",
  letterSpacing: "5px",
  marginBottom: "1rem",
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "3.5rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.2rem",
  color: "#666",
  marginBottom: "3rem",
  maxWidth: "1000px",
}));

const ProjectsWrapper = styled(Box)({
  overflow: "hidden",
  margin: "0 -24px",
  padding: "0 24px",
});

const ProjectsContainer = styled(Box)({
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const ProjectRows = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  paddingTop: "10px",
  paddingBottom: "48px",
  width: "max-content",
});

const ProjectRow = styled(Box)({
  display: "flex",
  gap: "24px",
});

// Motion components
const MotionContainer = motion(Container);
const MotionBox = motion(Box);
const MotionProjectBox = motion.div;

export default function Projects() {
  const { projects } = data;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <MotionContainer
      maxWidth="lg"
      sx={{ mt: 8 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox variants={headingVariants}>
        <SectionTitle>PROJECTS</SectionTitle>
        <MainTitle>Projects I've Made</MainTitle>
        <SubTitle>
          From intelligent AI applications to full-stack web solutions – I
          transform ideas into powerful, user-focused technology that solves
          real problems.
        </SubTitle>
      </MotionBox>

      <ProjectsWrapper>
        <ProjectsContainer>
          <ProjectRows>
            <ProjectRow>
              {projects.row1.map((project, index) => (
                <MotionProjectBox
                  key={index}
                  variants={projectVariants}
                  custom={index}
                >
                  <ProjectBox {...project} />
                </MotionProjectBox>
              ))}
            </ProjectRow>
            <ProjectRow>
              {projects.row2.map((project, index) => (
                <MotionProjectBox
                  key={index}
                  variants={projectVariants}
                  custom={index}
                >
                  <ProjectBox {...project} />
                </MotionProjectBox>
              ))}
            </ProjectRow>
          </ProjectRows>
        </ProjectsContainer>
      </ProjectsWrapper>
    </MotionContainer>
  );
}
