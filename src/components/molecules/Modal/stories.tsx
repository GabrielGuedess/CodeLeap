import { type StoryFn, type Meta } from '@storybook/react';

import { Button } from 'components/atoms/Button';

import { type ModalProps } from '.';
import { Modal } from '.';

export default {
  title: 'Molecules/Modal',
  component: Modal,
  args: {
    trigger: <Button title="Click me" />,
  },
} as Meta<ModalProps>;

export const Default: StoryFn<ModalProps> = args => (
  <Modal {...args}>
    <h1 style={{ textAlign: 'center', color: 'white' }}>Modal</h1>
  </Modal>
);
