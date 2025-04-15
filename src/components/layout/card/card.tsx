import React, { ReactNode, MouseEvent } from 'react';
import styled from '@emotion/styled';

interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  isInteractive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const StyledCard = styled.div<CardProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--color-background)',
    overflow: 'hidden',
    transition: 'var(--transition-normal)',
    position: 'relative',
  },
  ({ variant = 'elevated' }) => {
    switch (variant) {
      case 'elevated':
        return {
          boxShadow: 'var(--shadow-md)',
          '&:hover': {
            boxShadow: 'var(--shadow-lg)',
          },
        };
      case 'outlined':
        return {
          border: '1px solid var(--color-divider)',
          '&:hover': {
            borderColor: 'var(--color-divider-hover)',
          },
        };
      case 'filled':
        return {
          backgroundColor: 'var(--color-surface-2)',
          '&:hover': {
            backgroundColor: 'var(--color-surface-3)',
          },
        };
      default:
        return {};
    }
  },
  ({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return { borderRadius: 'var(--radius-md)' };
      case 'large':
        return { borderRadius: 'var(--radius-xl)' };
      default:
        return { borderRadius: 'var(--radius-lg)' };
    }
  },
  ({ isInteractive }) =>
    isInteractive && {
      cursor: 'pointer',
      transition: 'var(--transition-normal)',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
      '&:active': {
        transform: 'translateY(0)',
      },
    },
  ({ isDisabled }) =>
    isDisabled && {
      opacity: 0.6,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    }
);

const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  size = 'medium',
  isInteractive = false,
  isDisabled = false,
  onClick,
  children,
  ...props
}) => {
  return (
    <StyledCard
      variant={variant}
      size={size}
      isInteractive={isInteractive || !!onClick}
      isDisabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;