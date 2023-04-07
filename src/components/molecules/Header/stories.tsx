import { type StoryFn, type Meta } from '@storybook/react';

import { type HeaderProps } from '.';
import { Header } from '.';

export default {
  title: 'Molecules/Header',
  component: Header,
  args: {
    title: 'Header',
  },
} as Meta<HeaderProps>;

export const Default: StoryFn<HeaderProps> = args => <Header {...args} />;
