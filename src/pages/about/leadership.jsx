import React from "react";
import Head from "next/head";
import HeroSection from "@/components/pages/boardOfDirectors/HeroSection";
import LeadersGrid from "@/components/pages/leadership/LeadersGrid";
import leadershipTeamData from "@/data/leadershipTeamData";

const LeadershipPage = () => {
  return (
    <>
      <Head>
        <title>Leadership Team – Bangladesh Finance Capital</title>
      </Head>
      <HeroSection {...leadershipTeamData.hero} />
      <LeadersGrid members={leadershipTeamData.members} />
    </>
  );
};

export default LeadershipPage;
