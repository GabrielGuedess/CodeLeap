import { type StoryFn, type Meta } from '@storybook/react';

import { SignInForm } from '.';

export default {
  title: 'Templates/SignInForm',
  component: SignInForm,
} as Meta;

export const Default: StoryFn = () => <SignInForm />;
