/* eslint-disable import/named */
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { selectThemeColors } from './theme';
import RSSelect, { GroupBase, Props, components, DropdownIndicatorProps, ClearIndicatorProps } from 'react-select';
import { classNames } from '../../utils/classNames';

export type SelectVariant = 'filled' | 'outlined';

export type SelectOptionDefaultProps = {
  value: string | number;
  label: string | number;
  action?: () => void;
  icon?: JSX.Element;
};

export const Select = <
  Option extends SelectOptionDefaultProps,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option & SelectOptionDefaultProps> = GroupBase<Option & SelectOptionDefaultProps>,
>(
  props: Props<Option, IsMulti, Group> & {
    variant?: SelectVariant;
    label?: string;
    error?: string;
    selected?: string | number | string[] | number[];
  },
) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //State manager for changing ArrowIcon

  const { className, label, error, options, isMulti, defaultValue, variant = 'outlined', ...rest } = props;

  return (
    <div className={classNames(className && className, 'group')}>
      {label && <p className="font-karla text-sm text-gray-800">{label}</p>}

      <RSSelect
        className="font-karla text-sm "
        isSearchable={rest.isSearchable ?? false}
        options={options}
        placeholder="Select"
        components={{
          DropdownIndicator: (indicatorProps) => <DropdownIndicator {...indicatorProps} isMenuOpen={isMenuOpen} />,
          ClearIndicator: (indicatorProps) => <ClearIndicator isMenuOpen={false} {...indicatorProps} />,
        }}
        defaultValue={defaultValue}
        onMenuOpen={() => {
          setIsMenuOpen(true);
        }}
        onMenuClose={() => {
          setIsMenuOpen(false);
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...selectThemeColors,
            primary25: '#F6F6F7',
          },
        })}
        styles={{
          menu: (provided) => ({
            ...provided,
            fontSize: '12px',
            // paddingTop: '12px'
          }),
          option: (provided, { isSelected }) => {
            return {
              ...provided,
              color: isSelected ? '#FF7200' : 'black',
              fontWeight: isSelected ? 'bold' : 'normal',
            };
          },
          indicatorSeparator: (provided) => {
            return {
              ...provided,
              display: 'none',
            };
          },
          dropdownIndicator: (provided, { isFocused }) => {
            return {
              ...provided,
              color: '#4B4B4B',
              backgroundColor: isMenuOpen
                ? variant === 'filled'
                  ? '#fff4eb'
                  : 'none'
                : isFocused
                ? variant === 'filled'
                  ? '#F5F5F5'
                  : 'none'
                : '',
              '&:hover': {
                backgroundColor: variant === 'filled' ? '#F5F5F5' : 'none',
                color: 'black',
              },
              borderRadius: '0px 4px 4px 0px',
              paddingTop: variant === 'filled' ? '11px' : '12px',
              paddingBottom: variant === 'filled' ? '11px' : '12px',
            };
          },
          clearIndicator: (provided) => {
            return {
              ...provided,
              color: '#FF7200',
            };
          },
          control: (provided, { selectProps }) => {
            return {
              ...provided,
              backgroundColor: variant === 'filled' ? 'white' : 'none',
              width: '100%',
              // paddingTop: '3px',
              // paddingBottom: '3px',
              border: variant === 'filled' ? '1px solid #CACACA' : 'none',
              borderColor: selectProps['aria-errormessage'] ? 'red' : '#B9BCC1',
              boxShadow: isMenuOpen
                ? variant === 'filled'
                  ? '0 0 0px 1px #FF7200'
                  : '0px 1px 0.5px 0.1px #FF7200'
                : variant === 'filled'
                ? ''
                : '0px 1px 0.5px 0.1px #CACACA',
              '&:hover': {
                boxShadow:
                  variant === 'filled'
                    ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                    : '0px 1px 0.5px 0.1px #cacaca',
              },
            };
          },
          singleValue: (provided) => ({
            ...provided,
            display: 'flex', // To keep icon and label aligned
            alignItems: 'center',
          }),
          multiValue: (styles) => {
            return {
              ...styles,
              border: '1px solid ',
            };
          },
          multiValueRemove: (styles) => {
            return {
              ...styles,
              background: 'transparent',
              '&:hover': {
                background: 'transparent ',
              },
            };
          },
        }}
        classNamePrefix="react-select"
        isMulti={isMulti}
        {...rest}
      />

      {error && <span className="text-tiny text-interactive-danger-neutral">{error}</span>}
    </div>
  );
};

const DropdownIndicator = <
  Option extends SelectOptionDefaultProps,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option & SelectOptionDefaultProps> = GroupBase<Option & SelectOptionDefaultProps>,
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group> & {
    isMenuOpen: boolean;
  },
) => {
  const { isMenuOpen, ...rest } = props;

  return (
    <components.DropdownIndicator {...rest}>
      {isMenuOpen ? <ChevronUpIcon className="w-5 text-branding-pumpkin" /> : <ChevronDownIcon className="w-5" />}
    </components.DropdownIndicator>
  );
};

const ClearIndicator = <
  Option extends SelectOptionDefaultProps,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option & SelectOptionDefaultProps> = GroupBase<Option & SelectOptionDefaultProps>,
>(
  props: ClearIndicatorProps<Option, IsMulti, Group> & {
    isMenuOpen: boolean;
  },
) => {
  const { isMenuOpen, ...rest } = props;

  return (
    <components.ClearIndicator {...rest}>
      {isMenuOpen ? <XMarkIcon className="w-4 text-branding-pumpkin" /> : <XMarkIcon className="w-4" />}
    </components.ClearIndicator>
  );
};
