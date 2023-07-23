import React from "react";

import { Layout } from "@/components";
import * as S from "./PostContainer.styled";

interface ContainerProps {
  postData: { [key: string]: string };
}

const PostContainer = ({ postData }: ContainerProps) => {
  return (
    <Layout>
      <S.Title>{postData.title}</S.Title>
      <S.Date>{postData.date}</S.Date>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default PostContainer;
