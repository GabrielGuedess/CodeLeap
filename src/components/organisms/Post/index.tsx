import moment from 'moment';

import * as S from './styles';

export type PostProps = {
  username: string;
  time: Date;
  text: string;
};

export const Post = ({ username, time, text }: PostProps) => {
  const timeAgo = moment(time).fromNow();

  return (
    <S.Wrapper title="My First Post at CodeLeap Network!">
      <S.Info>
        <S.Username>@{username}</S.Username>
        <S.Time>{timeAgo}</S.Time>
      </S.Info>

      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};
