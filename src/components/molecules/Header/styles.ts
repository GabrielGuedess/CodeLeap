import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 2.7rem 3.7rem;

    color: ${theme.colors.white};

    background: ${theme.colors.primary};

    svg {
      cursor: pointer;
    }
  `}
`;
