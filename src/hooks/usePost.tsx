import { useContext } from 'react';

import { PostContext } from 'contexts/PostContext';

export const usePost = () => useContext(PostContext);
