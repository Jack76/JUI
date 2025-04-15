import { forwardRef } from 'react';
import styled from '@emotion/styled';
import * as MuiIcons from '@mui/icons-material';

// 创建一个通用的样式化图标组件
const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color || 'var(--color-primary)'};
  font-size: ${props => props.size || 'var(--font-size-base)'};
  transition: var(--transition-fast);
  
  &:hover {
    transform: ${props => props.enableHoverEffect ? 'scale(1.1)' : 'none'};
    color: ${props => props.enableHoverEffect && !props.disabled ? 
      (props.color === 'var(--color-primary)' ? 'var(--color-primary-hover)' : 
       props.color === 'var(--color-secondary)' ? 'var(--color-secondary-hover)' : 
       props.color === 'var(--color-error)' ? 'var(--color-error-hover)' : 
       props.color) : props.color};
  }
  
  opacity: ${props => props.disabled ? '0.5' : '1'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

// 通用图标组件
const IconComponent = forwardRef((props, ref) => {
  const { 
    iconName = 'Google',
    color,
    size,
    enableHoverEffect = false,
    disabled = false,
    onClick,
    className,
    ...otherProps 
  } = props;

  // 动态获取请求的图标组件
  const IconComponent = MuiIcons[iconName];

  // 如果请求的图标不存在，使用默认图标或显示错误
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found. Using default icon instead.`);
    return <MuiIcons.Error ref={ref} style={{ color: 'var(--color-error)' }} />;
  }

  return (
    <StyledIcon
      ref={ref}
      color={color}
      size={size}
      enableHoverEffect={enableHoverEffect}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={className}
      {...otherProps}
    >
      <IconComponent style={{ fontSize: 'inherit', color: 'inherit' }} />
    </StyledIcon>
  );
});

IconComponent.displayName = 'IconComponent';

export default IconComponent;