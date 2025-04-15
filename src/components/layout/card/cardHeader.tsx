import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Button from '../../core/button';
import IconComponent from '../../core/iconComponent/iconComponent';

interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  iconButton?: {
    iconName: string;
    onClick?: () => void;
    disabled?: boolean;
  };
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const StyledCardHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 'var(--spacing-md) var(--spacing-lg)',
  borderBottom: '1px solid var(--color-divider)',
  position: 'relative',
});

const CardTitle = styled.h3({
  margin: 0,
  fontSize: 'var(--font-size-md)',
  fontWeight: 'var(--font-weight-medium)',
  lineHeight: 'var(--line-height-tight)',
  color: 'var(--color-text)',
});

const CardSubtitle = styled.p({
  margin: '0.25rem 0 0',
  fontSize: 'var(--font-size-base)',
  lineHeight: 'var(--line-height-normal)',
  color: 'var(--color-text-secondary)',
});

const TitleContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const ActionContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-sm)',
});

const IconButtonContainer = styled.div({
  position: 'absolute',
  top: 'var(--spacing-sm)',
  right: 'var(--spacing-sm)',
});

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  iconButton,
  children,
  ...props
}) => {
  if (children) {
    return (
      <StyledCardHeader {...props}>
        {children}
        {iconButton && (
          <IconButtonContainer>
            <Button
              variant="ghost"
              size="iconSmall"
              onClick={iconButton.onClick}
              disabled={iconButton.disabled}
            >
              <IconComponent iconName={iconButton.iconName} />
            </Button>
          </IconButtonContainer>
        )}
      </StyledCardHeader>
    );
  }

  return (
    <StyledCardHeader {...props}>
      <TitleContainer>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      </TitleContainer>
      {action && <ActionContainer>{action}</ActionContainer>}
      {iconButton && (
        <IconButtonContainer>
          <Button
            variant="ghost"
            size="iconSmall"
            onClick={iconButton.onClick}
            disabled={iconButton.disabled}
          >
            <IconComponent iconName={iconButton.iconName} />
          </Button>
        </IconButtonContainer>
      )}
    </StyledCardHeader>
  );
};

export default CardHeader;