import { ButtonVariant } from '../Button';
import { ClassInterface, ActionType } from './interface';

export const variantToClassName: Record<ButtonVariant, ClassInterface> = {
  primary: {
    parent: 'text-white',
    child:
      'bg-interactive-primary-neutral group-hover:bg-interactive-primary-hovered group-active:bg-interactive-primary-pressed',
  },

  secondary: {
    parent: 'text-main-body hover:text-main-text active:text-main-heading',
    child:
      'bg-interactive-secondary-neutral group-hover:bg-interactive-secondary-hovered group-active:bg-interactive-secondary-pressed ',
  },

  success: {
    parent: 'text-white',
    child:
      'bg-interactive-success-neutral group-hover:bg-interactive-success-hovered group-active:bg-interactive-success-pressed',
  },

  warning: {
    parent: 'text-white',
    child:
      'bg-interactive-warning-neutral group-hover:bg-interactive-warning-hovered group-active:bg-interactive-warning-pressed',
  },

  danger: {
    parent: 'text-white',
    child:
      'bg-interactive-danger-neutral group-hover:bg-interactive-danger-hovered group-active:bg-interactive-danger-pressed',
  },

  info: {
    parent: 'text-white',
    child:
      'bg-interactive-info-neutral group-hover:bg-interactive-info-hovered group-active:bg-interactive-info-pressed',
  },
};

export const actionsVariants: Record<ActionType, string> = {
  primary: 'text-main-body hover:bg-surface-primary-hovered hover:text-interactive-primary-neutral',
  success: 'text-main-body hover:bg-surface-success-hovered hover:text-interactive-success-hovered',
  danger: 'text-main-danger hover:bg-surface-danger-hovered hover:text-interactive-danger-hovered',
};
