import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { TextArea } from 'components/atoms/TextArea';
import { Title } from 'components/atoms/Title';

import * as S from './styles';

export const Content = () => (
  <S.Wrapper>
    <Title as="h2">What’s on your mind?</Title>

    <S.Form>
      <Input title="Title" placeholder="Hello world" />
      <TextArea title="Content" placeholder="Content here" />

      <Button title="create" hasMargin />
    </S.Form>
  </S.Wrapper>
);
