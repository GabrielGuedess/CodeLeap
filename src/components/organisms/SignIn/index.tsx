import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAuth } from 'hooks/useAuth';

import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { Title } from 'components/atoms/Title';

import * as S from './styles';

const usernameSchema = z.object({
  username: z
    .string()
    .nonempty('username is required!')
    .min(5, 'username must contain at least 5 characters')
    .max(20, 'username must contain at most 20 characters'),
});

type UsernameSchemaProps = z.infer<typeof usernameSchema>;

export const SignIn = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<UsernameSchemaProps>({
    resolver: zodResolver(usernameSchema),
  });

  const { push } = useRouter();

  const handleUsername = async (data: UsernameSchemaProps) => {
    await signIn(data.username);

    push('/posts');
  };

  return (
    <S.Wrapper size="small">
      <Title as="h1">Welcome to CodeLeap network!</Title>

      <S.Form onSubmit={handleSubmit(handleUsername)}>
        <Input
          title="Please enter your username"
          placeholder="John doe"
          aria-label="username"
          errorMessage={errors.username?.message}
          {...register('username')}
        />

        <S.WrapperButtons>
          <Button disabled={!isDirty} title="ENTER" />
        </S.WrapperButtons>
      </S.Form>
    </S.Wrapper>
  );
};
