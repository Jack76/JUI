import React from 'react';
import styled from '@emotion/styled';

export type CheckboxGroupProps = {
  /**
   * Group label
   */
  label?: string;
  /**
   * Layout direction
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Child checkbox components
   */
  children: React.ReactNode;
};

const CheckboxGroupContainer = styled.fieldset<{ direction: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};
  gap: var(--spacing-xs);
  border: none;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GroupLabel = styled.legend`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xxs);
`;

const checkboxgroup: React.FC<CheckboxGroupProps> = ({
  label,
  direction = 'vertical',
  children,
}) => {
  return (
    <CheckboxGroupContainer direction={direction} role="group">
      {label && <GroupLabel>{label}</GroupLabel>}
      {children}
    </CheckboxGroupContainer>
  );
};

checkboxgroup.displayName = 'checkboxgroup';

export default checkboxgroup;