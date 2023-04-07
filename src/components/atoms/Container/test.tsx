import { renderWithTheme } from 'utils/tests/helpers';

import { theme } from 'styles/theme';

import { Container } from '.';

describe('<Container />', () => {
  it('should render the container correctly', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Container>
        <span>CodeLeap</span>
      </Container>,
    );

    // Assert
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
