import * as RadixToggle from '@radix-ui/react-toggle';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import React, { ReactElement } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large' | 'icon' | 'iconSmall' | 'iconLarge';
  disabled?: boolean;
  loading?: boolean;
  fluid?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

interface StyledButtonProps extends RadixToggle.ToggleProps {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  fluid?: boolean;
  loading?: boolean;
}

interface IconComponentProps {
  style?: React.CSSProperties;
  [key: string]: any;
}

const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-family)',
  fontWeight: 'var(--font-weight-medium)',
  borderRadius: 'var(--radius-sm)',
  border: 'none',
  cursor: 'pointer',
  transition: 'var(--transition-normal)',
  textDecoration: 'none',
  gap: 'var(--spacing-xs)',
};

const variantStyles = {
  primary: {
    background: 'var(--gradient-primary)',
    color: 'white',
    '&:hover:not(:disabled)': {
      background: 'var(--gradient-primary-hover)',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    '&:active:not(:disabled)': {
      transform: 'translateY(0)',
      boxShadow: 'none',
    },
  },
  secondary: {
    backgroundColor: 'var(--color-secondary)',
    color: 'white',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-secondary-hover)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
  },
  outline: {
    backgroundColor: 'transparent',
    border: '1px solid var(--color-primary)',
    color: 'var(--color-primary)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-outline-hover)',
      boxShadow: 'var(--shadow-sm)',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-ghost-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--color-divider)',
    },
  },
  danger: {
    backgroundColor: 'var(--color-error)',
    color: 'white',
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-error-hover)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
  },
};

const iconColorMap: Record<ButtonProps['variant'] & string, string> = {
  primary: 'white',
  secondary: 'white',
  outline: 'var(--color-primary)',
  ghost: 'var(--color-text)',
  danger: 'white',
};

const sizeStyles = {
  small: {
    padding: 'var(--spacing-xxs) var(--spacing-xs)',
    fontSize: 'var(--font-size-xs)',
    height: '1.75rem', // ~28px
  },
  medium: {
    padding: 'var(--spacing-xs) var(--spacing-sm)',
    fontSize: 'var(--font-size-base)',
    height: '2.25rem', // ~36px (16px * 2.25)
  },
  large: {
    padding: 'var(--spacing-sm) var(--spacing-md)',
    fontSize: 'var(--font-size-md)',
    height: '2.75rem', // ~44px (16px * 2.75)
  },
  icon: {
    padding: 'var(--spacing-sm)',
    width: '2.5rem', // ~40px
    height: '2.5rem',
  },
  iconSmall: {
    padding: 'var(--spacing-xs)',
    width: '1.75rem', // ~28px
    height: '1.75rem',
  },
  iconLarge: {
    padding: 'var(--spacing-md)',
    width: '3.25rem', // ~52px
    height: '3.25rem',
  },
};

const fluidStyles = {
  width: '100%',
};

const StyledButton = styled(RadixToggle.Root, {
  shouldForwardProp: (prop: string) => !['fluid', 'loading', 'startIcon', 'endIcon'].includes(prop),
})<StyledButtonProps>(
  baseStyles,
  ({ variant = 'primary' }) => variantStyles[variant],
  ({ size = 'medium' }) => sizeStyles[size],
  ({ fluid }) => fluid && fluidStyles,
  ({ disabled }) =>
    disabled && {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  ({ loading }) =>
    loading && {
      opacity: 0.8,
      cursor: 'progress',
    },
  {
    '&:focus-visible': {
      outline: '2px solid var(--color-primary)',
      outlineOffset: '2px',
      boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.12)',
    },
  }
);

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fluid = false,
  startIcon = null,
  endIcon = null,
  children = null,
  ...props
}) => {
  const renderLoadingState = () => (
    <span
      css={css`
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
      `}
    >
      <span
        css={css`
          width: 16px;
          height: 16px;
          border: 2px solid ${iconColorMap[variant] || 'currentColor'};
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        `}
      />
      {typeof children === 'string' ? 'Loading' : null}
    </span>
  );

  const renderChildren = () => {
    if (loading) return renderLoadingState();

    const content: React.ReactNode[] = [];

    if (startIcon) {
      if (React.isValidElement<IconComponentProps>(startIcon)) {
        content.push(
          React.cloneElement(startIcon, {
            key: 'start-icon',
            style: {
              color: iconColorMap[variant] || 'inherit',
              ...(startIcon.props.style || {}),
            },
          })
        );
      } else {
        content.push(<span key="start-icon">{startIcon}</span>);
      }
    }

    if (children) {
      const childrenArray = React.Children.toArray(children);
      childrenArray.forEach((child, index) => {
        if (
          React.isValidElement<IconComponentProps>(child) &&
          typeof child.type !== 'string' &&
          typeof (child.type as any).displayName === 'string' &&
          (child.type as any).displayName.includes('Icon')
        ) {
          content.push(
            React.cloneElement(child, {
              key: `child-${index}`,
              style: {
                color: iconColorMap[variant] || 'inherit',
                ...(child.props.style || {}),
              },
            })
          );
        } else {
          content.push(
            <React.Fragment key={`child-${index}`}>
              {child}
            </React.Fragment>
          );
        }
      });
    }

    if (endIcon) {
      if (React.isValidElement<IconComponentProps>(endIcon)) {
        content.push(
          React.cloneElement(endIcon, {
            key: 'end-icon',
            style: {
              color: iconColorMap[variant] || 'inherit',
              ...(endIcon.props.style || {}),
            },
          })
        );
      } else {
        content.push(<span key="end-icon">{endIcon}</span>);
      }
    }

    return content;
  };

  return (
    <>
      <Global
        styles={css`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      />
      <StyledButton
        variant={variant}
        size={size}
        disabled={disabled || loading}
        loading={loading}
        fluid={fluid}
        aria-busy={loading}
        {...props}
      >
        {renderChildren()}
      </StyledButton>
    </>
  );
};

export default Button;