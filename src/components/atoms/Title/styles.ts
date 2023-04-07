import styled, { css } from 'styled-components';

import { type TitleProps } from '.';

export const Title = styled.h2<Pick<TitleProps, 'color'>>`
  ${({ theme, color }) => css`
    font-size: 2.2rem;
    font-weight: 700;
    color: ${color === 'primary'
      ? theme.colors.primaryText
      : theme.colors.white};
  `}
`;
