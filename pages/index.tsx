import { useQuery } from 'react-query';
import styled, { createGlobalStyle } from 'styled-components';
import Posts from '@/components/Posts/Posts';
import { PostType } from '@/types/post';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E3E4DB;
    font-family: "Lucida Console", Courier, monospace;
  }
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #8F6593;
  padding: 1rem;
`;

export default function Home() {
  const { data } = useQuery('fetchPosts', () =>
    fetch('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts').then(res =>
      res.json()
    )
  );

  const sortedPosts = (data ?? []).sort((a: PostType, b: PostType) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <>
      <GlobalStyle />
      <Title>Blog Posts</Title>
      <Posts postsPerPage={5} posts={sortedPosts} />
    </>
  );
};
