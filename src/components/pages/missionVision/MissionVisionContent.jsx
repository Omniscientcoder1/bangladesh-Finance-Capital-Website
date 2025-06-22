// src/components/pages/missionVision/MissionVisionContent.jsx
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const MissionVisionContent = ({ mission, vision }) => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9fafc" }}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{mission.title}</Typography>
            <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: 1.7 }}>
              {mission.content}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{vision.title}</Typography>
            <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: 1.7 }}>
              {vision.content}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVisionContent;
