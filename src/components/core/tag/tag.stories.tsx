import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tag from './tag';
import IconComponent from '../../core/iconComponent/iconComponent';
import { fn } from '@storybook/test';

// 临时类型包装以绕过 TS 检查
// @ts-ignore
const MuiIconComponent = IconComponent as React.ComponentType<{
  iconName: string;
  color?: string;
  size?: string;
  [key: string]: any;
}>;

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    removable: {
      control: 'boolean',
    },
    clickable: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    isSelected: {
      control: 'boolean',
    },
    fluid: {
      control: 'boolean',
    },
    maxWidth: {
      control: 'text',
    },
    icon: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Tag',
    onClick: fn(),
    onRemove: fn(),
  },
};

export const Success: Story = {
  args: {
    label: 'Completed',
    variant: 'success',
    onClick: fn(),
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending',
    variant: 'warning',
    onClick: fn(),
  },
};

export const Error: Story = {
  args: {
    label: 'Failed',
    variant: 'error',
    onClick: fn(),
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Category',
    icon: <MuiIconComponent iconName="Label" />,
    onClick: fn(),
  },
};

export const Removable: Story = {
  args: {
    label: 'Filter',
    removable: true,
    onRemove: fn(),
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable',
    clickable: true,
    onClick: fn(),
  },
};

export const Selected: Story = {
  args: {
    label: 'Selected',
    isSelected: true,
    clickable: true,
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    removable: true,
    onClick: fn(),
    onRemove: fn(),
  },
};

export const LongLabelWithTooltip: Story = {
  args: {
    label: 'This is a very long tag label that should truncate and show tooltip',
    maxWidth: '150px',
    onClick: fn(),
  },
};

export const Fluid: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Tag label="Full Width Tag" fluid onClick={fn()} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Tag label="Small" size="small" onClick={fn()} />
      <Tag label="Medium" size="medium" onClick={fn()} />
      <Tag label="Large" size="large" onClick={fn()} />
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <h3>Variants</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Tag label="Default" onClick={fn()} />
        <Tag label="Success" variant="success" onClick={fn()} />
        <Tag label="Warning" variant="warning" onClick={fn()} />
        <Tag label="Error" variant="error" onClick={fn()} />
      </div>

      <h3>States</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Tag label="Clickable" clickable onClick={fn()} />
        <Tag label="Selected" isSelected clickable onClick={fn()} />
        <Tag label="Disabled" disabled removable onClick={fn()} onRemove={fn()} />
        <Tag label="Removable" removable onRemove={fn()} />
      </div>

      <h3>Features</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Tag
          label="With Icon"
          icon={<MuiIconComponent iconName="Label" />}
          onClick={fn()}
        />
        <Tag
          label="Long Label Truncated"
          maxWidth="100px"
          removable
          onRemove={fn()}
        />
        <Tag
          label="All Features"
          icon={<MuiIconComponent iconName="Check" />}
          removable
          clickable
          isSelected
          onClick={fn()}
          onRemove={fn()}
        />
      </div>
    </div>
  ),
};