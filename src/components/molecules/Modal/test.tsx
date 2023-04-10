import { renderWithTheme } from 'utils/tests/helpers';

import { Modal } from '.';

describe('<Modal />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Modal trigger={<h1>click</h1>} open>
        <h2>Modal</h2>
      </Modal>,
    );

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
