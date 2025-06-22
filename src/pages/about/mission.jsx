// src/pages/about/mission.jsx
import React from "react";
import Head from "next/head";
import HeroSection from "@/components/pages/missionVision/HeroSection";
import MissionVisionContent from "@/components/pages/missionVision/MissionVisionContent";
import data from "@/data/missionVisionData";

const MissionPage = () => {
  return (
    <>
      <Head>
        <title>Mission & Vision – Bangladesh Finance Capital</title>
      </Head>
      <HeroSection {...data.hero} />
      <MissionVisionContent mission={data.mission} vision={data.vision} />
    </>
  );
};

export default MissionPage;
