import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface AvatarProps {
  /**
   * The source of the image for the avatar
   */
  src?: string;
  /**
   * The alt text for the image
   */
  alt?: string;
  /**
   * The size of the avatar
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * The shape of the avatar
   */
  shape?: 'circle' | 'square';
  /**
   * The content to display when no image is available
   */
  fallback?: React.ReactNode;
  /**
   * Initials to display when no image or fallback is available
   */
  initials?: string;
  /**
   * Background color for the avatar when showing initials or fallback
   */
  backgroundColor?: string;
  /**
   * Optional status indicator
   */
  status?: 'online' | 'offline' | 'away' | 'busy' | 'none';
  /**
   * Optional border for the avatar
   */
  bordered?: boolean;
  /**
   * Additional className for the avatar
   */
  className?: string;
  /**
   * Event handler called when image fails to load
   */
  onError?: React.ReactEventHandler<HTMLImageElement>;
  /**
   * Z-index for stacking in avatar groups
   */
  zIndex?: number;
  /**
   * Determines if avatar should be faded (for avatar groups)
   */
  faded?: boolean;
}

const sizeMap = {
  xs: {
    size: '1.5rem', // 24px
    fontSize: 'var(--font-size-xs)',
    statusSize: '0.375rem', // 减小状态指示器尺寸
  },
  sm: {
    size: '2rem', // 32px
    fontSize: 'var(--font-size-sm)',
    statusSize: '0.5rem', // 减小状态指示器尺寸
  },
  md: {
    size: '2.5rem', // 40px
    fontSize: 'var(--font-size-base)',
    statusSize: '0.625rem', // 减小状态指示器尺寸
  },
  lg: {
    size: '3rem', // 48px
    fontSize: 'var(--font-size-md)',
    statusSize: '0.75rem', // 减小状态指示器尺寸
  },
  xl: {
    size: '4rem', // 64px
    fontSize: 'var(--font-size-lg)',
    statusSize: '0.875rem', // 减小状态指示器尺寸
  },
};

const statusColorMap = {
  online: 'var(--color-success)',
  offline: 'var(--color-neutral-400)',
  away: 'var(--color-warning)',
  busy: 'var(--color-error)',
  none: 'transparent',
};

// Generate a deterministic color based on initials or fallback
const generateColor = (text: string): string => {
  const colors = [
    '#116dff', // primary
    '#7c3aed', // secondary
    '#10d070', // success
    '#ff9500', // warning
    '#3ebff5', // info
    '#ff7eb6', // accent-1
    '#a78bfa', // accent-2
  ];
  
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
};

// 修改 AvatarWrapper 作为最外层容器，包含 AvatarContainer 和 StatusIndicator
const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const AvatarContainer = styled.div<{
  size: string;
  shape: 'circle' | 'square';
  backgroundColor: string;
  bordered: boolean;
  zIndex?: number;
  faded?: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.shape === 'circle' ? '50%' : 'var(--radius-sm)'};
  overflow: hidden;
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-medium);
  z-index: ${props => props.zIndex || 'auto'};
  opacity: ${props => props.faded ? 0.7 : 1};
  transition: var(--transition-fast);
  
  ${props => props.bordered && css`
    border: 2px solid var(--color-background);
    box-shadow: var(--shadow-xs);
  `}
  
  &:hover {
    opacity: 1;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// 修改 StatusIndicator 使其位于 AvatarContainer 之外
const StatusIndicator = styled.div<{
  status: AvatarProps['status'];
  size: string;
}>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: ${props => statusColorMap[props.status || 'none']};
  border-radius: 50%;
  bottom: 0;
  right: 0;
  border: 1.5px solid var(--color-background);
  z-index: 2;
  
  ${props => props.status !== 'none' && css`
    box-shadow: var(--shadow-xs);
  `}
`;

const AvatarInitials = styled.div<{
  fontSize: string;
}>`
  font-size: ${props => props.fontSize};
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  color: var(--color-text-inverse);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
`;

/**
 * Avatar component for displaying user images, initials or icons
 */
const Avatar: AvatarComponent = ({
  src,
  alt = 'avatar',
  size = 'md',
  shape = 'circle',
  fallback,
  initials,
  backgroundColor,
  status = 'none',
  bordered = false,
  className,
  onError,
  zIndex,
  faded = false,
  ...props
}) => {
  const [imgError, setImgError] = useState<boolean>(false);
  const sizeDimensions = sizeMap[size];

  // Determine background color - use provided or generate from initials/alt
  const bgColor = backgroundColor || generateColor(initials || alt);
  
  // Handle image load error
  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setImgError(true);
    if (onError) onError(e);
  };
  
  // Reset error state if src changes
  useEffect(() => {
    setImgError(false);
  }, [src]);

  // Determine content to display with modified priority order:
  // 1. Initials (if available)
  // 2. Fallback (if available)
  // 3. Image (if available and not errored)
  // 4. First character of alt text as default
  const renderContent = () => {
    if (initials) {
      // Get first 2 characters from initials
      const displayInitials = initials.substring(0, 2);
      return <AvatarInitials fontSize={sizeDimensions.fontSize}>{displayInitials}</AvatarInitials>;
    } else if (fallback) {
      return fallback;
    } else if (src && !imgError) {
      return <AvatarImage src={src} alt={alt} onError={handleError} />;
    } else {
      // Default to first character of alt text
      const displayInitials = alt.charAt(0);
      return <AvatarInitials fontSize={sizeDimensions.fontSize}>{displayInitials}</AvatarInitials>;
    }
  };

  return (
    <AvatarWrapper className={className}>
      <AvatarContainer
        size={sizeDimensions.size}
        shape={shape}
        backgroundColor={bgColor}
        bordered={bordered}
        zIndex={zIndex}
        faded={faded}
        {...props}
      >
        {renderContent()}
      </AvatarContainer>
      {status !== 'none' && (
        <StatusIndicator status={status} size={sizeDimensions.statusSize} />
      )}
    </AvatarWrapper>
  );
};

/**
 * Avatar.Group component for displaying multiple avatars
 */
export interface AvatarGroupProps {
  /**
   * Avatar components to display in the group
   */
  children: React.ReactNode;
  /**
   * Maximum number of avatars to show
   */
  max?: number;
  /**
   * Position to add the overflow count
   */
  overflowPosition?: 'start' | 'end';
  /**
   * Amount of overlap between avatars, in pixels
   */
  overlapOffset?: number;
  /**
   * Base size for all avatars in the group
   */
  size?: AvatarProps['size'];
  /**
   * Group ring border color
   */
  borderColor?: string;
  /**
   * CSS class for the group container
   */
  className?: string;
}

const AvatarGroupContainer = styled.div<{
  overlapOffset: number;
}>`
  display: inline-flex;
  align-items: center;
  
  & > * {
    margin-right: -${props => props.overlapOffset}px;
  }
  
  & > *:last-child {
    margin-right: 0;
  }
`;

const OverflowCount = styled(AvatarContainer)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-inverse);
  z-index: 1;
`;

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 5,
  overflowPosition = 'end',
  overlapOffset = 8,
  size = 'md',
  borderColor = 'var(--color-background)',
  className,
}) => {
  const childrenArray = React.Children.toArray(children);
  const totalAvatars = childrenArray.length;
  
  // Calculate which avatars to show
  const visibleAvatars = max ? childrenArray.slice(0, max) : childrenArray;
  const overflowCount = Math.max(0, totalAvatars - (max || 0));
  
  // Modify avatars to add proper z-index and border color
  const processedAvatars = visibleAvatars.map((child, i) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<AvatarProps>, {
        key: i,
        zIndex: visibleAvatars.length - i,
        size: (child as React.ReactElement<AvatarProps>).props.size || size,
        bordered: true,
        faded: i !== 0,
      });
    }
    return child;
  });

  // Create overflow indicator if needed
  const overflowIndicator = overflowCount > 0 ? (
    <OverflowCount 
      size={sizeMap[size].size} 
      shape="circle" 
      backgroundColor="var(--color-neutral-500)"
      bordered={true}
      zIndex={0}
    >
      +{overflowCount}
    </OverflowCount>
  ) : null;

  return (
    <AvatarGroupContainer className={className} overlapOffset={overlapOffset}>
      {overflowPosition === 'start' && overflowIndicator}
      {processedAvatars}
      {overflowPosition === 'end' && overflowIndicator}
    </AvatarGroupContainer>
  );
};

// Fix for TypeScript error: Property 'Group' does not exist on type 'FC'
type AvatarComponent = React.FC<AvatarProps> & {
  Group: React.FC<AvatarGroupProps>;
};

Avatar.Group = AvatarGroup;

export default Avatar;