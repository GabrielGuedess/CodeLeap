import { renderWithTheme } from 'utils/tests/helpers';

import { Home } from '.';

describe('<Home />', () => {
  it('should render the home correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Home />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
