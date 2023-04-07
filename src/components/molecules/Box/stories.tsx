import { type StoryFn, type Meta } from '@storybook/react';

import { type BoxProps } from '.';
import { Box } from '.';

export default {
  title: 'Molecules/Box',
  component: Box,
} as Meta<BoxProps>;

export const Default: StoryFn<BoxProps> = args => <Box {...args} />;
