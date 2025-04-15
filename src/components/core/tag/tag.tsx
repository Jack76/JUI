import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import IconComponent from '../../core/iconComponent/iconComponent';
import Tooltip from '../tooltip/tooltip';

// 动画
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

// 类型定义
export type TagProps = {
  label: string;
  variant?: 'default' | 'error' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  removable?: boolean;
  clickable?: boolean;
  disabled?: boolean;
  isSelected?: boolean;
  icon?: React.ReactNode;
  fluid?: boolean;
  maxWidth?: string;
  onClick?: (label: string) => void;
  onRemove?: (label: string) => void;
};

// 样式配置
const sizeStyles = {
  small: {
    fontSize: 'var(--font-size-xs)',
    padding: '0.125rem 0.5rem',
    height: '1.25rem',
  },
  medium: {
    fontSize: 'var(--font-size-sm)',
    padding: '0.25rem 0.75rem',
    height: '1.5rem',
  },
  large: {
    fontSize: 'var(--font-size-base)',
    padding: '0.375rem 1rem',
    height: '2rem',
  },
};

const variantStyles = {
    default: {
      backgroundColor: 'var(--color-neutral-200)', // #e2e8f0
      color: 'var(--color-text)', // #1e293b
      hoverBackground: 'var(--color-neutral-300)', // #cbd5e1
      selectedBackground: 'var(--color-neutral-400)', // #94a3b8
    },
    error: {
      backgroundColor: 'var(--color-error-light)', // #ffecef
      color: 'var(--color-error-dark)', // #b32740
      hoverBackground: 'var(--color-error-light-hover)', 
      selectedBackground: 'var(--color-error-light-active)', 
    },
    success: {
      backgroundColor: 'var(--color-success-light)', // #e6f9ef
      color: 'var(--color-success-dark)', // #0a804b
      hoverBackground: 'var(--color-success-light-hover)', 
      selectedBackground: 'var(--color-success-light-active)', 
    },
    warning: {
      backgroundColor: 'var(--color-warning-light)', // #fff3e6
      color: 'var(--color-warning-dark)', // #b36800
      hoverBackground: 'var(--color-warning-light-active)', // #ff9500
      selectedBackground: 'var(--color-warning)', // #ff9500
    },
  };

// 组件样式
const TagWrapper = styled.div<{ fluid?: boolean; isRemoving?: boolean }>`
  display: inline-flex;
  align-items: center;
  width: ${({ fluid }) => (fluid ? '100%' : 'fit-content')};
  animation: ${({ isRemoving }) =>
    isRemoving
      ? css`
          ${fadeOut} var(--transition-normal) forwards
        `
      : css`
          ${fadeIn} var(--transition-normal)
        `};
`;

const StyledTag = styled.div<{
  variant: 'default' | 'error' | 'success' | 'warning';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  clickable?: boolean;
  isSelected?: boolean;
  maxWidth?: string;
}>`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xxs);
  border-radius: var(--radius-sm);
  background-color: ${({ variant, isSelected }) =>
    isSelected
      ? variantStyles[variant].selectedBackground
      : variantStyles[variant].backgroundColor};
  color: ${({ variant }) => variantStyles[variant].color};
  transition: background-color var(--transition-normal),
    transform var(--transition-fast);
  cursor: ${({ clickable, disabled }) =>
    disabled ? 'not-allowed' : clickable ? 'pointer' : 'default'};
  max-width: ${({ maxWidth }) => maxWidth || '200px'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ size }) => sizeStyles[size]};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `};

  ${({ clickable, variant, disabled, isSelected }) =>
    clickable &&
    !disabled &&
    !isSelected &&
    css`
      &:hover {
        background-color: ${variantStyles[variant].hoverBackground};
      }
    `};

  &:focus {
    outline: 2px solid
      ${({ variant }) =>
        variantStyles[variant].color === 'var(--color-text)'
          ? 'var(--color-primary)'
          : variantStyles[variant].color};
    outline-offset: 2px;
  }
`;

const TagLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  cursor: pointer;
  padding: 0;
  font-size: var(--font-size-sm);

  &:hover {
    color: var(--color-primary);
  }
`;

const IconBox = styled.span`
  display: flex;
  align-items: center;
  color: var(--color-text-tertiary);

  svg,
  .MuiSvgIcon-root {
    width: var(--font-size-md) !important;
    height: var(--font-size-md) !important;
    font-size: var(--font-size-md) !important;
    color: var(--color-text-tertiary) !important;
  }
`;

const Tag: React.FC<TagProps> = ({
  label,
  variant = 'default',
  size = 'medium',
  removable = false,
  clickable = false,
  disabled = false,
  isSelected = false,
  icon,
  fluid = false,
  maxWidth,
  onClick,
  onRemove,
}) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRemoving(true);
    setTimeout(() => {
      onRemove?.(label);
    }, 300); // 等待动画完成
  };

  const handleClick = () => {
    if (!disabled && clickable) {
      onClick?.(label);
    }
  };

  return (
    <TagWrapper fluid={fluid} isRemoving={isRemoving}>
      <Tooltip
        content={label}
        disabled={!maxWidth || label.length <= 20}
        theme="dark"
        placement="right"
        hasArrow={true}
        size="default"
        trigger="hover"
        animationDuration="normal"
      >
        <StyledTag
          variant={variant}
          size={size}
          disabled={disabled}
          clickable={clickable}
          isSelected={isSelected}
          maxWidth={maxWidth}
          onClick={handleClick}
          role={clickable ? 'button' : 'status'}
          aria-disabled={disabled}
          aria-selected={isSelected}
          tabIndex={clickable && !disabled ? 0 : undefined}
          onKeyDown={(e) => {
            if (clickable && !disabled && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              onClick?.(label);
            }
          }}
        >
          {icon && <IconBox>{icon}</IconBox>}
          <TagLabel>{label}</TagLabel>
          {removable && !disabled && (
            <RemoveButton
              onClick={handleRemove}
              aria-label={`Remove ${label}`}
              type="button"
            >
              ×
            </RemoveButton>
          )}
        </StyledTag>
      </Tooltip>
    </TagWrapper>
  );
};

export default Tag;