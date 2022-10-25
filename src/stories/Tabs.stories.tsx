/* eslint-disable import/named */
import React from 'react';
import { Tabs } from '../component';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { tabsList } from '../component/core/Tabs';

export default {
  title: 'Core/Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Tab = Template.bind({});
Tab.args = {
  tabs: tabsList,
  activeTab: 'one',
  onChange: () => console.log('Test'),
};
