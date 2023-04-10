import { useForm } from 'react-hook-form';
import uuid from 'react-uuid';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleNotch } from 'phosphor-react';
import { z } from 'zod';

import { useAuth } from 'hooks/useAuth';
import { usePost } from 'hooks/usePost';

import { Button } from 'components/atoms/Button';
import { Empty } from 'components/atoms/Empty';
import { Input } from 'components/atoms/Input';
import { TextArea } from 'components/atoms/TextArea';
import { Title } from 'components/atoms/Title';
import { Header } from 'components/molecules/Header';
import { Post } from 'components/organisms/Post';

import * as S from './styles';

const createSchema = z.object({
  title: z
    .string()
    .nonempty('title is required!')
    .max(100, 'title must contain at most 100 characters'),
  content: z
    .string()
    .nonempty('content is required!')
    .max(3000, 'content must contain at most 100 characters'),
});

type CreateSchemaProps = z.infer<typeof createSchema>;

export const Home = () => {
  const [parent] = useAutoAnimate();

  const { username } = useAuth();
  const { posts, createPost, isLoading } = usePost();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<CreateSchemaProps>({
    resolver: zodResolver(createSchema),
  });

  const handleCreatePost = async (data: CreateSchemaProps) => {
    await createPost({
      id: uuid(),
      title: data.title,
      content: data.content,
      createdAt: new Date(),
      username,
    });

    reset();
  };

  return (
    <S.Wrapper>
      <Header title="CodeLeap Network" />

      <S.WrapperContent ref={parent}>
        <Title as="h2">What’s on your mind?</Title>

        <S.Form onSubmit={handleSubmit(handleCreatePost)}>
          <Input
            title="Title"
            aria-label="Title"
            placeholder="Hello world"
            errorMessage={errors.title?.message}
            {...register('title')}
          />
          <TextArea
            title="Content"
            aria-label="Content"
            placeholder="Content here"
            errorMessage={errors.content?.message}
            {...register('content')}
          />

          <S.WrapperButtons>
            <Button title="CREATE" disabled={!isDirty || !isValid} />
          </S.WrapperButtons>
        </S.Form>

        {isLoading && (
          <S.WrapperSpinner>
            <CircleNotch size={36} aria-label="Spinner">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="0.6s"
                from="0 0 0"
                to="360 0 0"
                repeatCount="indefinite"
              />
            </CircleNotch>
          </S.WrapperSpinner>
        )}

        {!isLoading && posts?.length === 0 && <Empty />}

        {posts?.length > 0 &&
          posts.map(post => (
            <Post
              key={post.id}
              id={post.id!}
              title={post.title}
              username={post.username}
              createdAt={post.createdAt}
              content={post.content}
            />
          ))}
      </S.WrapperContent>
    </S.Wrapper>
  );
};
