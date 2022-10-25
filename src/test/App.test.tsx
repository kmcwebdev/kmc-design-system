/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from '../App';

it('App Loaded Successfully', async () => {
  render(<App />);

  expect(await screen.findByText(/KMC Design System/i)).toBeInTheDocument();
});
