import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ToggleSwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  fluid?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SwitchContainer = styled.div<{ fluid?: boolean; disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const SwitchLabel = styled.label<{ disabled?: boolean }>`
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  color: var(--color-text);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const colorVariants = {
  primary: {
    backgroundColor: 'var(--color-primary)',
    hoverColor: 'var(--color-primary-hover)',
  },
  secondary: {
    backgroundColor: 'var(--color-secondary)',
    hoverColor: 'var(--color-secondary-hover)',
  },
  success: {
    backgroundColor: 'var(--color-success)',
    hoverColor: 'var(--color-success)',
  },
  warning: {
    backgroundColor: 'var(--color-warning)',
    hoverColor: 'var(--color-warning)',
  },
  error: {
    backgroundColor: 'var(--color-error)',
    hoverColor: 'var(--color-error-hover)',
  },
};

const sizeVariants = {
  small: {
    width: '32px',
    height: '16px',
    thumbSize: '12px',
  },
  medium: {
    width: '44px',
    height: '22px',
    thumbSize: '18px',
  },
  large: {
    width: '56px',
    height: '28px',
    thumbSize: '24px',
  },
};

// Radix Switch components styled with emotion
const StyledSwitch = styled(SwitchPrimitive.Root)<{
  size: keyof typeof sizeVariants;
  color: keyof typeof colorVariants;
}>`
  all: unset;
  width: ${({ size }) => sizeVariants[size].width};
  height: ${({ size }) => sizeVariants[size].height};
  background-color: var(--color-neutral-300);
  border-radius: var(--radius-full);
  position: relative;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--color-neutral-400);
  }
  
  &[data-state="checked"] {
    background-color: ${({ color }) => colorVariants[color].backgroundColor};
    
    &:hover {
      background-color: ${({ color }) => colorVariants[color].hoverColor};
    }
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(25, 118, 210, 0.12);
  }
`;

const StyledThumb = styled(SwitchPrimitive.Thumb)<{
  size: keyof typeof sizeVariants;
}>`
  display: block;
  width: ${({ size }) => sizeVariants[size].thumbSize};
  height: ${({ size }) => sizeVariants[size].thumbSize};
  background-color: white;
  border-radius: 50%;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  transform: translateX(2px);
  will-change: transform;
  
  &[data-state="checked"] {
    transform: translateX(calc(${({ size }) => sizeVariants[size].width} - ${({ size }) => sizeVariants[size].thumbSize} - 2px));
  }
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  defaultChecked,
  disabled = false,
  size = 'medium',
  label,
  color = 'primary',
  fluid = false,
  onChange,
  id,
  className,
  style,
  ...props
}) => {
  const switchId = id || React.useId();
  
  const handleCheckedChange = (isChecked: boolean) => {
    if (!disabled && onChange) {
      onChange(isChecked);
    }
  };

  return (
    <SwitchContainer
      className={className}
      style={style}
      fluid={fluid}
      disabled={disabled}
    >
      <StyledSwitch
        id={switchId}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        size={size}
        color={color}
        onCheckedChange={handleCheckedChange}
        {...props}
      >
        <StyledThumb size={size} />
      </StyledSwitch>
      
      {label && (
        <SwitchLabel
          htmlFor={switchId}
          disabled={disabled}
          onClick={(e) => {
            if (disabled) {
              e.preventDefault();
            }
          }}
        >
          {label}
        </SwitchLabel>
      )}
    </SwitchContainer>
  );
};

export default ToggleSwitch;