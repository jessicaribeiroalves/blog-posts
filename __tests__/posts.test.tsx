import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Posts from '../pages/posts';


describe('Home', () => {
    beforeEach(() => {
        render(<Posts postsPerPage={5} posts={[
            {
                title: 'test',
                description: 'string',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: '1',
                authors: [],
                comments: []
            },
            {
                title: 'test',
                description: 'string',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: '2',
                authors: [],
                comments: []
            },
            {
                title: 'test',
                description: 'string',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: '3',
                authors: [],
                comments: []
            },
            {
                title: 'test',
                description: 'string',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: '4',
                authors: [],
                comments: []
            },
            {
                title: 'test',
                description: 'string',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: '5',
                authors: [],
                comments: []
            },
            {
                title: 'test',
                description: 'string',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: '6',
                authors: [],
                comments: []
            },
            {
                title: 'test',
                description: 'string',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: '7',
                authors: [],
                comments: []
            },
        ]} />);
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

    // it('should render pagination buttons correctly when having multiple pages', () => {
    // fireEvent.click(screen.getByTestId('pagination-next'));
    // expect(screen.queryAllByTestId('post-card')).toHaveLength(2);
    // expect(screen.getByTestId('pagination-previous')).toBeEnabled();
    // expect(screen.getByTestId('pagination-next')).toBeDisabled();
    // });
});
