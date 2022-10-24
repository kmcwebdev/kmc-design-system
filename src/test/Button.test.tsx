/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Button, variantToClassName } from '../component';

describe('Button Component', async () => {
  it('renders a valid default button', async () => {
    render(<Button />);
    const button = screen.getByTestId('button');

    expect(button).toBeValid();
    expect(button).toBeInTheDocument();
  });

  it('renders a button with onClick props', async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick} />);
    const button = screen.getByTestId('button');

    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });

  it('renders a disabled button', async () => {
    render(<Button disabled />);
    const button = screen.getByTestId('button');

    expect(button).toBeDisabled();
  });

  it('renders a base size button', async () => {
    render(<Button size="base" />);
    const button = screen.getByTestId('button');

    expect(button).toBeValid();
    expect(button).toHaveClass(variantToClassName['filled-primary'] + ' py-3');
  });

  it('renders a small size button', async () => {
    render(<Button size="sm" />);
    const button = screen.getByTestId('button');

    expect(button).toBeValid();
    expect(button).toHaveClass(variantToClassName['filled-primary'] + ' py-2');
  });

  it('renders a filled-primary button', async () => {
    render(<Button variant="primary" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['filled-primary']);
  });

  it('renders a button with click function', async () => {
    render(<Button />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['filled-primary']);
  });

  it('renders a filled-secondary button', async () => {
    render(<Button variant="secondary" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['filled-secondary']);
  });

  it('renders a filled-info button', async () => {
    render(<Button variant="info" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['filled-info']);
  });

  it('renders a filled-warning button', async () => {
    render(<Button variant="warning" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['filled-warning']);
  });

  it('renders a filled-success button', async () => {
    render(<Button variant="success" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['filled-success']);
  });

  it('renders a filled-danger button', async () => {
    render(<Button variant="danger" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['filled-danger']);
  });

  it('renders a outlined-primary button', async () => {
    render(<Button outlined variant="primary" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['outlined-primary']);
  });

  it('renders a outlined-secondary button', async () => {
    render(<Button outlined variant="secondary" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['outlined-secondary']);
  });

  it('renders a outlined-info button', async () => {
    render(<Button outlined variant="info" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['outlined-info']);
  });

  it('renders a outlined-warning button', async () => {
    render(<Button outlined variant="warning" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['outlined-warning']);
  });

  it('renders a outlined-success button', async () => {
    render(<Button outlined variant="success" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['outlined-success']);
  });

  it('renders a outlined-danger button', async () => {
    render(<Button outlined variant="danger" />);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass(variantToClassName['outlined-danger']);
  });
});
