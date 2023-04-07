import { renderWithTheme } from 'utils/tests/helpers';

import { DeleteButton } from '.';

describe('<DeleteButton />', () => {
  it('should render the delete button correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<DeleteButton />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
