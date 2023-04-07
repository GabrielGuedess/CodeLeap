import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the button correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Button title="Button" />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with button loading', () => {
    renderWithTheme(<Button title="Button" isLoading />);

    // Assert
    expect(screen.getByLabelText('Spinner')).toBeInTheDocument();
  });
});
