import React from "react";

import Banner from "../components/Banner";
import PageContent from "../components/PageContent";
import HeroBanner from "@/components/pages/home/HeroBanner";
import AboutOverview from "@/components/pages/home/AboutOverview";
import ServiceHighlights from "@/components/pages/home/ServiceHighlights";
import StatsCounter from "@/components/pages/home/StatsCounter";
import TeamSpotlight from "@/components/pages/home/MessageFromCeo";
import NewsPreview from "@/components/pages/home/NewsPreview";
import ClientLogos from "@/components/pages/home/ClientLogos";
import CTASection from "@/components/pages/home/CTASection";
import FAQSection from "@/components/pages/home/FAQSection";


const Home = () => {
  return (
    <>
     
      <Banner />
      {/* <HeroBanner /> */}
      <AboutOverview />
      <ServiceHighlights />
      <StatsCounter />
      <TeamSpotlight />
      <NewsPreview />
      <ClientLogos />
      <CTASection />
      <FAQSection />

     
    </>
  );
};

export default Home;
