import { Title } from 'components/atoms/Title';

import * as S from './styles';

export type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => (
  <S.Wrapper>
    <Title color="secondary" as="h1">
      {title}
    </Title>
  </S.Wrapper>
);
