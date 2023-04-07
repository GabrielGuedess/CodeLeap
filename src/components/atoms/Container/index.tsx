import styled, { css } from 'styled-components';

import { customMedia } from 'utils/media/customMedia';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 1.6rem;

    ${customMedia.greaterThan('normal')`
      margin-left: auto;
      margin-right: auto;
    `}
  `}
`;
