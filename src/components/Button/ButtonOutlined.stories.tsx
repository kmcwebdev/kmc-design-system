/* eslint-disable import/named */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';

export default {
  title: 'Core/Button/Outlined',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'PRIMARY OUTLINED',
  variant: 'outlined-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'SECONDARY OUTLINED',
  variant: 'outlined-secondary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'SUCCESS OUTLINED',
  variant: 'outlined-success',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'DANGER OUTLINED',
  variant: 'outlined-danger',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'WARNING OUTLINED',
  variant: 'outlined-warning',
};

export const Info = Template.bind({});
Info.args = {
  children: 'INFO OUTLINED',
  variant: 'outlined-info',
};