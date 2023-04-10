import { type StoryFn, type Meta } from '@storybook/react';

import { type ButtonProps } from '.';
import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    isLoading: {
      type: 'boolean',
    },
  },
  args: {
    title: 'Button',
    isLoading: false,
    as: 'button',
  },
} as Meta<ButtonProps>;

export const Default: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);
