import { useRouter } from 'next/router';

import { SignOut } from 'phosphor-react';

import { useAuth } from 'hooks/useAuth';

import { Title } from 'components/atoms/Title';

import * as S from './styles';

export type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { push } = useRouter();
  const { signOut } = useAuth();

  const handleSignOut = () => {
    push('/');
    signOut();
  };

  return (
    <S.Wrapper>
      <Title color="secondary" as="h1">
        {title}
      </Title>

      <SignOut size={32} onClick={handleSignOut} aria-label="sign-out" />
    </S.Wrapper>
  );
};
