import { useState } from 'react';
import styled from 'styled-components';
import Post from '@/components/Post/Post';
import { PostType } from '@/types/post';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 42rem;
  padding: 1rem;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
`;

const Button = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => disabled ? '#CDCDCD' : '#8F6593'};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ disabled }) => disabled ? '#CDCDCD' : '#8F6593'};
  border-radius: 3px;
  &:hover {
      background: #AEA4BF;
      border: 2px solid #AEA4BF;
      cursor: pointer

    }
`;

export type Props = {
    postsPerPage: number
    posts: PostType[]
};

export default function Posts({ postsPerPage, posts }: Props) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const startRange = Math.max(1, currentPage - 2);
    const endRange = Math.min(Math.ceil(posts.length / postsPerPage), currentPage + 2)
    const pages = [];

    for (let page = startRange; page <= endRange; page++) {
        pages.push(page);
    }

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);

    };

    return (
        <Container data-testid='posts-container'>
            {posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((post: PostType) => (
                <Post key={post.id} post={post} />
            ))}
            <Footer>
                <Button data-testid='pagination-previous' onClick={goToPreviousPage} disabled={currentPage === 1}>&lt;&lt;</Button>
                {pages.map(page => <Button data-testid='pagination-number' key={page} onClick={() => setCurrentPage(page)}>{page}</Button>)}
                <Button data-testid='pagination-next' onClick={goToNextPage} disabled={Math.ceil(posts.length / postsPerPage) === currentPage}>&gt;&gt;</Button>
            </Footer>
        </Container>
    );
}
