import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Posts from '@/components/Posts/Posts';

const createPosts = (count: number) =>
    new Array(count).fill(0).map((value, index) => ({
        title: 'test',
        description: 'string',
        createdAt: new Date(),
        updatedAt: new Date(),
        id: `${index}`,
        authors: [],
        comments: []
    }));


describe('Posts', () => {

    describe('with 7 posts', () => {
        beforeEach(() => {
            render(<Posts postsPerPage={5} posts={createPosts(7)} />);
        });

        it('should render pagination buttons correctly when on first page', () => {
            expect(screen.getByTestId('posts-container')).toBeInTheDocument();
            expect(screen.queryAllByTestId('post-card')).toHaveLength(5);
            expect(screen.queryAllByTestId('pagination-number')).toHaveLength(2);
            expect(screen.getByTestId('pagination-previous')).toBeDisabled();
            expect(screen.getByTestId('pagination-next')).toBeEnabled();
        });

        it('should render pagination buttons correctly when on second page', () => {
            fireEvent.click(screen.getByTestId('pagination-next'));
            expect(screen.queryAllByTestId('post-card')).toHaveLength(2);
            expect(screen.getByTestId('pagination-previous')).toBeEnabled();
            expect(screen.getByTestId('pagination-next')).toBeDisabled();
        });
    });

    describe('with 25 posts', () => {
        beforeEach(() => {
            render(<Posts postsPerPage={3} posts={createPosts(25)} />);
        });

        it('should render pagination buttons correctly when on first page', () => {
            expect(screen.getByTestId('posts-container')).toBeInTheDocument();
            expect(screen.queryAllByTestId('post-card')).toHaveLength(3);
            expect(screen.queryAllByTestId('pagination-number')).toHaveLength(3);
            expect(screen.getByTestId('pagination-previous')).toBeDisabled();
            expect(screen.getByTestId('pagination-next')).toBeEnabled();
        });

        it('should render pagination buttons correctly when on second page', () => {
            fireEvent.click(screen.getByTestId('pagination-next'));
            expect(screen.queryAllByTestId('post-card')).toHaveLength(3);
            expect(screen.queryAllByTestId('pagination-number')).toHaveLength(4);
            expect(screen.getByTestId('pagination-previous')).toBeEnabled();
            expect(screen.getByTestId('pagination-next')).toBeEnabled();
        });

        it('should render pagination buttons correctly when on third page', () => {
            fireEvent.click(screen.getByText('3'));
            expect(screen.queryAllByTestId('post-card')).toHaveLength(3);
            expect(screen.queryAllByTestId('pagination-number')).toHaveLength(5);
            expect(screen.getByTestId('pagination-previous')).toBeEnabled();
            expect(screen.getByTestId('pagination-next')).toBeEnabled();
        });
    });
});
