import React from 'react';
export declare type ButtonVariant = 'filled-primary' | 'filled-secondary' | 'filled-success' | 'filled-warning' | 'filled-danger' | 'filled-info' | 'outlined-primary' | 'outlined-secondary' | 'outlined-success' | 'outlined-warning' | 'outlined-danger' | 'outlined-info';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: 'sm' | 'base';
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=index.d.ts.map