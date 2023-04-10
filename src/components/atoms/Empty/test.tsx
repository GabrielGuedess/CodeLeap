import { renderWithTheme } from 'utils/tests/helpers';

import { Empty } from '.';

describe('<Empty />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithTheme(<Empty />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
