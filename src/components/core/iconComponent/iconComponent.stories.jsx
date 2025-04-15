import IconComponent from './iconComponent';

export default {
  title: 'Components/Icon',
  component: IconComponent,
  argTypes: {
    iconName: {
      control: 'select',
      options: [
        'Google', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn',
        'Home', 'Settings', 'Search', 'Favorite', 'Star',
        'Person', 'Email', 'Phone', 'LocationOn', 'Notifications',
        'Add', 'Edit', 'Delete', 'Check', 'Close',
        'Menu', 'ArrowBack', 'ArrowForward', 'ExpandMore', 'ExpandLess',
        'Refresh', 'Download', 'Upload', 'Share', 'Link',
        'Warning', 'Error', 'Info', 'Help', 'MoreVert'
      ],
      description: '要显示的图标名称（MUI图标名称）',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Google' },
      }
    },
    color: {
      control: 'select',
      options: [
        // 主题色
        'var(--color-primary)',
        'var(--color-secondary)',
        'var(--color-error)',
        'var(--color-warning)',
        'var(--color-info)',
        'var(--color-success)',
        
        // 文本色
        'var(--color-text)',
        'var(--color-text-secondary)',
        'var(--color-text-tertiary)',
        
        // 中性色
        'var(--color-neutral-300)',
        'var(--color-neutral-400)',
        'var(--color-neutral-500)',
        'var(--color-neutral-600)',
        'var(--color-neutral-700)',
        'var(--color-neutral-800)',
        
        // 品牌额外色
        'var(--color-brand-light)',
        'var(--color-brand-dark)',
        'var(--color-accent-1)',
        'var(--color-accent-2)'
      ],
      description: '图标颜色，使用设计系统中定义的颜色变量',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'var(--color-primary)' },
      }
    },
    size: {
      control: 'select',
      options: [
        'var(--font-size-xs)',
        'var(--font-size-sm)',
        'var(--font-size-base)',
        'var(--font-size-md)',
        'var(--font-size-lg)',
        'var(--font-size-xl)'
      ],
      description: '图标尺寸，使用设计系统中定义的字体大小变量',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'var(--font-size-base)' },
      }
    },
    enableHoverEffect: {
      control: 'boolean',
      description: '启用悬停效果（颜色变化和缩放）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    disabled: {
      control: 'boolean',
      description: '禁用状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    onClick: {
      action: 'clicked',
      description: '点击图标时触发的回调函数',
    },
  },
};

// 默认样式
export const Default = {
  args: {
    iconName: 'Google',
    color: 'var(--color-primary)',
    size: 'var(--font-size-base)',
    enableHoverEffect: false,
    disabled: false,
  },
};

// 常用图标展示
export const CommonIcons = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(5, 1fr)', 
      gap: 'var(--spacing-md)', 
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--color-background)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {[
        { name: 'Home', label: '主页' },
        { name: 'Search', label: '搜索' },
        { name: 'Settings', label: '设置' },
        { name: 'Person', label: '用户' },
        { name: 'Notifications', label: '通知' },
        { name: 'Add', label: '添加' },
        { name: 'Edit', label: '编辑' },
        { name: 'Delete', label: '删除' },
        { name: 'Check', label: '确认' },
        { name: 'Close', label: '关闭' },
        { name: 'Email', label: '邮箱' },
        { name: 'Phone', label: '电话' },
        { name: 'LocationOn', label: '位置' },
        { name: 'Favorite', label: '收藏' },
        { name: 'Share', label: '分享' }
      ].map(icon => (
        <div key={icon.name} style={{ 
          textAlign: 'center',
          padding: 'var(--spacing-xs)',
          border: '1px solid var(--color-divider)',
          borderRadius: 'var(--radius-sm)'
        }}>
          <IconComponent 
            iconName={icon.name} 
            size="var(--font-size-md)" 
            color="var(--color-text)"
            enableHoverEffect={true} 
          />
          <p style={{ 
            margin: 'var(--spacing-xs) 0 0', 
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-secondary)'
          }}>
            {icon.label}
          </p>
        </div>
      ))}
    </div>
  ),
};

// 社交媒体图标
export const SocialIcons = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around',
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--color-background)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <IconComponent iconName="Facebook" size="var(--font-size-lg)" color="#1877F2" enableHoverEffect={true} />
      <IconComponent iconName="Twitter" size="var(--font-size-lg)" color="#1DA1F2" enableHoverEffect={true} />
      <IconComponent iconName="Instagram" size="var(--font-size-lg)" color="#E4405F" enableHoverEffect={true} />
      <IconComponent iconName="LinkedIn" size="var(--font-size-lg)" color="#0A66C2" enableHoverEffect={true} />
      <IconComponent iconName="Google" size="var(--font-size-lg)" color="#4285F4" enableHoverEffect={true} />
    </div>
  ),
};

// 主题色系展示
export const ThemeColors = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: 'var(--spacing-md)', 
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--color-background)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-lg)" color="var(--color-primary)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Primary</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-lg)" color="var(--color-secondary)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Secondary</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-lg)" color="var(--color-error)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Error</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-lg)" color="var(--color-warning)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Warning</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-lg)" color="var(--color-info)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Info</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-lg)" color="var(--color-success)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Success</p>
      </div>
    </div>
  ),
};

// 中性色系展示
export const NeutralColors = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: 'var(--spacing-md)', 
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--color-background)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Circle" size="var(--font-size-lg)" color="var(--color-neutral-300)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Neutral 300</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Circle" size="var(--font-size-lg)" color="var(--color-neutral-400)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Neutral 400</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Circle" size="var(--font-size-lg)" color="var(--color-neutral-500)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Neutral 500</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Circle" size="var(--font-size-lg)" color="var(--color-neutral-600)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Neutral 600</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Circle" size="var(--font-size-lg)" color="var(--color-neutral-700)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Neutral 700</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Circle" size="var(--font-size-lg)" color="var(--color-neutral-800)" enableHoverEffect={true} />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Neutral 800</p>
      </div>
    </div>
  ),
};

// 尺寸变体
export const SizeVariants = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--color-background)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-xs)" color="var(--color-primary)" />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>XS</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-sm)" color="var(--color-primary)" />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>SM</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-base)" color="var(--color-primary)" />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>Base</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-md)" color="var(--color-primary)" />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>MD</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-lg)" color="var(--color-primary)" />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>LG</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconComponent iconName="Star" size="var(--font-size-xl)" color="var(--color-primary)" />
        <p style={{ margin: 'var(--spacing-xs) 0', fontSize: 'var(--font-size-xs)' }}>XL</p>
      </div>
    </div>
  ),
};

// 状态展示
export const States = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: 'var(--spacing-xl)', 
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--color-background)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-sm)', 
          fontWeight: 'var(--font-weight-medium)',
          marginBottom: 'var(--spacing-md)'
        }}>
          交互状态
        </h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          padding: 'var(--spacing-md)',
          border: '1px solid var(--color-divider)',
          borderRadius: 'var(--radius-sm)'
        }}>
          <IconComponent iconName="TouchApp" size="var(--font-size-lg)" color="var(--color-primary)" enableHoverEffect={true} />
          <IconComponent iconName="TouchApp" size="var(--font-size-lg)" color="var(--color-primary-hover)" />
          <IconComponent iconName="TouchApp" size="var(--font-size-lg)" color="var(--color-primary-active)" />
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around',
          marginTop: 'var(--spacing-xs)'
        }}>
          <span style={{ fontSize: 'var(--font-size-xs)' }}>默认/悬停</span>
          <span style={{ fontSize: 'var(--font-size-xs)' }}>Hover</span>
          <span style={{ fontSize: 'var(--font-size-xs)' }}>Active</span>
        </div>
      </div>
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-sm)', 
          fontWeight: 'var(--font-weight-medium)',
          marginBottom: 'var(--spacing-md)'
        }}>
          启用/禁用状态
        </h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          padding: 'var(--spacing-md)',
          border: '1px solid var(--color-divider)',
          borderRadius: 'var(--radius-sm)'
        }}>
          <IconComponent iconName="Power" size="var(--font-size-lg)" color="var(--color-success)" enableHoverEffect={true} />
          <IconComponent iconName="Power" size="var(--font-size-lg)" color="var(--color-success)" disabled={true} />
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around',
          marginTop: 'var(--spacing-xs)'
        }}>
          <span style={{ fontSize: 'var(--font-size-xs)' }}>启用</span>
          <span style={{ fontSize: 'var(--font-size-xs)' }}>禁用</span>
        </div>
      </div>
    </div>
  ),
};

// 图标网格展示
export const IconGrid = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(6, 1fr)', 
      gap: 'var(--spacing-md)', 
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--color-background)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {[
        'Home', 'Settings', 'Search', 'Person', 'Notifications', 'Email',
        'Phone', 'LocationOn', 'Favorite', 'Star', 'Add', 'Edit', 
        'Delete', 'Check', 'Close', 'Menu', 'ArrowBack', 'ArrowForward',
        'ExpandMore', 'ExpandLess', 'Refresh', 'Download', 'Upload', 'Share',
        'Link', 'Warning', 'Error', 'Info', 'Help', 'MoreVert'
      ].map(iconName => (
        <div key={iconName} style={{ 
          textAlign: 'center',
          padding: 'var(--spacing-xs)',
          border: '1px solid var(--color-divider)',
          borderRadius: 'var(--radius-sm)'
        }}>
          <IconComponent 
            iconName={iconName} 
            size="var(--font-size-md)" 
            color="var(--color-text)"
            enableHoverEffect={true} 
          />
          <p style={{ 
            margin: 'var(--spacing-xs) 0 0', 
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-secondary)'
          }}>
            {iconName}
          </p>
        </div>
      ))}
    </div>
  ),
};