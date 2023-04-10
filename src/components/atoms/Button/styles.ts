import { type DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components';

import { grayscale, darken } from 'polished';

type ButtonProps = {
  isLoading: boolean;
  variant: 'primary' | 'secondary' | 'alert' | 'outline';
};

const buttonModifiers = {
  primary: (theme: DefaultTheme, isLoading: boolean) => css`
    background: ${isLoading
      ? darken(0.1, theme.colors.primary)
      : theme.colors.primary};

    :not(:disabled):is(:hover, :focus) {
      background: ${darken(0.1, theme.colors.primary)};
    }

    :disabled {
      cursor: not-allowed;
      background: ${grayscale(theme.colors.primary)};
    }
  `,
  secondary: (theme: DefaultTheme, isLoading: boolean) => css`
    background: ${isLoading
      ? darken(0.1, theme.colors.green)
      : theme.colors.green};

    :not(:disabled):is(:hover, :focus) {
      background: ${darken(0.1, theme.colors.green)};
    }

    :disabled {
      cursor: not-allowed;
      background: ${grayscale(theme.colors.green)};
    }
  `,
  alert: (theme: DefaultTheme, isLoading: boolean) => css`
    background: ${isLoading ? darken(0.1, theme.colors.red) : theme.colors.red};

    :not(:disabled):is(:hover, :focus) {
      background: ${darken(0.1, theme.colors.red)};
    }

    :disabled {
      cursor: not-allowed;
      background: ${grayscale(theme.colors.red)};
      box-shadow: ${theme.colors.red} 0px 0px 0px 1.5px;
    }
  `,
  outline: (theme: DefaultTheme, isLoading: boolean) => css`
    color: ${theme.colors.primaryText};
    background: transparent;
    border: 1px solid
      ${isLoading ? theme.colors.primaryText : theme.colors.borderButton};
    border-radius: 8px;

    :not(:disabled):is(:hover, :focus) {
      border: 1.5px solid ${theme.colors.primaryText};
    }
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, isLoading, variant }) => css`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 12rem;
    height: 3.2rem;

    font-size: 1.6rem;
    font-weight: 700;
    color: ${theme.colors.white};

    border: none;
    border-radius: 0.8rem;

    transition: ${theme.transition.default};

    ${buttonModifiers[variant!](theme, isLoading)}
  `}
`;
