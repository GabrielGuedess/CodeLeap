import { renderWithTheme } from 'utils/tests/helpers';

import { Content } from '.';

describe('<Content />', () => {
  it('should render the content correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Content />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
