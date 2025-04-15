import React from 'react';
import styled from '@emotion/styled';
import { RadioProps } from './radio';

export type RadioGroupProps = {
  /**
   * Group label
   */
  label?: string;
  /**
   * Layout direction
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Radio group name
   */
  name: string;
  /**
   * Child radio components
   */
  children: React.ReactNode;
};

const RadioGroupContainer = styled.fieldset<{ direction: 'horizontal' | 'vertical' }>`
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

const radiogroup: React.FC<RadioGroupProps> = ({
  label,
  direction = 'vertical',
  name,
  children,
}) => {
  return (
    <RadioGroupContainer direction={direction} role="radiogroup">
      {label && <GroupLabel>{label}</GroupLabel>}
      {React.Children.map(children, (child) =>
        React.isValidElement<RadioProps>(child)
          ? React.cloneElement(child, { name } as Partial<RadioProps>)
          : child
      )}
    </RadioGroupContainer>
  );
};

radiogroup.displayName = 'radiogroup';

export default radiogroup;