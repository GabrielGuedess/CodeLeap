import { type StoryFn, type Meta } from '@storybook/react';

import { type ButtonProps } from '.';
import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    title: 'Button',
  },
} as Meta<ButtonProps>;

export const Default: StoryFn<ButtonProps> = args => <Button {...args} />;
