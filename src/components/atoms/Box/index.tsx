import * as S from './styles';

export type BoxProps = {
  size?: 'small' | 'normal';
  hasPadding?: boolean;
  children: React.ReactNode;
};

export const Box = ({
  size = 'normal',
  hasPadding = true,
  children,
}: BoxProps) => (
  <S.Wrapper size={size} hasPadding={hasPadding}>
    {children}
  </S.Wrapper>
);
