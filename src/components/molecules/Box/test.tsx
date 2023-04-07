import { renderWithTheme } from 'utils/tests/helpers';

import { Box } from '.';

describe('<Box />', () => {
  it('should render the box correctly', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Box>
        <span>Content</span>
      </Box>,
    );

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
