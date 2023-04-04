import { useState } from 'react';
import Post from '@/components/Post/Post';
import { PostType } from '@/types/post';
import { Container, Footer, Button } from './styles.ts';

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
