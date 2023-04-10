import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import moment from 'moment';
import { z } from 'zod';

import { usePost } from 'hooks/usePost';

import { Button } from 'components/atoms/Button';
import { DeleteButton } from 'components/atoms/DeleteButton';
import { EditButton } from 'components/atoms/EditButton';
import { Input } from 'components/atoms/Input';
import { TextArea } from 'components/atoms/TextArea';
import { Title } from 'components/atoms/Title';
import { Modal } from 'components/molecules/Modal';

import { type PostDTO } from 'dtos/PostDTO';

import { type Required } from 'helpers/Required';

import * as S from './styles';

export type PostProps = Required<PostDTO>;

const postSchema = z.object({
  title: z
    .string()
    .nonempty('title is required!')
    .max(100, 'title must contain at most 100 characters'),
  content: z
    .string()
    .nonempty('content is required!')
    .max(3000, 'content must contain at most 100 characters'),
});

type PostSchemaProps = z.infer<typeof postSchema>;

export const Post = ({
  id,
  title,
  username,
  createdAt,
  content,
}: PostProps) => {
  const [open, setOpen] = useState(false);

  const { deletePost, editPost } = usePost();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<PostSchemaProps>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title,
      content,
    },
  });

  const timeAgo = moment(createdAt).fromNow();

  const handleEditPost = async (data: PostSchemaProps) => {
    await editPost({
      id,
      title: data.title,
      content: data.content,
      createdAt: new Date(),
      username,
    });

    setOpen(false);
  };

  return (
    <S.Wrapper hasPadding={false}>
      <S.Header>
        <Title color="secondary">{title}</Title>

        <S.WrapperIcons>
          <Modal trigger={<DeleteButton />}>
            <S.WrapperModal>
              <Title>Are you sure you want to delete this item?</Title>

              <S.WrapperButtons>
                <Button title="Cancel" variant="outline" as={Dialog.Close} />
                <Button
                  title="Delete"
                  aria-label="Delete"
                  variant="alert"
                  onClick={() => deletePost(id)}
                />
              </S.WrapperButtons>
            </S.WrapperModal>
          </Modal>

          <Modal open={open} onOpenChange={setOpen} trigger={<EditButton />}>
            <S.WrapperModal>
              <Title>Edit item</Title>

              <S.Form onSubmit={handleSubmit(handleEditPost)}>
                <Input
                  title="Title"
                  aria-label="Title"
                  placeholder="Hello world"
                  errorMessage={errors.title?.message}
                  {...register('title')}
                />
                <TextArea
                  title="Content"
                  placeholder="Content here"
                  errorMessage={errors.content?.message}
                  {...register('content')}
                />

                <S.WrapperButtons>
                  <Button title="Cancel" variant="outline" as={Dialog.Close} />
                  <Button
                    title="Save"
                    type="submit"
                    variant="secondary"
                    disabled={!isDirty || !isValid}
                  />
                </S.WrapperButtons>
              </S.Form>
            </S.WrapperModal>
          </Modal>
        </S.WrapperIcons>
      </S.Header>

      <S.WrapperContent>
        <S.Info>
          <S.Username>@{username}</S.Username>
          <S.Time>{timeAgo}</S.Time>
        </S.Info>

        <S.Content>{content}</S.Content>
      </S.WrapperContent>
    </S.Wrapper>
  );
};
