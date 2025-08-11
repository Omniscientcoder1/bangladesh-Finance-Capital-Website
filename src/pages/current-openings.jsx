// src/pages/current-openings.jsx

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import HeroSection from "@/components/shared/HeroSection";
import currentOpenings from "@/data/currentOpeningsData";

const CARD_WIDTH = 320;
const CARD_HEIGHT = 480;
const IMAGE_HEIGHT = 200;

const CurrentOpeningsPage = () => {
  // Destructure hero data and job listings
  const [heroData, ...jobList] = currentOpenings;

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={heroData.heroTitle}
        subtitle={heroData.heroSubtitle}
        image={heroData.heroImage}
      />

      {/* Job Cards */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        {/* <Typography variant="h4" fontWeight="bold" mb={4} color="primary ">
          Current Openings
        </Typography> */}

        <Grid container spacing={4} justifyContent="center">
          {jobList.map((job) => (
            <Grid item key={job.id}>
              <Card
                sx={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    height: IMAGE_HEIGHT,
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={job.image}
                    alt={job.title}
                    sx={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      p: 1,
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, px: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {job.location}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: "justify" }}>
                    {job.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CurrentOpeningsPage;
