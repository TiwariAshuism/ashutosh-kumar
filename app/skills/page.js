"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import data from '../../data/data.json';
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

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

const SkillCategory = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "2rem",
  borderBottom: "1px solid #000",
  paddingBottom: "0.5rem",
  marginBottom: "1.5rem",
  width: "100%",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-1px",
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: "#000",
  },
}));

const BulletList = styled(List)({
  paddingLeft: "1rem",
  "& li": {
    display: "list-item",
    padding: "0.25rem 0",
    fontFamily: "var(--font-urbanist)",
    fontSize: "1.25rem",
  },
  listStyleType: "disc",
  marginLeft: "1rem",
});

// Motion components
const MotionContainer = motion(Container);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionListItem = motion(ListItem);

export default function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const skillCategoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <MotionContainer
      maxWidth="lg"
      sx={{ mt: 8, mb: 8 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox variants={headingVariants}>
        <SectionTitle>SKILLS AND EXPERTISE</SectionTitle>
        <MainTitle>How I Add Value</MainTitle>
        <SubTitle>
          As a Computer Science student specializing in Machine Learning with
          hands-on experience across AI, full-stack development, and cloud
          technologies, I deliver comprehensive solutions from concept to
          deployment.
        </SubTitle>
      </MotionBox>

      {/* Skills Section */}
      <MotionGrid container>
        <Grid item xs={12}>
          {data.skills.map((skillGroup, index) => (
            <MotionBox key={index} sx={{ mb: 5 }} variants={skillCategoryVariants}>
              <SkillCategory>{skillGroup.category}</SkillCategory>
              <Box sx={{ ml: 1 }}>
                <BulletList>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <MotionListItem key={skillIndex} variants={listItemVariants}>
                      {skill}
                    </MotionListItem>
                  ))}
                </BulletList>
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </MotionGrid>
    </MotionContainer>
  );
}
