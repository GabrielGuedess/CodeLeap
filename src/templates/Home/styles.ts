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

export const WrapperButtons = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: end;

  width: 100%;
  margin-top: 1.6rem;
`;

export const WrapperSpinner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const WrapperContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 2.4rem 2.4rem;
`;
