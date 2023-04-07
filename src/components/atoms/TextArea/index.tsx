import { type TextareaHTMLAttributes } from 'react';
import { useId } from 'react';

import * as S from './styles';

export type TextAreaProps = {
  title: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ title, ...props }: TextAreaProps) => {
  const id = useId();

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{title}</S.Label>

      <S.TextArea id={id} {...props} />
    </S.Wrapper>
  );
};
