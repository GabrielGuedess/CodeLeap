import { type StoryFn, type Meta } from '@storybook/react';

import { type PostProps } from '.';
import { Post } from '.';

export default {
  title: 'Organisms/Post',
  component: Post,
  args: {
    username: 'GabrielGuedess',
    ime: new Date(),
    text: 'Text',
  },
} as Meta<PostProps>;

export const Default: StoryFn<PostProps> = args => <Post {...args} />;
