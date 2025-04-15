import React, { useState, useEffect, forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type CheckboxProps = {
  /**
   * Checkbox label
   */
  label?: React.ReactNode;
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  /**
   * Default checked state (uncontrolled component)
   */
  defaultChecked?: boolean;
  /**
   * Whether the checkbox is in indeterminate state
   */
  indeterminate?: boolean;
  /**
   * Checkbox size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Checkbox variant
   */
  variant?: 'default' | 'error';
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Description text to provide additional information
   */
  description?: string;
  /**
   * Callback when checkbox state changes
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked' | 'defaultChecked' | 'onChange'>;

// Size styles configuration
const sizeStyles = {
  small: {
    checkboxSize: '14px',
    fontSize: 'var(--font-size-xs)',
    borderRadius: 'var(--radius-xs)',
  },
  medium: {
    checkboxSize: '16px',
    fontSize: 'var(--font-size-base)',
    borderRadius: 'var(--radius-xs)',
  },
  large: {
    checkboxSize: '20px',
    fontSize: 'var(--font-size-md)',
    borderRadius: 'var(--radius-sm)',
  },
};

// Variant styles configuration
const variantStyles = {
  default: {
    borderColor: 'var(--color-neutral-300)',
    hoverBorderColor: 'var(--color-text-tertiary)',
    focusBorderColor: 'var(--color-primary)',
    activeBorderColor: 'var(--color-primary)',
    shadowColor: 'rgba(59, 130, 246, 0.2)',
  },
  error: {
    borderColor: 'var(--color-error)',
    hoverBorderColor: 'var(--color-error-hover)',
    focusBorderColor: 'var(--color-error)',
    activeBorderColor: 'var(--color-error)',
    shadowColor: 'rgba(220, 38, 38, 0.2)',
  },
};

const CheckboxContainer = styled.label<{
  disabled: boolean;
  size: 'small' | 'medium' | 'large';
}>`
  display: flex;
  align-items: ${({ size }) => (size === 'small' ? 'flex-start' : 'center')};
  gap: var(--spacing-xs);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  position: relative;
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
  `}
`;

const HiddenCheckbox = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;



const StyledCheckbox = styled.div<{
  checked: boolean;
  indeterminate: boolean;
  size: 'small' | 'medium' | 'large';
  variant: 'default' | 'error';
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => sizeStyles[size].checkboxSize};
  height: ${({ size }) => sizeStyles[size].checkboxSize};
  background-color: ${({ checked, indeterminate, disabled }) => 
    checked || indeterminate
      ? disabled
        ? 'var(--color-neutral-400)'
        : 'var(--color-primary)'
      : 'var(--color-background)'
  };
  border: 1px solid ${({ checked, indeterminate, disabled, variant }) => 
    checked || indeterminate
      ? disabled
        ? 'var(--color-neutral-400)'
        : 'var(--color-primary)'
      : variantStyles[variant].borderColor
  };
  border-radius: ${({ size }) => sizeStyles[size].borderRadius};
  transition: all var(--transition-normal);
  flex-shrink: 0;
  
  &:hover {
    border-color: ${({ checked, indeterminate, disabled, variant }) => 
      !disabled && !(checked || indeterminate) 
        ? variantStyles[variant].hoverBorderColor 
        : null
    };
    background-color: ${({ checked, indeterminate, disabled }) => 
      checked || indeterminate 
        ? !disabled 
          ? 'var(--color-primary-hover)' 
          : null 
        : null
    };
  }
  
  svg {
    visibility: ${({ checked, indeterminate }) => 
      checked || indeterminate ? 'visible' : 'hidden'
    };
    color: var(--color-text-inverse);
  }
`;

const CheckboxWrapper = styled.div<{
    variant: 'default' | 'error';
    disabled: boolean;
  }>`
    display: flex;
    align-items: center;
  
    &:focus-within:not(:has(input:disabled)) {
      ${StyledCheckbox} {
        border-color: ${({ variant }) => variantStyles[variant].focusBorderColor};
        box-shadow: 0 0 0 2px ${({ variant }) => variantStyles[variant].shadowColor};
      }
    }
  `;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span<{ size: 'small' | 'medium' | 'large' }>`
  font-size: ${({ size }) => sizeStyles[size].fontSize};
  color: var(--color-text);
  line-height: var(--line-height-normal);
  margin-top: ${({ size }) => size === 'small' ? '2px' : '0'};
`;

const Description = styled.span<{ size: 'small' | 'medium' | 'large' }>`
  font-size: ${({ size }) => 
    size === 'large'
      ? 'var(--font-size-base)'
      : 'var(--font-size-xs)'
  };
  color: var(--color-text-tertiary);
  margin-top: var(--spacing-xxs);
`;

const ErrorText = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-error);
  margin-top: var(--spacing-xxs);
`;

const CheckIcon = () => (
  <svg
    width="70%"
    height="70%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg
    width="70%"
    height="70%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked,
      defaultChecked,
      indeterminate = false,
      size = 'medium',
      variant = 'default',
      disabled = false,
      errorMessage,
      description,
      onChange,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked || false);
    const internalRef = React.useRef<HTMLInputElement>(null);
    const resolvedRef = (ref || internalRef) as React.RefObject<HTMLInputElement>;
    
    // Sync with controlled prop if provided
    useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);
    
    // Handle indeterminate state
    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, resolvedRef]);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      
      if (checked === undefined) {
        setIsChecked(newChecked);
      }
      
      onChange?.(newChecked, event);
    };
    
    return (
      <div className={className} style={style}>
        <CheckboxContainer disabled={disabled} size={size}>
          <CheckboxWrapper variant={variant} disabled={disabled}>
            <HiddenCheckbox
              type="checkbox"
              ref={resolvedRef}
              checked={isChecked}
              onChange={handleChange}
              disabled={disabled}
              tabIndex={disabled ? -1 : 0}
              {...props}
            />
            <StyledCheckbox
              checked={isChecked}
              indeterminate={indeterminate}
              size={size}
              variant={variant}
              disabled={disabled}
            >
              {indeterminate ? <IndeterminateIcon /> : <CheckIcon />}
            </StyledCheckbox>
          </CheckboxWrapper>
          
          {(label || description || (variant === 'error' && errorMessage)) && (
            <LabelContainer>
              {label && <Label size={size}>{label}</Label>}
              {description && <Description size={size}>{description}</Description>}
              {variant === 'error' && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            </LabelContainer>
          )}
        </CheckboxContainer>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;