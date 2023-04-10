import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import { Header } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const pushMock = jest.fn();
const signOutMock = jest.fn();

useRouter.mockImplementation(() => ({
  push: pushMock,
}));

jest.mock('hooks/useAuth', () => ({
  useAuth: () => ({
    signOut: signOutMock,
  }),
}));

describe('<Header />', () => {
  it('should render the header correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Header title="Title" />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change page when click on sign-out', () => {
    renderWithTheme(<Header title="Title" />);

    // Act
    fireEvent.click(screen.getByLabelText('sign-out'));

    // Assert
    expect(pushMock).toHaveBeenCalled();
    expect(signOutMock).toHaveBeenCalled();
  });
});
