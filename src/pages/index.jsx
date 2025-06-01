import React from "react";

import Banner from "../components/Banner";
import PageContent from "../components/PageContent";
import HeroBanner from "@/components/home/HeroBanner";


const Home = () => {
  return (
    <>
     
      <Banner />
      <HeroBanner />
      <PageContent>
        <h1>Empowering Financial Growth</h1>
        <p>
          Bangladesh Finance Capital is your trusted partner in capital market solutions,
          ensuring transparency, innovation, and growth.
        </p>
      </PageContent>
     
    </>
  );
};

export default Home;
