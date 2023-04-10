import styled, { css } from 'styled-components';

import * as LabelRadix from '@radix-ui/react-label';

type TextAreaProps = {
  hasError: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled(LabelRadix.Root)`
  font-size: 1.6rem;
`;

export const TextArea = styled.textarea<TextAreaProps>`
  ${({ theme, hasError }) => css`
    resize: vertical;

    width: 100%;
    min-height: 7.4rem;
    max-height: 26rem;
    padding: 0.8rem 1.12rem;

    font-size: 1.4rem;

    border: 1px solid ${hasError ? theme.colors.red : theme.colors.inputBorder};
    border-radius: 0.8rem;

    :focus {
      box-shadow: ${theme.colors.boxShadow} 0px 0px 0px 1.5px;
    }

    ::placeholder {
      color: ${theme.colors.secondaryText};
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: 1.2rem;
    color: ${theme.colors.red};
  `}
`;
