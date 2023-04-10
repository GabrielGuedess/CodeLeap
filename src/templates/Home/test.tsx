import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import { Home } from '.';

const createPostMock = jest.fn();

let isLoading = false;
let posts = [
  {
    id: '1',
    title: 'Title',
    content: 'Content',
    username: 'GabrielGuedess',
    createdAt: '2023-04-07T00:00:00.000Z',
  },
];

jest.mock('@formkit/auto-animate/react', () => ({
  useAutoAnimate: () => [null],
}));

jest.mock('hooks/usePost', () => ({
  usePost: () => ({
    posts,
    createPost: createPostMock,
    isLoading,
  }),
}));

jest.mock('hooks/useAuth', () => ({
  useAuth: () => ({
    username: 'GabrielGuedess',
  }),
}));

jest.mock('components/molecules/Header', () => ({
  __esModule: true,
  Header: function Header({ children }: { children: React.ReactNode }) {
    return <div data-testid="Header Mock">{children}</div>;
  },
}));

jest.mock('components/organisms/Post', () => ({
  __esModule: true,
  Post: function Post({ children }: { children: React.ReactNode }) {
    return <div data-testid="Post Mock">{children}</div>;
  },
}));

describe('<Home />', () => {
  it('should render the home correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Home />);

    // Assert
    expect(screen.getByTestId('Header Mock')).toBeInTheDocument();
    expect(screen.getByTestId('Post Mock')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the empty component', async () => {
    posts = [];

    renderWithTheme(<Home />);

    // Assert
    expect(
      screen.getByRole('heading', { name: 'Network is Empty' }),
    ).toBeInTheDocument();
  });

  it('should render the loading component', async () => {
    isLoading = true;

    renderWithTheme(<Home />);

    // Assert
    expect(screen.getByLabelText('Spinner')).toBeInTheDocument();
  });

  it('should create new post when click on create button', async () => {
    renderWithTheme(<Home />);

    // Act
    await userEvent.type(screen.getByLabelText('Title'), 'Gabriel');
    await userEvent.type(screen.getByLabelText('Content'), 'Text');

    await userEvent.click(screen.getByRole('button', { name: 'CREATE' }));

    // Assert
    await waitFor(() => {
      expect(createPostMock).toHaveBeenCalled();
    });
  });
});
