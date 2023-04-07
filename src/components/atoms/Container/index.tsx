import styled, { css } from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 1.6rem;

    ${media.greaterThan('large')`
      margin-left: auto;
      margin-right: auto;
    `}
  `}
`;
