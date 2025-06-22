// src/components/pages/missionVision/HeroSection.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const HeroSection = ({ title, subtitle, image }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 10,
        color: "white",
        textAlign: "center"
      }}
    >
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>{title}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
