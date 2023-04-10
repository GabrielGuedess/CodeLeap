import styled, { css } from 'styled-components';

import { type BoxProps } from '.';

const wrapperModifiers = {
  small: () => css`
    width: 50rem;
  `,
  normal: () => css`
    width: 100%;
  `,
  hasPadding: () => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 2.4rem;
  `,
};

export const Wrapper = styled.div<Pick<BoxProps, 'size' | 'hasPadding'>>`
  ${({ theme, size, hasPadding }) => css`
    overflow: hidden;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    border-radius: 1.6rem;

    ${wrapperModifiers[size!]}
    ${hasPadding && wrapperModifiers.hasPadding()}
  `}
`;
