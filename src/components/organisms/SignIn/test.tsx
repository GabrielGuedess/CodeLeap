import { act } from 'react-dom/test-utils';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import { SignIn } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));

describe('<SignIn />', () => {
  it('should render the signin correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<SignIn />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change page if input is correctly', async () => {
    renderWithTheme(<SignIn />);

    // Arrange
    const input = screen.getByLabelText('username');
    const button = screen.getByRole('button', { name: /enter/i });

    // Act
    act(() => {
      fireEvent.change(input, { target: { value: 'GabrielGuedess' } });
      fireEvent.click(button);
    });

    // Assert
    waitFor(() => {
      expect(useRouter).toHaveBeenCalled();
    });
  });
});
