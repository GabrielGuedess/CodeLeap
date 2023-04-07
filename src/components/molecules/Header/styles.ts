import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: 2.7rem 3.7rem;
    background: ${theme.colors.primary};
  `}
`;
