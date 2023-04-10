import { type StoryFn, type Meta } from '@storybook/react';

import { type TextAreaProps } from '.';
import { TextArea } from '.';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    title: 'Textarea',
  },
} as Meta<TextAreaProps>;

export const Default: StoryFn<TextAreaProps> = args => <TextArea {...args} />;

export const WithErrors: StoryFn<TextAreaProps> = args => (
  <TextArea {...args} />
);

WithErrors.args = {
  errorMessage: 'Invalid Field!',
};
