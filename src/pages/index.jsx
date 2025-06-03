import React from "react";

import Banner from "../components/Banner";
import PageContent from "../components/PageContent";
import HeroBanner from "@/components/home/HeroBanner";
import AboutOverview from "@/components/home/AboutOverview";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import StatsCounter from "@/components/home/StatsCounter";
import TeamSpotlight from "@/components/home/MessageFromCeo";
import NewsPreview from "@/components/home/NewsPreview";
import ClientLogos from "@/components/home/ClientLogos";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";


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
