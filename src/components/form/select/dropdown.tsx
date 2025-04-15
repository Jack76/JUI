import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { SelectOption } from './select';

type DropdownProps = {
  options: SelectOption[];
  selectedValues: string[];
  highlightedIndex: number;
  searchable: boolean;
  searchTerm: string;
  multiple: boolean;
  maxHeight?: number;
  onOptionSelect: (value: string) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styles
const DropdownContainer = styled.div<{ maxHeight?: number }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: var(--spacing-xxs);
  background-color: var(--color-background);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  z-index: 1000;
  max-height: ${({ maxHeight }) => maxHeight ? `${maxHeight}px` : '250px'};
  overflow-y: auto;
  animation: ${fadeIn} var(--transition-normal);
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: var(--spacing-xs);
  border-bottom: 1px solid var(--color-neutral-200);
  outline: none;
  font-size: var(--font-size-sm);
  
  &:focus {
    border-bottom-color: var(--color-primary);
  }
`;

const OptionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text-tertiary);
  
  svg, .MuiSvgIcon-root {
    width: var(--font-size-md) !important;
    height: var(--font-size-md) !important;
    font-size: var(--font-size-md) !important;
    color: var(--color-text-tertiary) !important;
  }
`;

const OptionItem = styled.li<{ 
  isSelected?: boolean;
  isDisabled?: boolean;
  isHighlighted?: boolean;
}>`
  padding: var(--spacing-xs);
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm); /* Reduced font size for dropdown options */
  position: relative;
  
  ${({ isSelected }) => isSelected && css`
    background-color: var(--color-primary-light);
    color: var(--color-primary-dark);
    font-weight: 500;
  `}
  
  ${({ isDisabled }) => isDisabled && css`
    opacity: 0.5;
  `}
  
  ${({ isHighlighted, isDisabled }) => !isDisabled && isHighlighted && css`
    background-color: var(--color-neutral-100);
  `}
  
  &:hover:not(:disabled) {
    background-color: ${({ isSelected }) => 
      isSelected ? 'var(--color-primary-light)' : 'var(--color-neutral-100)'};
  }
`;

const OptionContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: var(--spacing-xs);
`;

// 选中图标样式
const CheckIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  color: var(--color-text-tertiary);
  
  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    transform: rotate(45deg);
  }
`;

const NoOptions = styled.div`
  padding: var(--spacing-xs);
  color: var(--color-text-tertiary);
  text-align: center;
  font-size: var(--font-size-sm);
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValues,
  highlightedIndex,
  searchable,
  searchTerm,
  multiple,
  maxHeight = 250,
  onOptionSelect,
  onSearchChange,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // When dropdown opens, focus the search input if searchable
  useEffect(() => {
    if (searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchable]);
  
  return (
    <DropdownContainer maxHeight={maxHeight}>
      {searchable && (
        <SearchInput
          ref={searchInputRef}
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search..."
          onClick={(e) => e.stopPropagation()}
        />
      )}
      
      <OptionsList role="listbox" aria-multiselectable={multiple}>
        {options.length > 0 ? (
          options.map((option, index) => {
            const isSelected = selectedValues.includes(option.value);
            
            return (
              <OptionItem
                key={option.value}
                isSelected={isSelected}
                isDisabled={option.disabled}
                isHighlighted={index === highlightedIndex}
                onClick={() => !option.disabled && onOptionSelect(option.value)}
                role="option"
                aria-selected={isSelected}
                aria-disabled={option.disabled}
              >
                <OptionContent>
                  {option.icon && <IconContainer>{option.icon}</IconContainer>}
                  {option.label}
                </OptionContent>
                
                {/* 显示选中标记 */}
                {isSelected && <CheckIcon />}
              </OptionItem>
            );
          })
        ) : (
          <NoOptions>No options found</NoOptions>
        )}
      </OptionsList>
    </DropdownContainer>
  );
};

export default Dropdown;