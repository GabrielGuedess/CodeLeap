import { renderWithTheme } from 'utils/tests/helpers';

import { SignInForm } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));

describe('<SignInForm />', () => {
  it('should render the signin form correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<SignInForm />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
