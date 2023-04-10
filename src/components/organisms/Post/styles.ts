import styled, { css } from 'styled-components';

import { darken } from 'polished';
import media from 'styled-media-query';

import { Box } from 'components/atoms/Box';

export const Wrapper = styled(Box)`
  background: transparent;
`;

export const WrapperModal = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 2.7rem 3.7rem;

    background: ${theme.colors.primary};

    h2 {
      overflow: hidden;
      max-width: 80%;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `}
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 2.38rem;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: end;

  width: 100%;
  margin-top: 1.6rem;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
  padding: 2.4rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  ${media.lessThan('small')`
    flex-direction: column;
    gap: 1rem;
  `}
`;

export const Username = styled.strong`
  ${({ theme }) => css`
    overflow: hidden;

    max-width: 50%;

    font-size: 1.3rem;
    font-weight: 700;
    color: ${darken(0.5, theme.colors.username)};
    text-overflow: ellipsis;
    white-space: nowrap;

    ${media.lessThan('small')`
      max-width: 90%;
    `}

    ${media.greaterThan('small')`
      font-size: 1.4rem;
    `}

    ${media.greaterThan('medium')`
      font-size: 1.8rem;
    `}
  `}
`;

export const Time = styled.span`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.username};

    ${media.greaterThan('small')`
      font-size: 1.4rem;
    `}

    ${media.greaterThan('medium')`
      font-size: 1.8rem;
    `}
  `}
`;

export const Content = styled.span`
  font-size: 1.4rem;

  ${media.greaterThan('medium')`
    font-size: 1.8rem;
  `}
`;
