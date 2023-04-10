import { renderWithTheme } from 'utils/tests/helpers';

import { SignInForm } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const push = jest.fn();
let username = '';

useRouter.mockImplementation(() => ({
  push,
}));

jest.mock('hooks/useAuth', () => ({
  useAuth: () => ({
    username,
  }),
}));

describe('<SignInForm />', () => {
  it('should render the signin form correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<SignInForm />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change page if user already logged', () => {
    username = 'GabrielGuedess';

    renderWithTheme(<SignInForm />);

    // Assert
    expect(push).toHaveBeenCalled();
  });
});
