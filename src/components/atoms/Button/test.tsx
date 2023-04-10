import { screen } from '@testing-library/react';

import { darken } from 'polished';

import { renderWithTheme } from 'utils/tests/helpers';

import { theme } from 'styles/theme';

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

  it('should render button secondary', () => {
    renderWithTheme(<Button title="Button" variant="secondary" />);

    // Assert
    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle({
      background: darken(0.1, theme.colors.green),
    });
  });

  it('should render button secondary loading', () => {
    renderWithTheme(<Button title="Button" variant="secondary" isLoading />);

    // Assert
    expect(screen.getByLabelText('Spinner').parentElement).toHaveStyle({
      background: darken(0.1, theme.colors.green),
    });
  });

  it('should render button alert', () => {
    renderWithTheme(<Button title="Button" variant="alert" />);

    // Assert
    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle({
      background: darken(0.1, theme.colors.red),
    });
  });

  it('should render button alert loading', () => {
    renderWithTheme(<Button title="Button" variant="alert" isLoading />);

    // Assert
    expect(screen.getByLabelText('Spinner').parentElement).toHaveStyle({
      background: darken(0.1, theme.colors.red),
    });
  });

  it('should render button outline', () => {
    renderWithTheme(<Button title="Button" variant="outline" />);

    // Assert
    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle({
      background: 'transparent',
    });
  });

  it('should render button outline loading', () => {
    renderWithTheme(<Button title="Button" variant="outline" isLoading />);

    // Assert
    expect(screen.getByLabelText('Spinner').parentElement).toHaveStyle({
      border: `1.5px solid ${theme.colors.primaryText}`,
    });
  });
});
