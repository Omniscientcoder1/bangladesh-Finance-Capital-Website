// src/components/pages/ourStory/MissionVision.jsx
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const MissionVision = ({ mission, vision }) => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f4f6f8" }}>
      <Container>
        <Grid container spacing={6}>
          {/* Mission Block */}
          <Grid item xs={12} md={6}>
            {mission?.title && (
              <>
                <Typography variant="h5" gutterBottom>
                  {mission.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", lineHeight: 1.7 }}
                >
                  {mission.text}
                </Typography>
              </>
            )}
          </Grid>

          {/* Vision Block */}
          <Grid item xs={12} md={6}>
            {vision?.title && (
              <>
                <Typography variant="h5" gutterBottom>
                  {vision.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", lineHeight: 1.7 }}
                >
                  {vision.text}
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVision;
