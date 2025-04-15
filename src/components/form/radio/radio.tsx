import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type RadioProps = {
  /**
   * Radio button label
   */
  label?: React.ReactNode;
  /**
   * Whether the radio is selected
   */
  checked?: boolean;
  /**
   * Default checked state (uncontrolled component)
   */
  defaultChecked?: boolean;
  /**
   * Radio button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Radio button variant
   */
  variant?: 'default' | 'error';
  /**
   * Whether the radio is disabled
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
   * Callback when radio state changes
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Value of the radio button
   */
  value?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked' | 'defaultChecked' | 'onChange'>;

// Size styles configuration
const sizeStyles = {
  small: {
    radioSize: '14px',
    dotSize: '6px',
    fontSize: 'var(--font-size-xs)',
  },
  medium: {
    radioSize: '16px',
    dotSize: '8px',
    fontSize: 'var(--font-size-base)',
  },
  large: {
    radioSize: '20px',
    dotSize: '10px',
    fontSize: 'var(--font-size-md)',
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
    dotColor: 'var(--color-primary)',
    disabledDotColor: 'var(--color-neutral-400)',
  },
  error: {
    borderColor: 'var(--color-error)',
    hoverBorderColor: 'var(--color-error-hover)',
    focusBorderColor: 'var(--color-error)',
    activeBorderColor: 'var(--color-error)',
    shadowColor: 'rgba(220, 38, 38, 0.2)',
    dotColor: 'var(--color-error)',
    disabledDotColor: 'var(--color-neutral-400)',
  },
};

const RadioContainer = styled.label<{
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

const HiddenRadio = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledRadio = styled.div<{
  checked: boolean;
  size: 'small' | 'medium' | 'large';
  variant: 'default' | 'error';
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => sizeStyles[size].radioSize};
  height: ${({ size }) => sizeStyles[size].radioSize};
  border: 1px solid ${({ checked, disabled, variant }) => 
    checked && !disabled
      ? variantStyles[variant].borderColor
      : variantStyles[variant].borderColor
  };
  border-radius: 50%;
  transition: all var(--transition-normal);
  flex-shrink: 0;
  
  &:hover {
    border-color: ${({ disabled, variant }) => 
      !disabled ? variantStyles[variant].hoverBorderColor : null
    };
  }
  
  &::after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: ${({ size }) => sizeStyles[size].dotSize};
    height: ${({ size }) => sizeStyles[size].dotSize};
    border-radius: 50%;
    background-color: ${({ checked, disabled, variant }) => 
      checked
        ? disabled
          ? variantStyles[variant].disabledDotColor
          : variantStyles[variant].dotColor
        : 'transparent'
    };
  }
`;

const RadioWrapper = styled.div<{
  variant: 'default' | 'error';
  disabled: boolean;
}>`
  display: flex;
  align-items: center;

  &:focus-within:not(:has(input:disabled)) {
    ${StyledRadio} {
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

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      checked,
      defaultChecked,
      size = 'medium',
      variant = 'default',
      disabled = false,
      errorMessage,
      description,
      onChange,
      className,
      style,
      value,
      ...props
    },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      onChange?.(newChecked, event);
    };
    
    return (
      <div className={className} style={style}>
        <RadioContainer disabled={disabled} size={size}>
          <RadioWrapper variant={variant} disabled={disabled}>
            <HiddenRadio
              type="radio"
              ref={ref}
              checked={checked}
              defaultChecked={defaultChecked}
              onChange={handleChange}
              disabled={disabled}
              tabIndex={disabled ? -1 : 0}
              value={value}
              {...props}
            />
            <StyledRadio
              checked={checked ?? defaultChecked ?? false}
              size={size}
              variant={variant}
              disabled={disabled}
            />
          </RadioWrapper>
          
          {(label || description || (variant === 'error' && errorMessage)) && (
            <LabelContainer>
              {label && <Label size={size}>{label}</Label>}
              {description && <Description size={size}>{description}</Description>}
              {variant === 'error' && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            </LabelContainer>
          )}
        </RadioContainer>
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;