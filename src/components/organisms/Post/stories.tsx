import { type StoryFn, type Meta } from '@storybook/react';

import { type PostProps } from '.';
import { Post } from '.';

export default {
  title: 'Organisms/Post',
  component: Post,
  args: {
    username: 'GabrielGuedess',
    createdAt: new Date(),
    id: '1',
    title: 'Title',
    content: 'Text',
  },
} as Meta<PostProps>;

export const Default: StoryFn<PostProps> = args => <Post {...args} />;
