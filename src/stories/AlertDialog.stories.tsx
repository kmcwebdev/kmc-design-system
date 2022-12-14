/* eslint-disable import/named */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { AlertDialog, Button } from '../component';

export default {
  title: 'Core/AlertDialog',
  component: AlertDialog,
  argTypes: {},
  args: {
    open: false,
    title: 'Title',
    description: 'If you enjoy our app, would you mind taking a moment to rate it?',
    cancelButtonText: 'Cancel',
    okButtonText: 'Continue',
  },
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(args.open || false);

  return (
    <>
      <Button
        size="sm"
        variant={args.variant === 'confirm' ? 'primary' : `${args.variant}`}
        onClick={() => setIsOpen(true)}
      >
        Show Alert Dialog
      </Button>

      <AlertDialog
        open={isOpen}
        title={args.title}
        description={args.description}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        variant={args.variant}
        cancelButtonText={args.cancelButtonText}
        okButtonText={args.okButtonText}
      />
    </>
  );
};

const Confirm = Template.bind({});
Confirm.args = {
  variant: 'confirm',
};

const Info = Template.bind({});
Info.args = {
  variant: 'info',
};

const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export { Confirm, Info, Warning, Danger };
