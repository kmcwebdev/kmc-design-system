/* eslint-disable import/named */
import React, { useState } from 'react';
import { Sidebar } from '../component';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RectangleGroupIcon from '@heroicons/react/24/solid/RectangleGroupIcon';
import RectangleStackIcon from '@heroicons/react/24/solid/RectangleStackIcon';

export default {
  title: 'Core/Side Navigation',
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
  const [activeNav, setActiveNav] = useState('/dashboard');

  return (
    <div className=" bg-gray-50 w-full h-full">
      <Sidebar {...args} activeNav={activeNav} onChange={(e) => setActiveNav(e)}>
        <Sidebar.Item id="/dashboard" icon={<RectangleGroupIcon className="h-6 w-6" />}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item id="/sample" icon={<RectangleStackIcon className="h-6 w-6" />}>
          Sample
        </Sidebar.Item>
      </Sidebar>
    </div>
  );
};

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
};
