import React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import ServicesGrid from "@/components/shared/ServicesGrid";
import portfolioManagementServices from "@/data/portfolioManagementServices";

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Management – Bangladesh Finance Capital</title>
      </Head>

      <Box sx={{ pt: 10, px: 2 }}>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Portfolio Management Services
        </Typography>
        <ServicesGrid services={portfolioManagementServices} />
      </Box>
    </>
  );
};

export default PortfolioPage;
