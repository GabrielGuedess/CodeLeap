import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { useId } from 'react';

import * as S from './styles';

export type TextAreaProps = {
  title: string;
  errorMessage?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaRef: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ title, errorMessage, ...props }, ref) => {
  const id = useId();

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{title}</S.Label>

      <S.TextArea ref={ref} hasError={!!errorMessage} id={id} {...props} />
      {!!errorMessage && <S.Error>{errorMessage}</S.Error>}
    </S.Wrapper>
  );
};

export const TextArea = forwardRef(TextAreaRef);
