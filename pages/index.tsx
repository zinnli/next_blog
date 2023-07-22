import { ReactElement } from "react";
import { NextLayoutPage } from "next";
import Head from "next/head";

import { Layout, siteTitle, Main } from "@/components";

const Home: NextLayoutPage = () => {
  return <Main />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {page}
    </Layout>
  );
};

export default Home;
