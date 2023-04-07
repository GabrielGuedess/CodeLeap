import { forwardRef, type InputHTMLAttributes } from 'react';
import { useId } from 'react';

import * as S from './styles';

export type InputProps = {
  title: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { title, errorMessage, ...props },
  ref,
) => {
  const id = useId();

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{title}</S.Label>

      <S.Input ref={ref} hasError={!!errorMessage} id={id} {...props} />
      {!!errorMessage && <S.Error>{errorMessage}</S.Error>}
    </S.Wrapper>
  );
};

export const Input = forwardRef(InputRef);
