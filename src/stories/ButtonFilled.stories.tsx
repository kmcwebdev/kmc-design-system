/* eslint-disable import/named */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../component';
import React from 'react';
import { actions } from '@storybook/addon-actions';

export default {
  title: 'Core/Button/Filled',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const buttonEvents = actions({ onClick: 'Button Clicked' });

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} {...buttonEvents} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'PRIMARY FILLED',
  variant: 'filled-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'SECONDARY FILLED',
  variant: 'filled-secondary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'SUCCESS FILLED',
  variant: 'filled-success',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'DANGER FILLED',
  variant: 'filled-danger',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'WARNING FILLED',
  variant: 'filled-warning',
};

export const Info = Template.bind({});
Info.args = {
  children: 'INFO FILLED',
  variant: 'filled-info',
};
