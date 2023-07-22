import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import * as S from "./layout.styled";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const name = "현징-로그";
export const siteTitle = "프론트엔드 개발자 현징입니다 :D";

export default function Layout({ children, home }: LayoutProps) {
  return (
    <S.Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <S.Header>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              height={144}
              width={144}
              alt={name}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpeg"
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2>
              <Link href="/">{name}</Link>
            </h2>
          </>
        )}
      </S.Header>
      <main>{children}</main>
      {!home && (
        <S.BackBtnWrapper>
          <Link href="/">← Back to home</Link>
        </S.BackBtnWrapper>
      )}
    </S.Container>
  );
}
