import React from "react";
import Head from "next/head";
import ServiceDetail from "@/components/shared/service/ServiceDetail";
import data from "@/data/services/discretionaryServiceData";

const Page = () => (
  <>
    <Head>
      <title>{data.title} – Bangladesh Finance Capital</title>
    </Head>
    <ServiceDetail {...data} />
  </>
);

export default Page;
