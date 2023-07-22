import { Layout, Posts } from "@/components";
import { getSortedPostsData } from "../../lib/posts";

const PostList = ({ allPostsData }) => {
  return (
    <Layout>
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
};

export default PostList;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
