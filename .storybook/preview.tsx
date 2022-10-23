import '../src/index.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { DecoratorFn } from '@storybook/react';

// Start Mock Service Worker
initialize({ onUnhandledRequest: 'bypass' });

export const parameters = {
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
    },
  },

  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [mswDecorator as DecoratorFn];
