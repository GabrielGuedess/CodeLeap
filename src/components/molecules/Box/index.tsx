import { DeleteButton } from 'components/atoms/DeleteButton';
import { EditButton } from 'components/atoms/EditButton';
import { Title } from 'components/atoms/Title';

import * as S from './styles';

export type BoxProps = {
  title?: string;
  size?: 'small' | 'normal';
  children: React.ReactNode;
};

export const Box = ({ title, size = 'normal', children }: BoxProps) => (
  <S.Wrapper size={size}>
    {!!title && (
      <S.Header>
        <Title color="secondary">{title}</Title>

        <S.WrapperIcons>
          <DeleteButton />
          <EditButton />
        </S.WrapperIcons>
      </S.Header>
    )}

    <S.Content>{children}</S.Content>
  </S.Wrapper>
);
