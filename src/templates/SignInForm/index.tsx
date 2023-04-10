import { useRouter } from 'next/router';

import { useAuth } from 'hooks/useAuth';

import { SignIn } from 'components/organisms/SignIn';

import * as S from './styles';

export const SignInForm = () => {
  const { push } = useRouter();
  const { username } = useAuth();

  if (!!username) {
    push('/posts');
  }

  return (
    <S.Wrapper>
      <SignIn />
    </S.Wrapper>
  );
};
