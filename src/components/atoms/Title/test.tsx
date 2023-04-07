import { renderWithTheme } from 'utils/tests/helpers';

import { Title } from '.';

describe('<Title />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithTheme(<Title>Title</Title>);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
