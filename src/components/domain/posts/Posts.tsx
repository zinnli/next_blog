import { useEffect, useState } from "react";
import Link from "next/link";

import * as S from "./Posts.styled";

interface PostsProps {
  posts: { [key: string]: string }[];
}

const Posts = ({ posts }: PostsProps) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (posts) {
      setState(posts);
    }
  }, []);

  return (
    <S.Section>
      <S.Heading>Post</S.Heading>
      <ul>
        {state.map(({ id, date, title }) => {
          return (
            <S.ListItem key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <S.SmallText>{date}</S.SmallText>
            </S.ListItem>
          );
        })}
      </ul>
    </S.Section>
  );
};

export default Posts;
