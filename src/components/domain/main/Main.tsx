import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";

import { getStaticProps } from "pages";
import { getSortedPostsData } from "lib/posts";
import Posts from "../posts/Posts";
import * as S from "./Main.styled";

const Main = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <S.Section>
      <S.Main>
        <Image
          priority
          src="/images/profile.jpeg"
          height={144}
          width={144}
          alt="현진-로그"
        />
        <h1>현진-로그</h1>
      </S.Main>
      <p>프론트엔드 주니어 개발자 현진입니다 :D</p>
      <p>주로 겪은 일들과 깨닳은 점들에 대해 업로드합니다.</p>
      <p>
        WIL + 공부 정리는{" "}
        <a href="https://zinnli.github.io/">이 곳에 있습니다</a>
      </p>
      <Posts posts={posts} />
    </S.Section>
  );
};

export default Main;
