import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import Dropdown from './dropdown'; // Importing the new Dropdown component

// Types
export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type SelectProps = {
  options: SelectOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  placeholder?: string;
  label?: string;
  variant?: 'default' | 'error';
  size?: 'small' | 'medium' | 'large';
  fluid?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  errorMessage?: string;
  maxDropdownHeight?: number;
  onChange?: (value: string | string[]) => void;
  onSearch?: (searchTerm: string) => void;
};

// Animation
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Styles
const SelectWrapper = styled.div<{ fluid?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fluid }) => (fluid ? '100%' : 'fit-content')};
  position: relative;
  font-family: var(--font-family);
`;

const Label = styled.label`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xxs);
`;

const ErrorText = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-error);
  margin-top: var(--spacing-xxs);
`;

const variantStyles = {
  default: {
    borderColor: 'var(--color-neutral-300)',
    hoverBorderColor: 'var(--color-text-tertiary)',
    focusBorderColor: 'var(--color-primary)',
  },
  error: {
    borderColor: 'var(--color-error)',
    hoverBorderColor: 'var(--color-error-hover)',
    focusBorderColor: 'var(--color-error)',
  },
};

const sizeStyles = {
  small: {
    fontSize: 'var(--font-size-xs)',
    height: '1.625rem',
    padding: '0 var(--spacing-xxs)',
  },
  medium: {
    fontSize: 'var(--font-size-base)',
    height: '2.125rem',
    padding: '0 var(--spacing-xs)',
  },
  large: {
    fontSize: 'var(--font-size-md)',
    height: '2.625rem',
    padding: '0 var(--spacing-sm)',
  },
};

const SelectControl = styled.div<{
  variant: 'default' | 'error';
  size: 'small' | 'medium' | 'large';
  fluid?: boolean;
  disabled?: boolean;
  isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ variant, isOpen }) => 
    isOpen 
      ? variantStyles[variant].focusBorderColor
      : variantStyles[variant].borderColor
  };
  border-radius: var(--radius-sm);
  background-color: ${({ disabled }) => disabled ? 'var(--color-neutral-100)' : 'var(--color-background)'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all var(--transition-normal);
  user-select: none;
  
  ${({ size }) => sizeStyles[size]};
  ${({ fluid }) => fluid && css`width: 100%;`};
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
  `};
  
  &:hover:not(:disabled) {
    border-color: ${({ variant }) => variantStyles[variant].hoverBorderColor};
  }
  
  ${({ isOpen, variant }) => isOpen && css`
    border-color: ${variantStyles[variant].focusBorderColor};
    box-shadow: 0 0 0 2px ${variant === 'error' 
      ? 'rgba(220, 38, 38, 0.2)' 
      : 'rgba(59, 130, 246, 0.2)'};
  `}
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: var(--spacing-xxs);
  padding: 0 var(--spacing-xs) 0 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text-tertiary);
  
  /* 确保图标为中性色 */
  svg, .MuiSvgIcon-root {
    width: var(--font-size-md) !important; /* 16px */
    height: var(--font-size-md) !important; /* 16px */
    font-size: var(--font-size-md) !important;
    color: var(--color-text-tertiary) !important;
  }
`;

const Placeholder = styled.div`
  color: var(--color-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SingleValue = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;

const MultiValue = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xxs);
  max-width: 100%;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-neutral-200);
  border-radius: var(--radius-sm);
  padding: 0 var(--spacing-xxs);
  font-size: var(--font-size-xs);
  max-width: 150px;
  
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const TagRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  cursor: pointer;
  margin-left: var(--spacing-xxs);
  padding: 0;
  font-size: var(--font-size-sm);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const Spinner = styled.div`
  border: 2px solid var(--color-background);
  border-top: 2px solid var(--color-primary);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
  margin-right: var(--spacing-xs); /* Added spacing between spinner and arrow */
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  border-style: solid;
  border-width: 0.15em 0.15em 0 0;
  content: '';
  display: inline-block;
  height: 0.45em;
  width: 0.45em;
  position: relative;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(135deg)')};
  transition: transform var(--transition-fast);
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-tertiary);
  padding: 0 var(--spacing-xxs);
  margin-right: var(--spacing-xs); /* Added spacing between clear button and arrow */
  
  &:hover {
    color: var(--color-primary);
  }
  
  /* X symbol */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 10px;
    background-color: currentColor;
  }
  
  &::before {
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
`;

const Select: React.FC<SelectProps> = ({
  options,
  value,
  defaultValue,
  placeholder = 'Select an option',
  label,
  variant = 'default',
  size = 'medium',
  fluid = false,
  disabled = false,
  searchable = false,
  clearable = false,
  multiple = false,
  loading = false,
  startIcon,
  errorMessage,
  maxDropdownHeight = 250,
  onChange,
  onSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [selectedValues, setSelectedValues] = useState<string[]>(() => {
    if (value !== undefined) {
      return Array.isArray(value) ? value : value ? [value] : [];
    }
    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : [];
    }
    return [];
  });
  
  const selectRef = useRef<HTMLDivElement>(null);
  
  // 外部输入的值变化时更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValues(Array.isArray(value) ? value : value ? [value] : []);
    }
  }, [value]);
  
  // 关闭下拉菜单的点击外部处理
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);
  
  // 处理键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      const filteredOptions = options.filter(
        option => !option.disabled && option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            handleOptionSelect(filteredOptions[highlightedIndex].value);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, highlightedIndex, options, searchTerm]);
  
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setHighlightedIndex(-1);
      setSearchTerm('');
    }
  };
  
  const handleOptionSelect = (optionValue: string) => {
    let newValues;
    
    if (multiple) {
      if (selectedValues.includes(optionValue)) {
        newValues = selectedValues.filter(v => v !== optionValue);
      } else {
        newValues = [...selectedValues, optionValue];
      }
      
      setSelectedValues(newValues);
      onChange?.(newValues);
      
      // 多选时点击不关闭下拉框
    } else {
      newValues = [optionValue];
      setSelectedValues(newValues);
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };
  
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValues([]);
    onChange?.(multiple ? [] : '');
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setHighlightedIndex(-1);
    onSearch?.(term);
  };
  
  const handleTagRemove = (e: React.MouseEvent, optionValue: string) => {
    e.stopPropagation();
    const newValues = selectedValues.filter(v => v !== optionValue);
    setSelectedValues(newValues);
    onChange?.(newValues);
  };
  
  const renderValue = () => {
    if (selectedValues.length === 0) {
      return <Placeholder>{placeholder}</Placeholder>;
    }
    
    if (multiple) {
      return (
        <MultiValue>
          {selectedValues.map(val => {
            const option = options.find(opt => opt.value === val);
            if (!option) return null;
            
            return (
              <Tag key={val}>
                {option.icon && <IconContainer>{option.icon}</IconContainer>}
                <span>{option.label}</span>
                <TagRemove 
                  onClick={(e) => handleTagRemove(e, val)}
                  aria-label={`Remove ${option.label}`}
                >
                  ×
                </TagRemove>
              </Tag>
            );
          })}
        </MultiValue>
      );
    }
    
    const selectedOption = options.find(opt => opt.value === selectedValues[0]);
    if (!selectedOption) return <Placeholder>{placeholder}</Placeholder>;
    
    return (
      <SingleValue>
        {selectedOption.icon && <IconContainer>{selectedOption.icon}</IconContainer>}
        {selectedOption.label}
      </SingleValue>
    );
  };
  
  const filteredOptions = options.filter(
    option => option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <SelectWrapper fluid={fluid} ref={selectRef}>
      {label && <Label>{label}</Label>}
      
      <SelectControl
        variant={variant}
        size={size}
        fluid={fluid}
        disabled={disabled}
        isOpen={isOpen}
        onClick={toggleDropdown}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <ValueContainer>
          {startIcon && <IconContainer>{startIcon}</IconContainer>}
          {renderValue()}
        </ValueContainer>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {loading && <Spinner />}
          
          {clearable && selectedValues.length > 0 && !disabled && (
            <ClearButton 
              onClick={handleClear}
              aria-label="Clear selection"
              type="button"
            />
          )}
          
          <ArrowIcon isOpen={isOpen} />
        </div>
      </SelectControl>
      
      {isOpen && (
        <Dropdown
          options={filteredOptions}
          selectedValues={selectedValues}
          highlightedIndex={highlightedIndex}
          searchable={searchable}
          searchTerm={searchTerm}
          multiple={multiple}
          maxHeight={maxDropdownHeight}
          onOptionSelect={handleOptionSelect}
          onSearchChange={handleSearchChange}
        />
      )}
      
      {variant === 'error' && errorMessage && (
        <ErrorText>{errorMessage}</ErrorText>
      )}
    </SelectWrapper>
  );
};

export default Select;