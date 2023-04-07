import { type StoryFn, type Meta } from '@storybook/react';

import { DeleteButton } from '.';

export default {
  title: 'Atoms/DeleteButton',
  component: DeleteButton,
} as Meta;

export const Default: StoryFn = () => <DeleteButton />;
