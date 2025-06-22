// src/components/pages/ourStory/MilestoneHighlights.jsx
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const MilestoneHighlights = ({ milestones }) => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {Array.isArray(milestones) &&
            milestones.map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box textAlign="center">
                  <Typography variant="h4" sx={{ color: "#002244", fontWeight: 600 }}>
                    {item.value}
                  </Typography>
                  <Typography variant="body2">{item.label}</Typography>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MilestoneHighlights;
