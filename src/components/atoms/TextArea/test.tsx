import { renderWithTheme } from 'utils/tests/helpers';

import { TextArea } from '.';

describe('<TextArea />', () => {
  it('should render the text area correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<TextArea title="Description" />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
