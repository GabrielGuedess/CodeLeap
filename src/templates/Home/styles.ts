import styled, { css } from 'styled-components';

import { Container } from 'components/atoms/Container';

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    background: ${theme.colors.white};
  `}
`;

export const WrapperContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 2.4rem 2.4rem;
`;
