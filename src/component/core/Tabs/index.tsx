import React, { Key, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid';

export const tabsList = [
  { name: 'Tab One', value: 'one', icon: UserIcon },
  { name: 'Tab Two', value: 'two', icon: BuildingOfficeIcon },
  { name: 'Tab Three', value: 'three', icon: UsersIcon },
  { name: 'Tab Four', value: 'four', icon: CreditCardIcon },
];

export interface TabItem {
  name: string | number;
  value: string | number;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export interface ITabProps {
  tabs: TabItem[];
  activeTab?: string | number;
  onChange?: (e: TabItem) => void;
}

export const Tabs: React.FC<ITabProps> = ({ tabs, activeTab, onChange }) => {
  const [active, setActive] = useState(activeTab ?? '');

  const tabOnClickHandler = (e: TabItem) => {
    onChange && onChange(e);
    setActive(e.value);
  };

  const activeStyle =
    'border-branding-pumpkin px-2 text-branding-pumpkin hover:cursor-pointer transition duration-75 ease-in';

  return (
    <div className="font-karla text-sm">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-t-md border-gray-300 focus:border-branding-pumpkin focus:ring-branding-pumpkin"
        >
          {tabs?.map((tab: { name: Key | null | undefined }) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className=" flex " aria-label="Tabs">
          {tabs.map((tab) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              onClick={() => tabOnClickHandler(tab)}
              key={tab.name}
              className={classNames(
                tab.value === active
                  ? activeStyle
                  : 'border-transparent px-2 rounded-t-md text-main-body hover:text-main-body hover:bg-interactive-secondary-hovered hover:cursor-pointer hover:duration-100 hover:ease-in  ',
                'group inline-flex items-center py-2 border-b-2 font-medium text-sm',
              )}
              aria-current={tab.value === active ? 'page' : undefined}
            >
              <div className="flex items-center py-0.5 px-2 ">
                {tab.icon && (
                  <tab.icon
                    className={classNames(
                      tab.value === active ? 'text-branding-pumpkin' : 'text-main-body group-hover:text-main-body',
                      '-ml-0.5 mr-2 h-5 w-4',
                    )}
                    aria-hidden="true"
                  />
                )}
                <span className="leading-none py-1">{tab.name}</span>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
