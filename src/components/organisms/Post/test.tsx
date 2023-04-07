import { renderWithTheme } from 'utils/tests/helpers';

import { Post } from '.';

describe('<Post />', () => {
  it('should render the post correctly', () => {
    // Arrange
    const { container } = renderWithTheme(
      <Post
        username="GabrielGuedess"
        time={new Date('2023-04-07T22:26:25.549Z')}
        text="Text"
      />,
    );

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });
});
