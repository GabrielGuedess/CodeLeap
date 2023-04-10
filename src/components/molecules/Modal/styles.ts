import styled, { css, keyframes } from 'styled-components';

import * as Dialog from '@radix-ui/react-dialog';
import { rgba } from 'polished';

const overlayShow = keyframes`
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    transform: translate(-50%, -48%) scale(0.96);
    opacity: 0;
  }

  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

export const Wrapper = styled(Dialog.Root)``;

export const Trigger = styled(Dialog.Trigger)`
  ${({ theme }) => css`
    background: transparent;
    border: none;

    :focus {
      box-shadow: ${theme.colors.boxShadow} 0px 0px 0px 1.5px;
    }
  `}
`;

export const Overlay = styled(Dialog.Overlay)`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    background: ${rgba(theme.colors.overlay, 0.8)};
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  `}
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 66rem;
  padding: 0 1.6rem;

  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
