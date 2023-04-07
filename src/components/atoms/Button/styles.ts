import styled, { css } from 'styled-components';

import { grayscale, darken } from 'polished';

import { type ButtonProps } from '.';

export const Wrapper = styled.div<Pick<ButtonProps, 'hasMargin'>>`
  ${({ hasMargin }) => css`
    display: flex;
    justify-content: end;
    width: 100%;
    margin-top: ${hasMargin ? 1.6 : 0}rem;
  `}
`;

export const Button = styled.button<Pick<ButtonProps, 'isLoading'>>`
  ${({ theme, isLoading }) => css`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    padding: 0.68rem 3rem;

    font-size: 1.6rem;
    color: ${theme.colors.white};
    text-transform: uppercase;

    background: ${isLoading
      ? darken(0.1, theme.colors.primary)
      : theme.colors.primary};
    border: none;
    border-radius: 0.8rem;

    transition: ${theme.transition.default};

    :disabled {
      cursor: not-allowed;
      background: ${grayscale(theme.colors.primary)};
    }

    :not(:disabled):is(:hover, :focus) {
      background: ${darken(0.1, theme.colors.primary)};
    }
  `}
`;
