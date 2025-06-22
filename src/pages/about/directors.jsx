import React from "react";
import Head from "next/head";
import HeroSection from "@/components/pages/boardOfDirectors/HeroSection";
import DirectorsGrid from "@/components/pages/boardOfDirectors/DirectorsGrid";
import boardOfDirectorsData from "@/data/boardOfDirectorsData";

const BoardOfDirectorsPage = () => {
  return (
    <>
      <Head>
        <title>Board of Directors – Bangladesh Finance Capital</title>
      </Head>
      <HeroSection {...boardOfDirectorsData.hero} />
      <DirectorsGrid directors={boardOfDirectorsData.directors} />
    </>
  );
};

export default BoardOfDirectorsPage;
