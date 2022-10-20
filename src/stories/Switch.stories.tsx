/* eslint-disable import/named */
import React from 'react';
import { Switch as CoreSwitch } from '../component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Core/Switch',
  component: CoreSwitch,
  argTypes: {},
} as ComponentMeta<typeof CoreSwitch>;

const Template: ComponentStory<typeof CoreSwitch> = (args) => <CoreSwitch {...args} />;

export const Switch = Template.bind({});
Switch.args = {
  size: 'base',
};
