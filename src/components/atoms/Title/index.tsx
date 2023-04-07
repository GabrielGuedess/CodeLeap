import * as S from './styles';

export type TitleProps = {
  color?: 'primary' | 'secondary';
  as?: 'h1' | 'h2';
  children: React.ReactNode;
};

export const Title = ({
  color = 'primary',
  as = 'h2',
  children,
}: TitleProps) => (
  <S.Title color={color} as={as}>
    {children}
  </S.Title>
);
