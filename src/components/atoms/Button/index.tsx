import { type ButtonHTMLAttributes } from 'react';

import { CircleNotch } from 'phosphor-react';

import * as S from './styles';

export type ButtonProps = {
  isLoading?: boolean;
  hasMargin?: boolean;
  title: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  isLoading = false,
  hasMargin = false,
  title,
  ...props
}: ButtonProps) => (
  <S.Wrapper hasMargin={hasMargin}>
    <S.Button isLoading={isLoading} {...props}>
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
    </S.Button>
  </S.Wrapper>
);
