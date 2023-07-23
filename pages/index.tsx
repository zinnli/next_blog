import { ReactElement } from "react";
import { InferGetStaticPropsType, NextLayoutPage } from "next";
import Head from "next/head";

import { Layout, Main } from "@/components";
import { getSortedPostsData } from "lib/posts";

const Home: NextLayoutPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Main posts={posts} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout home>
      <Head>
        <meta property="og:title" content="Hyunjin :D" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="현진로그" />
      </Head>
      {page}
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = getSortedPostsData();

  return {
    props: {
      posts: posts.slice(0, 1),
    },
  };
}
