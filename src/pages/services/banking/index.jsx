import React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import ServicesGrid from "@/components/shared/ServicesGrid";
import investmentBankingServices from "@/data/investmentBankingServices";

const InvestmentBankingPage = () => {
  return (
    <>
      <Head>
        <title>Investment Banking – Bangladesh Finance Capital</title>
      </Head>

      <Box sx={{ pt: 10, px: 2 }}>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Investment Banking Services
        </Typography>
        <ServicesGrid services={investmentBankingServices} />
      </Box>
    </>
  );
};

export default InvestmentBankingPage;

