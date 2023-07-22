import React from "react";

import { Layout } from "@/components";
import { getAllPostIds, getPostData } from "../../lib/posts";

interface PostProps {
  postData: { [key: string]: string };
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

interface ParamsProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: ParamsProps) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
