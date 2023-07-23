import { Layout, Posts } from "@/components";
import { getSortedPostsData } from "../../lib/posts";

const PostLists = ({ posts }) => {
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
};

export default PostLists;

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
