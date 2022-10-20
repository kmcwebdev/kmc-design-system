import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';
import { SplitButtonActionProps, SplitButtonSectionProps, SplitButtonProps } from './interface';
import { actionsVariants, variantToClassName } from './variants';

const SplitButton: React.FC<SplitButtonProps> = ({
  children,
  variant = 'filled-primary',
  size = 'base',
  text = 'Button',
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const [listPosition, setListPosition] = useState(0);

  const handleClick = () => {
    setActive((prevVal) => !prevVal);
  };

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <div
          {...rest}
          className={classNames(
            'flex font-bold rounded overflow-hidden text-white cursor-pointer group select-none outline-none shadow-sm-3 hover:shadow-sm-4',
            variantToClassName[variant].parent,
            rest.className && rest.className,
          )}
        >
          <div
            className={classNames('px-6 mr-px', size === 'base' ? 'py-3' : 'py-2', variantToClassName[variant].child)}
          >
            {text}
          </div>
          <div
            className={classNames(
              'px-3 py-3 flex items-center',
              size === 'base' ? 'py-3' : 'py-2',
              variantToClassName[variant].child,
            )}
          >
            {active ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
          </div>
        </div>
      </button>

      {active && (
        <div
          {...rest}
          className={classNames(
            `bg-white w-full absolute shadow-md-1 rounded-sm z-20 left-0 border-[1px]`,
            window.innerHeight - listPosition > 500 ? 'top-[120%]' : 'bottom-[120%]',
          )}
          ref={(el) => {
            if (!el) return;
            if (listPosition === 0) setListPosition(el.getBoundingClientRect().top);
          }}
          onBlur={() => setActive(false)}
          onBlurCapture={() => setActive(false)}
          // onBlur={setActive(false)}
        >
          {/* { generateChildrenElement(children, {onClick}) } */}
          {children}
        </div>
      )}
    </div>
  );
};

export const Section: React.FC<SplitButtonSectionProps> = ({ children, sectionTitle = '', ...rest }) => {
  return (
    <div {...rest} className={classNames('w-full')}>
      {sectionTitle && (
        <div className="text-xs m-0 border-b-[1px] ">
          <p className="my-1 mx-3 font-bold">{sectionTitle}</p>
        </div>
      )}
      <div className="py-3">{children}</div>
    </div>
  );
};

export const Action: React.FC<SplitButtonActionProps> = ({ children, onClick, text, variant = 'primary', ...rest }) => {
  return (
    <button {...rest} onClick={onClick}>
      <div
        className={classNames(
          'flex py-3 px-4 items-center cursor-pointer text-sm transition-all',
          actionsVariants[variant],
        )}
      >
        <div className="mr-2">{children}</div>
        <p>{text}</p>
      </div>
    </button>
  );
};

export default Object.assign(SplitButton, { Section, Action });
