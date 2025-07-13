import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Box
} from "@mui/material";
import Link from "next/link";

const serviceHighlights = [
  {
    id: "portfolio",
    title: "Portfolio Management",
    description: "Tailored investment portfolios aligned with your financial goals.",
    image: "/images/top-view-businessman-pointing-financial-statistics.jpg",
    link: "/services/portfolio"
  },
  {
    id: "banking",
    title: "Investment Banking",
    description: "Advisory and capital raising services for businesses.",
    image: "/images/loan-mortgage-payment-property-concept.jpg",
    link: "/services/banking"
  }
];

const ServiceHighlights = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {serviceHighlights.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Link href={service.link} passHref legacyBehavior>
              <Card
                sx={{
                  width: 320,
                  height: 420,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 }
                }}
              >
                <CardActionArea sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover"
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceHighlights;

