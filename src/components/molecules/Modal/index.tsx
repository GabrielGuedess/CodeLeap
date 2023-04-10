import * as Dialog from '@radix-ui/react-dialog';

import * as S from './styles';

export type ModalProps = {
  trigger: JSX.Element;
  children: React.ReactNode;
} & Dialog.DialogProps;

export const Modal = ({ trigger, children, ...props }: ModalProps) => (
  <S.Wrapper {...props}>
    <S.Trigger>{trigger}</S.Trigger>
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>{children}</S.Content>
    </Dialog.Portal>
  </S.Wrapper>
);
