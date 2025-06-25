import React from "react";
import Head from "next/head";
import HeroSection from "@/components/shared/HeroSection";
import DocumentTable from "@/components/shared/DocumentTable";
import data from "@/data/updates/industryUpdateData";

const Page = () => (
  <>
    <Head>
      <title>{`${data.heroTitle} – Bangladesh Finance Capital`}</title>
    </Head>
    <HeroSection
      title={data.heroTitle}
      subtitle={data.heroSubtitle}
      image={data.heroImage}
    />
    <DocumentTable documents={data.documents} />
  </>
);

export default Page;
