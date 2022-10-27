/* eslint-disable react/react-in-jsx-scope */
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button, buttonVariantToClass } from '../component';
import * as ButtonFilled from '../stories/ButtonFilled.stories';
import * as ButtonOutlined from '../stories/ButtonOutlined.stories';
import { vi } from 'vitest';

const { Danger, Info, Primary, Secondary, Success, Warning } = composeStories(ButtonFilled);
const {
  Danger: ODanger,
  Info: OInfo,
  Primary: OPrimary,
  Secondary: OSecondary,
  Success: OSuccess,
  Warning: OWarning,
} = composeStories(ButtonOutlined);

describe('Button Component Test', async () => {
  it('it renders a valid button', async () => {
    render(<Primary />);

    const button = screen.getByTestId('button');

    expect(button).toBeValid();
    expect(button).toBeInTheDocument();
  });

  it('it renders a disabled button', async () => {
    render(<Primary disabled />);

    const button = screen.getByTestId('button');

    expect(button).toBeDisabled();
  });

  it('it renders a button with click function', async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick} />);

    const button = screen.getByTestId('button');

    fireEvent.click(button);

    expect(button).toBeValid();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // Filled Buttons
  describe('Filled buttons', async () => {
    it('it renders a filled primary button', async () => {
      render(<Primary />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['filled-primary']);
    });

    it('it renders a filled secondary button', async () => {
      render(<Secondary />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['filled-secondary']);
    });

    it('it renders a filled info button', async () => {
      render(<Info />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['filled-info']);
    });

    it('it renders a filled success button', async () => {
      render(<Success />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['filled-success']);
    });

    it('it renders a filled warning button', async () => {
      render(<Warning />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['filled-warning']);
    });

    it('it renders a filled danger button', async () => {
      render(<Danger />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['filled-danger']);
    });
  });

  // Outlined Button
  describe('outlined buttons', async () => {
    it('it renders a outlined primary button', async () => {
      render(<OPrimary />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['outlined-primary']);
    });

    it('it renders a outlined secondary button', async () => {
      render(<OSecondary />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['outlined-secondary']);
    });

    it('it renders a outlined info button', async () => {
      render(<OInfo />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['outlined-info']);
    });

    it('it renders a outlined success button', async () => {
      render(<OSuccess />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['outlined-success']);
    });

    it('it renders a outlined warning button', async () => {
      render(<OWarning />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['outlined-warning']);
    });

    it('it renders a outlined danger button', async () => {
      render(<ODanger />);

      const button = screen.getByTestId('button');

      fireEvent.click(button);

      expect(button).toBeValid();
      expect(button).toHaveClass(buttonVariantToClass['outlined-danger']);
    });
  });
});
