import React from "react";
import Link from "next/link";
import Head from "next/head";

import * as S from "./layout.styled";
import { Header } from "../common";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const name = "현진-로그";

export default function Layout({ children, home }: LayoutProps) {
  return (
    <S.Container>
      <Header />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "Hyunjin :D"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="Hyunjin :D" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      {!home && (
        <S.BackBtnWrapper>
          <Link href="/">← Back to home</Link>
        </S.BackBtnWrapper>
      )}
    </S.Container>
  );
}
