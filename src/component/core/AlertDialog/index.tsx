import React from 'react';
import { ExclamationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { Button, ButtonProps } from '../Button';
import Dialog from '../Dialog';
import { IDialogProps, IDialogTitle } from '../Dialog/interface';

export interface IAlertDialogProps extends Omit<IDialogProps, 'closeDialog'> {
  title: string;
  description: string;
  onOk: () => void;
  onCancel: () => void;
  okButtonText?: string;
  cancelButtonText?: string;
  variant: AlertDialogVariant;
}

export type AlertDialogVariant = 'confirm' | 'info' | 'warning' | 'danger';

export const AlertDialog: React.FC<IAlertDialogProps> = ({
  title,
  description,
  onOk,
  onCancel,
  okButtonText = 'Continue',
  cancelButtonText = 'Cancel',
  variant,
  ...rest
}) => {
  return (
    <Dialog {...rest} closeDialog={onCancel}>
      <Dialog.Title title={title} {...variantToTitleIconProps[variant]} />
      <Dialog.Content>{description}</Dialog.Content>
      <Dialog.Footer className="justify-end">
        <Button {...variantToCancelButtonProps[variant]} size="sm" onClick={onCancel}>
          {cancelButtonText}
        </Button>
        <Button {...variantToOkButtonProps[variant]} size="sm" onClick={onOk}>
          {okButtonText}
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

const variantToTitleIconProps: Record<AlertDialogVariant, Omit<IDialogTitle, 'title'>> = {
  confirm: { showIcon: false },
  info: { showIcon: false },
  warning: {
    showIcon: false,
    Icon: <ExclamationTriangleIcon className="h-5 w-5 text-main-warning" />,
  },
  danger: {
    showIcon: false,
    Icon: <ExclamationCircleIcon className="h-5 w-5 text-main-danger" />,
  },
};

const variantToCancelButtonProps: Record<AlertDialogVariant, ButtonProps> = {
  confirm: { variant: 'primary', outlined: true },
  info: { className: 'hidden' },
  warning: {
    className: 'hidden',
  },
  danger: {
    className: 'hidden',
  },
};

const variantToOkButtonProps: Record<AlertDialogVariant, ButtonProps> = {
  confirm: { variant: 'primary' },
  info: { variant: 'info' },
  warning: {
    variant: 'warning',
  },
  danger: {
    variant: 'danger',
  },
};
