import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

// 定义 Props 类型（避免与原生 size 冲突）
type InputProps = {
  variant?: 'default' | 'error';
  inputSize?: 'small' | 'medium' | 'large'; // 改为 inputSize
  fluid?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  label?: string;
  errorMessage?: string;
  loading?: boolean;
  showPasswordToggle?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>; // 排除原生 size

// 动画
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// 样式配置
const variantStyles = {
  default: {
    borderColor: 'var(--color-neutral-300)',
    hoverBorderColor: 'var(--color-text-tertiary)',
    focusBorderColor: 'var(--color-primary)',
    shadowColor: 'rgba(59, 130, 246, 0.2)',
  },
  error: {
    borderColor: 'var(--color-error)',
    hoverBorderColor: 'var(--color-error-hover)',
    focusBorderColor: 'var(--color-error)',
    shadowColor: 'rgba(220, 38, 38, 0.2)',
  },
};

const sizeStyles = {
  small: {
    fontSize: 'var(--font-size-xs)',
    height: '1.625rem',
    padding: '0 var(--spacing-xxs)',
  },
  medium: {
    fontSize: 'var(--font-size-base)',
    height: '2.125rem',
    padding: '0 var(--spacing-xs)',
  },
  large: {
    fontSize: 'var(--font-size-md)',
    height: '2.625rem',
    padding: '0 var(--spacing-sm)',
  },
};

// 组件样式
const InputWrapper = styled.div<{ fluid?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
`;

const StyledInputContainer = styled.div<{
  variant: 'default' | 'error';
  inputSize: 'small' | 'medium' | 'large';
  fluid?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ variant }) => variantStyles[variant].borderColor};
  border-radius: var(--radius-sm);
  background-color: ${({ disabled }) => disabled ? 'var(--color-neutral-100)' : 'var(--color-background)'};
  transition: border-color var(--transition-normal), background-color var(--transition-normal);

  /* 添加hover效果 - 根据variant变化 */
  &:hover:not(:has(input:disabled)) {
    border-color: ${({ variant }) => variantStyles[variant].hoverBorderColor};
  }

  &:focus-within:not(:has(input:disabled)) {
    border-color: ${({ variant }) => variantStyles[variant].focusBorderColor};
    box-shadow: 0 0 0 2px ${({ variant }) => variantStyles[variant].shadowColor};
  }

  ${({ inputSize }) => sizeStyles[inputSize]};
  ${({ fluid }) => fluid && css`width: 100%;`};
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
  `};
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font-family);
  background: transparent;
  color: var(--color-text);
  width: 100%;
  
  &:disabled {
    cursor: not-allowed;
    color: var(--color-text-disabled);
  }
`;

const IconBox = styled.span`
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-xxs) 0 0;
  color: var(--color-text-tertiary);
  
  /* 调整图标大小为16px，确保中性颜色 */
  svg, .MuiSvgIcon-root {
    width: var(--font-size-md) !important; /* 16px */
    height: var(--font-size-md) !important; /* 16px */
    font-size: var(--font-size-md) !important; /* 对于MUI图标 */
    color: var(--color-text-tertiary) !important; /* 强制使用中性色 */
  }
`;

const Label = styled.label`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xxs);
`;

const ErrorText = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-error);
  margin-top: var(--spacing-xxs);
`;

const Spinner = styled.div`
  border: 2px solid var(--color-text-tertiary);
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: 0 var(--spacing-xs);
  cursor: pointer;
  color: var(--color-text-tertiary);
`;

const Input: React.FC<InputProps> = ({
  variant = 'default',
  inputSize = 'medium', // 使用 inputSize
  fluid = false,
  startIcon,
  endIcon,
  prefix,
  suffix,
  label,
  errorMessage,
  loading = false,
  showPasswordToggle = false,
  type = 'text',
  disabled = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const effectiveType = showPasswordToggle && type === 'password'
    ? showPassword ? 'text' : 'password'
    : type;

  return (
    <InputWrapper fluid={fluid}>
      {label && <Label>{label}</Label>}
      <StyledInputContainer 
        variant={variant} 
        inputSize={inputSize} 
        fluid={fluid}
        disabled={disabled}
      >
        {startIcon && <IconBox>{startIcon}</IconBox>}
        {prefix && <IconBox>{prefix}</IconBox>}
        <StyledInput type={effectiveType} disabled={disabled} {...props} />
        {loading && <Spinner />}
        {suffix && <IconBox>{suffix}</IconBox>}
        {showPasswordToggle && type === 'password' && !disabled && (
          <ToggleButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </ToggleButton>
        )}
        {endIcon && <IconBox>{endIcon}</IconBox>}
      </StyledInputContainer>
      {variant === 'error' && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputWrapper>
  );
};

export default Input;