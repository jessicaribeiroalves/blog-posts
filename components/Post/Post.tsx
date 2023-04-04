import styled from 'styled-components';
import { PostType } from '@/types/post';


const Container = styled.div`
  padding: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 0px;
  word-wrap: break-word;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.375rem;
  color: #1A202C;
  -webkit-box-align: center;
`;

const CardHeader = styled.div`
  padding: 1.25rem;
  border-color: #E2E8F0;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  &:hover {
      color: #AEA4BF;
      cursor: pointer
    }
`;

const CardBody = styled.div`
  padding: 1.25rem;
  flex: 1 1 0%;
`;

const CardFooter = styled.div`
  display: flex;
  padding: 1.25rem;
`;

export type Props = {
  post: PostType
};

export default function Post({ post }: Props) {
  return (
    <Container data-testid='post-card'>
      <Card key={post.id}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <div>{post.description}</div>
          <div>Posted on
            {post.createdAt.toLocaleString("en-US", { timeZone: "Canada/Eastern", }).slice(0, 10)}
            by {post.authors.map((author) => (
              <div key={author.id}>
                {author.name}
              </div>
            ))}
          </div>
        </CardBody>
        <CardFooter>
          <div>Comments: {post.comments.map((comment) => (
            <div key={`${comment.id}`}>
              {comment.title}
              {comment.description}
            </div>
          ))}
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
}
