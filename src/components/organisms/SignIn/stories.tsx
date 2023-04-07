import { type StoryFn, type Meta } from '@storybook/react';

import { SignIn } from '.';

export default {
  title: 'Organisms/SignIn',
  component: SignIn,
} as Meta;

export const Default: StoryFn = () => <SignIn />;
