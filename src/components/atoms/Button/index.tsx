import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';

import { CircleNotch } from 'phosphor-react';

import * as S from './styles';

type ButtonTypesProps =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary' | 'alert' | 'outline';
  isLoading?: boolean;
  as?: React.ElementType;
} & ButtonTypesProps;

export const Button = ({
  title,
  variant = 'primary',
  isLoading = false,
  as = 'button',
  ...props
}: ButtonProps) => (
  <S.Wrapper as={as} isLoading={isLoading} variant={variant} {...props}>
    {isLoading ? (
      <CircleNotch size={18} aria-label="Spinner">
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
    ) : (
      title
    )}
  </S.Wrapper>
);
