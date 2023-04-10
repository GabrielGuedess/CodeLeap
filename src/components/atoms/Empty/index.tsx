import Lottie from 'lottie-react';
import astronaut from 'lottie/astronaut.json';

import * as S from './styles';

export const Empty = () => (
  <S.Wrapper>
    <S.Title>Network is Empty</S.Title>
    <Lottie animationData={astronaut} loop />;
  </S.Wrapper>
);
