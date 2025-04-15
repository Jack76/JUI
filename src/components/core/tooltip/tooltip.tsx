import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

// 动画
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// 样式
const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  contain: layout; /* 隔离布局，防止重排 */
`;

const TooltipContent = styled.div<{
  theme: 'dark' | 'light';
  placement: 'top' | 'bottom' | 'left' | 'right';
  hasArrow: boolean;
  size: 'small' | 'default' | 'wide';
  animationDuration: 'fast' | 'normal';
}>`
  position: absolute;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--color-neutral-800)' : 'var(--color-background)'};
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--color-text-inverse)' : 'var(--color-text)'};
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  max-width: ${({ size }) =>
    size === 'small' ? '200px' : size === 'wide' ? '400px' : '300px'};
  min-width: ${({ size }) => (size === 'small' ? '80px' : 'auto')};
  width: max-content;
  will-change: opacity;
  opacity: 0; /* 初始隐藏 */
  animation: ${({ animationDuration }) =>
    css`${fadeIn} ${animationDuration === 'fast' ? '150ms' : '300ms'} ease-in-out forwards`};

  /* 位置 */
  ${({ placement }) => {
    switch (placement) {
      case 'top':
        return css`
          bottom: calc(100% + var(--spacing-xs));
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom':
        return css`
          top: calc(100% + var(--spacing-xs));
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return css`
          right: calc(100% + var(--spacing-xs));
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'right':
        return css`
          left: calc(100% + var(--spacing-xs));
          top: 50%;
          transform: translateY(-50%);
        `;
      default:
        return css``;
    }
  }}

  /* 箭头 */
  ${({ hasArrow, placement, theme }) =>
    hasArrow &&
    css`
      &::before {
        content: '';
        position: absolute;
        border: 5px solid transparent;
        ${placement === 'top' &&
        css`
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-top-color: ${theme === 'dark'
            ? 'var(--color-neutral-800)'
            : 'var(--color-background)'};
        `}
        ${placement === 'bottom' &&
        css`
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-bottom-color: ${theme === 'dark'
            ? 'var(--color-neutral-800)'
            : 'var(--color-background)'};
        `}
        ${placement === 'left' &&
        css`
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          border-left-color: ${theme === 'dark'
            ? 'var(--color-neutral-800)'
            : 'var(--color-background)'};
        `}
        ${placement === 'right' &&
        css`
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          border-right-color: ${theme === 'dark'
            ? 'var(--color-neutral-800)'
            : 'var(--color-background)'};
        `}
      }
    `}
`;

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  hasArrow?: boolean;
  size?: 'small' | 'default' | 'wide';
  trigger?: 'hover' | 'click';
  animationDuration?: 'fast' | 'normal';
  disabled?: boolean;
};

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  theme = 'dark',
  placement = 'top',
  hasArrow = true,
  size = 'default',
  trigger = 'hover',
  animationDuration = 'normal',
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      setIsVisible(false);
    };
  }, []);

  const showTooltip = () => {
    if (!disabled && trigger !== 'click') {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const toggleTooltip = () => {
    if (!disabled && trigger === 'click') {
      setIsVisible((prev) => !prev);
    }
  };

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (trigger === 'click') {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [trigger]);

  return (
    <TooltipWrapper
      ref={wrapperRef}
      onMouseEnter={trigger === 'hover' ? showTooltip : undefined}
      onMouseLeave={trigger === 'hover' ? hideTooltip : undefined}
      onFocus={trigger === 'hover' ? showTooltip : undefined}
      onBlur={trigger === 'hover' ? hideTooltip : undefined}
      onClick={trigger === 'click' ? toggleTooltip : undefined}
      role="tooltip"
      aria-describedby={isVisible ? 'tooltip-content' : undefined}
    >
      {children}
      {isVisible && !disabled && (
        <TooltipContent
          id="tooltip-content"
          theme={theme}
          placement={placement}
          hasArrow={hasArrow}
          size={size}
          animationDuration={animationDuration}
        >
          {content}
        </TooltipContent>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;