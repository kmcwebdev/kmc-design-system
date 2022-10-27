import { ButtonVariant } from '../Button';

export type ActionType = 'primary' | 'success' | 'danger';

export interface SplitButtonProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'base';
  text: string;
}

export interface SplitButtonSectionProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sectionTitle?: string;
}

export interface SplitButtonActionProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
  variant?: ActionType;
}

export interface ClassInterface {
  parent: string;
  child: string;
}
