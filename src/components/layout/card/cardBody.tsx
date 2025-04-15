import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface CardBodyProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const StyledCardBody = styled.div({
  padding: 'var(--spacing-lg)',
  flex: '1 1 auto',
  fontSize: 'var(--font-size-base)',
  lineHeight: 'var(--line-height-normal)',
  color: 'var(--color-text)',
  
  '& p': {
    margin: '0 0 var(--spacing-md)',
    '&:last-child': {
      marginBottom: 0,
    }
  },
  
  '& ul, & ol': {
    margin: '0 0 var(--spacing-md)',
    paddingLeft: 'var(--spacing-lg)',
    '&:last-child': {
      marginBottom: 0,
    }
  }
});

const CardBody: React.FC<CardBodyProps> = ({ children, ...props }) => {
  return <StyledCardBody {...props}>{children}</StyledCardBody>;
};

export default CardBody;