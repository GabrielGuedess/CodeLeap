import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import { TextArea } from '.';

describe('<TextArea />', () => {
  it('should render the text area correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<TextArea title="Description" />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the text area with error', () => {
    renderWithTheme(
      <TextArea title="Description" errorMessage="Description is invalid" />,
    );

    // Assert
    expect(screen.getByText('Description is invalid')).toBeInTheDocument();
  });
});
