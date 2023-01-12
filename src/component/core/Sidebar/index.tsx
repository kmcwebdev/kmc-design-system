import React from 'react';
import { classNames } from '../../utils/classNames';

export type SidebarTheme = 'light' | 'dark';

export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  theme?: SidebarTheme;
  logoUrl?: string;
  activeNav?: string;
  onChange?: (href: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  theme = 'light',
  className,
  logoUrl,
  children,
  onChange,
  activeNav,
  ...rest
}) => {
  return (
    <nav
      data-testId="sidebar-navigation"
      className={classNames(
        'h-screen shadow-sm w-[88px]',
        theme === 'light' ? 'bg-white' : 'bg-branding-navy',
        className,
      )}
      {...rest}
    >
      <figure className="h-[66px] w-full flex items-center justify-center px-1.5">
        <img
          src={
            logoUrl ?? theme === 'light'
              ? 'https://kmc.solutions/media/ufgldhzy/kmc-logo-2018-optimized.png'
              : 'https://kmc.solutions/media/aikesh01/kmc-solutions.png'
          }
          alt="KMC-logo"
          className="object-contain h-[20px] w-auto"
        />
      </figure>

      <ul className="p-1 space-y-2">
        {children && Array.isArray(children)
          ? children.map((child, idx) => React.cloneElement(child, { key: idx, activeNav, onChange, theme }))
          : React.cloneElement(children as any, { activeNav, onChange, theme })}
      </ul>
    </nav>
  );
};

export interface SidebarItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'onChange' | 'id'> {
  icon: React.ReactNode;
  activeNav?: string;
  onChange?: (href: string) => void;
  id: string;
  theme?: SidebarTheme;
}

const Item: React.FC<SidebarItemProps> = ({ id, icon, children, activeNav, className, onChange, theme }) => {
  return (
    <li
      data-testId={`sidebar-navigation-item-${id}`}
      className={classNames(
        'w-full rounded group border border-transparent transition-all active:scale-95 duration-100',
        activeNav === id && 'bg-branding-pumpkin hover:border-transparent',
        theme === 'light' && activeNav !== id && 'hover:bg-gray-700 hover:bg-opacity-10 hover:border-gray-50',
        theme === 'dark' && activeNav !== id && 'hover:bg-gray-700 hover:bg-opacity-50 hover:border-gray-600',
        className && className,
      )}
    >
      <button onClick={() => onChange && onChange(id)} className="w-full h-full px-1 py-2 inline-block">
        <span
          className={classNames(
            'flex flex-col items-center gap-1 transition-all duration-200',
            activeNav === id && theme === 'light' && 'text-white',
            activeNav !== id && theme === 'light' && 'text-gray-700',
            activeNav === id && theme === 'dark' && 'text-white',
            activeNav !== id && theme === 'dark' && 'text-gray-500',
          )}
        >
          {icon}

          <span className="text font-karla font-bold text-xs">{children}</span>
        </span>
      </button>
    </li>
  );
};

export default Object.assign(Sidebar, { Item });
