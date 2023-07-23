import Head from "next/head";
import Link from "next/link";
import React from "react";

import * as S from "./Header.styled";

const Header = () => {
  const nav = [
    { title: "HOME", location: "/" },
    { title: "POST", location: "/posts" },
  ];

  return (
    <S.Header>
      <Head>
        <title>현진</title>
      </Head>
      <S.HeaderLink href="/" key="현진">
        ZINNLI
      </S.HeaderLink>
      <S.PageWrapper>
        {nav.map((item) => {
          return (
            <S.HeaderLink href={item.location} key={item.title}>
              {item.title}
            </S.HeaderLink>
          );
        })}
      </S.PageWrapper>
    </S.Header>
  );
};

export default Header;
