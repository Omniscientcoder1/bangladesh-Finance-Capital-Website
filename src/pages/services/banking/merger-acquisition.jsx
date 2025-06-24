import React from "react";
import Head from "next/head";
import ServiceDetail from "@/components/shared/service/ServiceDetail";
import data from "@/data/services/mergerAcquisitionData";
import HeroSection from "@/components/shared/HeroSection";

const Page = () => (
  <>
    <Head>
      <title>{data.title} – Bangladesh Finance Capital</title>
    </Head>
    <HeroSection
      title={data.heroTitle || data.title}
      subtitle={data.heroSubtitle}
      image={data.heroImage}
    />
    <ServiceDetail
      title={data.title}
      description={data.description}
      image={data.image}
    />
  </>
);

export default Page;