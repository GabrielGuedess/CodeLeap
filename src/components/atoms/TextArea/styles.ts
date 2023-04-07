import styled, { css } from 'styled-components';

import * as LabelRadix from '@radix-ui/react-label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled(LabelRadix.Root)`
  font-size: 1.6rem;
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    resize: vertical;

    width: 100%;
    min-height: 7.4rem;
    padding: 0.8rem 1.12rem;

    font-size: 1.4rem;

    border: 1px solid ${theme.colors.inputBorder};
    border-radius: 0.8rem;

    ::placeholder {
      color: ${theme.colors.secondaryText};
    }
  `}
`;
