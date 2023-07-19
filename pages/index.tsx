import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>프론트엔드 주니어 개발자 현징입니다 :D</p>
        <p>주로 겪은 일들과 깨닳은 점들에 대해 업로드합니다.</p>
        <p>
          WIL + 공부 정리는{" "}
          <a href="https://zinnli.github.io/">이 곳에 있습니다</a>
        </p>
        <div>
          <Link href="/posts/postlist">Post 고</Link>
        </div>
      </section>
    </Layout>
  );
}
