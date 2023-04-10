import { type StoryFn, type Meta } from '@storybook/react';

import { Empty } from '.';

export default {
  title: 'Atoms/Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Default: StoryFn = () => <Empty />;
