import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import data from "@/data/statsCounterData.js";

const StatsCounter = () => {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: "#f9fafe" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ color: "#003366", mb: 4 }}
        >
          {data.title}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {data.stats.map((stat, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 1,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 3,
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#003366" }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsCounter;
