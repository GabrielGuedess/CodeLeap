import { renderWithTheme } from 'utils/tests/helpers';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the header correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Header title="Title" />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
