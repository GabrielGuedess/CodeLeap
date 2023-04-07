import styled from 'styled-components';

import { Container } from 'components/atoms/Container';

export const Wrapper = styled(Container).attrs({ as: 'main' })`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
