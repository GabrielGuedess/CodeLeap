import { type StoryFn, type Meta } from '@storybook/react';

import { Content } from '.';

export default {
  title: 'Organisms/Content',
  component: Content,
} as Meta;

export const Default: StoryFn = () => <Content />;
