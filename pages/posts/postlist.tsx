import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

interface PostListProps {
  allPostsData: any;
}

export default function PostList({ allPostsData }: PostListProps) {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (allPostsData) {
      setState(allPostsData);
    }
  }, []);

  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {state.map(({ id, date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
