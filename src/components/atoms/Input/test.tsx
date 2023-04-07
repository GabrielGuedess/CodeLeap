import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import { Input } from '.';

describe('<Input />', () => {
  it('should render the input correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Input title="Title" />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the input with error', () => {
    renderWithTheme(<Input title="E-mail" errorMessage="email is invalid" />);

    // Assert
    expect(screen.getByText('email is invalid')).toBeInTheDocument();
  });
});
