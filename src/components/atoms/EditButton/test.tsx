import { renderWithTheme } from 'utils/tests/helpers';

import { EditButton } from '.';

describe('<EditButton />', () => {
  it('should render the edit button correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<EditButton />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
