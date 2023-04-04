import { PostType } from '@/types/post';
import {
  Container,
  Divider,
  Card,
  CardHeader,
  CardTitle,
  CardSubTitle,
  CardBody,
  AuthorSection,
  AuthorName,
  CardFooter
} from './styles.ts';

const dateFormatting = (date: Date) => {
  return new Date(date).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export type Props = {
  post: PostType
};

export default function Post({ post }: Props) {
  return (
    <Container data-testid='post-card'>
      <Card key={post.id}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardSubTitle>Posted on {dateFormatting(post.createdAt)}</CardSubTitle>
        </CardHeader>
        <CardBody>
          {post.description}
          <AuthorSection>
            <CardSubTitle>Written by</CardSubTitle>
            <AuthorName>{post.authors.map((author) => author.name).join(', ')}</AuthorName>
          </AuthorSection>
          <Divider />
        </CardBody>
        <CardFooter>
          <CardSubTitle>Comments:</CardSubTitle>
          {post.comments.map((comment) => (
            <div key={`${comment.id}`}>
              {comment.title}
              {comment.description}
            </div>
          ))}
        </CardFooter>
      </Card>
    </Container>
  );
}
