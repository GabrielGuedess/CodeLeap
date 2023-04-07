import styled, { css } from 'styled-components';

import { type BoxProps } from '.';

const wrapperModifiers = {
  small: () => css`
    width: 50rem;
  `,
  normal: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.div<Pick<BoxProps, 'size'>>`
  ${({ theme, size }) => css`
    overflow: hidden;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    border-radius: 1.6rem;

    ${wrapperModifiers[size!]}
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
  padding: 2.4rem;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 2.7rem 3.7rem;

    background: ${theme.colors.primary};
  `}
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 2.38rem;
  align-items: center;
`;
