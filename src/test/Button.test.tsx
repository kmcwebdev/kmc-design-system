/* eslint-disable react/react-in-jsx-scope */
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as ButtonFilled from '../stories/ButtonFilled.stories';

const { Danger } = composeStories(ButtonFilled);

describe('Button Component', async () => {
  it('renders danger button', async () => {
    render(<Danger variant="filled-danger" />);

    const button = await screen.getByTestId('button');

    fireEvent.click(button);

    expect(button).toBeValid();
    expect(button).toBeInTheDocument();
  });
});
