import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as SideNavigationStories from '../stories/SideNavigation.stories';
import React from 'react';
import { vi } from 'vitest';

const { Dark, Light } = composeStories(SideNavigationStories);

describe('Sidebar Component Test', async () => {
  it('it renders a valid light themed sidebar', async () => {
    render(<Light />);

    const sidebar = screen.getByTestId('sidebar-navigation');

    expect(sidebar).toBeValid();
    expect(sidebar).toHaveClass('bg-white');
    expect(sidebar).toBeInTheDocument();
  });

  it('it renders a valid dark themed sidebar', async () => {
    render(<Dark />);

    const sidebar = screen.getByTestId('sidebar-navigation');

    expect(sidebar).toBeValid();
    expect(sidebar).toHaveClass('bg-branding-navy');
    expect(sidebar).toBeInTheDocument();
  });

  it('it should have an onChange function thats passing a string value', async () => {
    render(<Light />);

    afterEach(() => {
      vi.clearAllMocks();
    });

    const sidebarItem = screen.getByTestId('sidebar-navigation-item-/dashboard');

    sidebarItem.click();

    expect(sidebarItem).toHaveClass('bg-branding-pumpkin');
  });
});
