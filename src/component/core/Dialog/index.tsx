/* eslint-disable react/prop-types */
import { Dialog as HUIDialog, Transition } from '@headlessui/react';
import { classNames } from '../../utils/classNames';
import React, { Fragment } from 'react';
import { IDialogProps, IDialogTitle } from './interface';

const Dialog: React.FC<IDialogProps> = ({ open, closeDialog, children, width = 'md' }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <HUIDialog as="div" className="relative z-10" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HUIDialog.Panel
                className={classNames(
                  'w-full flex flex-col gap-4 p-[20px] transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all',
                  dialogWidth[width],
                )}
              >
                {children}
              </HUIDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HUIDialog>
    </Transition>
  );
};

export const Title: React.FC<IDialogTitle> = ({ title, Icon }) => {
  return (
    <HUIDialog.Title className="font-karla border-b-[1px] border-gray-100 pb-2">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900">{title}</p>
        {Icon}
      </div>
    </HUIDialog.Title>
  );
};

export const Content: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={classNames('mt-2', className && className)} {...rest}>
      {children}
    </div>
  );
};

export const Footer: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={classNames('mt-4 flex gap-4 items-center', className && className)} {...rest}>
      {children}
    </div>
  );
};

const dialogWidth = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-3xl',
  xxl: 'max-w-6xl',
};

export default Object.assign(Dialog, { Title, Content, Footer });
