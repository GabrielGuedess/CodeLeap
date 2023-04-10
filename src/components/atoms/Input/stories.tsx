import { type StoryFn, type Meta } from '@storybook/react';

import { type InputProps } from '.';
import { Input } from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    title: 'Title',
  },
} as Meta<InputProps>;

export const Default: StoryFn<InputProps> = args => <Input {...args} />;

export const WithErrors: StoryFn<InputProps> = args => <Input {...args} />;

WithErrors.args = {
  errorMessage: 'Invalid Field!',
};
