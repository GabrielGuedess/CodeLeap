import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import { Post } from '.';

const deletePostMock = jest.fn();
const editPostMock = jest.fn();

jest.mock('hooks/usePost', () => ({
  usePost: () => ({
    deletePost: deletePostMock,
    editPost: editPostMock,
  }),
}));

describe('<Post />', () => {
  it('should render the post correctly', async () => {
    // Arrange
    const { container } = renderWithTheme(
      <Post
        id="1"
        title="Title"
        username="GabrielGuedess"
        createdAt={new Date('2023-04-07T00:00:00.000Z')}
        content="Text"
      />,
    );

    // Assert
    await waitFor(() => {
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should change info post when click on edit button', async () => {
    renderWithTheme(
      <Post
        id="1"
        title="Title"
        username="GabrielGuedess"
        createdAt={new Date('2023-04-07T00:00:00.000Z')}
        content="Text"
      />,
    );

    // Act
    await userEvent.click(screen.getByLabelText('Edit Button'));
    await userEvent.type(screen.getByLabelText('Title'), 'Gabriel');
    await userEvent.click(screen.getByRole('button', { name: 'Save' }));

    // Assert
    await waitFor(() => {
      expect(editPostMock).toHaveBeenCalledTimes(1);
    });
  });

  it('should delete post when click on delete button', async () => {
    renderWithTheme(
      <Post
        id="1"
        title="Title"
        username="GabrielGuedess"
        createdAt={new Date('2023-04-07T00:00:00.000Z')}
        content="Text"
      />,
    );

    // Act
    await userEvent.click(screen.getByLabelText('Delete Button'));
    await userEvent.click(screen.getByLabelText('Delete'));

    // Assert
    await waitFor(() => {
      expect(deletePostMock).toHaveBeenCalled();
    });
  });
});
