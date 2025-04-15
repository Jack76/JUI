// src/components/core/iconComponent/iconComponent.d.ts
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface IconComponentProps {
  iconName: string;
  color?: string;
  size?: string;
  enableHoverEffect?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}

declare const IconComponent: ForwardRefExoticComponent<IconComponentProps & RefAttributes<HTMLSpanElement>>;

export default IconComponent;