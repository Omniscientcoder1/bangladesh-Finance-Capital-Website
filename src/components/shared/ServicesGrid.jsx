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

const ServicesGrid = ({ services }) => {
  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
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
                    alt={service.name}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover"
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {service.name}
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

export default ServicesGrid;
