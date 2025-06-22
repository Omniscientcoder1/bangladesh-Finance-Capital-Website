import React from "react";
import { Box, Container, Typography } from "@mui/material";

const CompanyJourney = ({ title, paragraphs }) => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          {title}
        </Typography>

        {Array.isArray(paragraphs) &&
          paragraphs.map((para, idx) => (
            <Typography
              key={idx}
              variant="body1"
              align="justify"
              sx={{ mb: 2, lineHeight: 1.8 }}
            >
              {para}
            </Typography>
          ))}
      </Container>
    </Box>
  );
};

export default CompanyJourney;
