import styled, { css } from 'styled-components';

import { Box } from 'components/molecules/Box';

export const Wrapper = styled(Box)``;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

export const Username = styled.strong`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${theme.colors.username};
  `}
`;

export const Time = styled.span`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.username};
  `}
`;

export const Text = styled.span`
  font-size: 1.8rem;
`;
