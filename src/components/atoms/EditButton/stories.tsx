import { type StoryFn, type Meta } from '@storybook/react';

import { EditButton } from '.';

export default {
  title: 'Atoms/EditButton',
  component: EditButton,
} as Meta;

export const Default: StoryFn = () => <EditButton />;
