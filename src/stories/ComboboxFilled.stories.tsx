/* eslint-disable import/named */
import React from 'react';
import { Select } from '../component';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Core/Combobox Filled',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

export const OptionsList = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'option 3', label: 'Option 3' },
  { value: 'option 4', label: 'Option 4' },
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'FILLED',
  variant: 'filled',
  options: OptionsList,
};

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {
  label: 'FILLED WITH ERROR',
  variant: 'filled',
  options: OptionsList,
  error: 'This is an error example',
};

export const PrimaryMulti = Template.bind({});
PrimaryMulti.args = {
  label: 'FILLED MULTI',
  variant: 'filled',
  options: OptionsList,
  isMulti: true,
};
