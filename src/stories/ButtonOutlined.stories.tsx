/* eslint-disable import/named */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from '../component';

export default {
  title: 'Core/Button/Outlined',
  component: Button,
  argTypes: {
    outlined: {
      type: 'boolean',
      defaultValue: true,
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    size: {
      defaultValue: 'base',
    },
  },
  args: {
    outlined: true,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'PRIMARY OUTLINED',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'SECONDARY OUTLINED',
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'SUCCESS OUTLINED',
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'DANGER OUTLINED',
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'WARNING OUTLINED',
  variant: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  children: 'INFO OUTLINED',
  variant: 'info',
};
