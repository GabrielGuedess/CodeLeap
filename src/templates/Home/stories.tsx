import { type StoryFn, type Meta } from '@storybook/react';

import { Home } from '.';

export default {
  title: 'Templates/Home',
  component: Home,
} as Meta;

export const Default: StoryFn = () => <Home />;
