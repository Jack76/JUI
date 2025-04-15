import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface CardFooterProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const StyledCardFooter = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: 'var(--spacing-md) var(--spacing-lg)',
  borderTop: '1px solid var(--color-divider)',
  gap: 'var(--spacing-sm)',
});

const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }) => {
  return <StyledCardFooter {...props}>{children}</StyledCardFooter>;
};

export default CardFooter;