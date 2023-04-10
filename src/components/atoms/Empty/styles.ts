import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 2.4rem;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-bottom: 2.4rem;

    font-size: 2.2rem;
    font-weight: 700;
    color: ${theme.colors.primaryText};
    text-align: center;
  `}
`;
