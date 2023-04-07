import { Header } from 'components/molecules/Header';
import { Content } from 'components/organisms/Content';
import { Post } from 'components/organisms/Post';

import * as S from './styles';

export const Home = () => (
  <S.Wrapper>
    <Header title="CodeLeap Network" />

    <S.WrapperContent>
      <Content />
      <Post
        username="GabrielGuedess"
        time={new Date('2023-04-07T22:26:25.549Z')}
        text="Text"
      />
    </S.WrapperContent>
  </S.Wrapper>
);
