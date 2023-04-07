import { type StoryFn, type Meta } from '@storybook/react';

import { Title } from '.';

export default {
  title: 'Atoms/Title',
  component: Title,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Default: StoryFn = () => <Title>Title</Title>;
