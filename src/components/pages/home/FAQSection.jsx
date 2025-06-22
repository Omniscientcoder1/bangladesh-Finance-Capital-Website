import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "@/data/fAQSectionData";

const FAQSection = () => {
  return (
    <Box component="section" sx={{ py: 6, backgroundColor: "#f4f6f8" }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {data.title}
        </Typography>

        {data.faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))} 
      </Container>
    </Box>
  );
};

export default FAQSection;
