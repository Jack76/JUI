import React from 'react'; // 明确导入React
import { Meta, StoryObj } from '@storybook/react';
import Input from './input';
import IconComponent from '../../core/iconComponent/iconComponent';
import { fn } from '@storybook/test';

// 在这里新增引导类型，覆盖 TypeScript 检查
// @ts-ignore
const MuiIconComponent = IconComponent as React.ComponentType<{
  iconName: string;
  color?: string;
  size?: string;
  [key: string]: any;
}>;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    inputSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    fluid: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    showPasswordToggle: {
      control: 'boolean',
    },
    startIcon: {
      control: { type: 'boolean' },
    },
    endIcon: {
      control: { type: 'boolean' },
    },
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    inputSize: 'medium',
    onChange: fn(),
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search something',
    // 使用临时包装的 MuiIconComponent
    startIcon: <MuiIconComponent iconName="Search" />,
    endIcon: <MuiIconComponent iconName="Person" />,
    onChange: fn(),
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    label: 'Price',
    placeholder: 'Enter price',
    prefix: '$',
    suffix: '元',
    onChange: fn(),
  },
};

export const WithAllDecorators: Story = {
  args: {
    label: 'Decorated Input',
    placeholder: 'Enter something',
    startIcon: <MuiIconComponent iconName="Search" />,
    endIcon: <MuiIconComponent iconName="Person" />,
    prefix: '$',
    suffix: '元',
    onChange: fn(),
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    variant: 'error',
    placeholder: 'Invalid email',
    errorMessage: 'Please enter a valid email address',
    startIcon: <MuiIconComponent iconName="Email" />,
    onChange: fn(),
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Field',
    placeholder: 'Loading...',
    loading: true,
    onChange: fn(),
  },
};

export const PasswordField: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    showPasswordToggle: true,
    onChange: fn(),
  },
};

export const Fluid: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Input
        label="Full Width"
        placeholder="Stretch input"
        fluid
        onChange={fn()}
      />
    </div>
  ),
};

export const StateExamples: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Default States</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Input placeholder="Default" {...args} />
          <Input placeholder="With Label" label="Label" {...args} />
          <Input placeholder="Disabled" disabled {...args} />
        </div>
      </div>
      <div>
        <h3>Icon Variations</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Input 
            placeholder="Start Icon" 
            startIcon={<MuiIconComponent iconName="Search" />} 
            {...args} 
          />
          <Input 
            placeholder="End Icon" 
            endIcon={<MuiIconComponent iconName="Person" />} 
            {...args} 
          />
          <Input 
            placeholder="Both Icons" 
            startIcon={<MuiIconComponent iconName="Email" />} 
            endIcon={<MuiIconComponent iconName="Lock" />} 
            {...args} 
          />
        </div>
      </div>
      <div>
        <h3>Error States</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Input 
            placeholder="Error" 
            variant="error" 
            errorMessage="This field is required" 
            {...args} 
          />
          <Input 
            placeholder="Error with Icon" 
            variant="error" 
            startIcon={<MuiIconComponent iconName="Warning" />} 
            errorMessage="Invalid input" 
            {...args} 
          />
        </div>
      </div>
      <div>
        <h3>Disabled States</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Input 
            placeholder="Disabled Input" 
            disabled 
            {...args} 
          />
          <Input 
            placeholder="Disabled with Icon" 
            disabled 
            startIcon={<MuiIconComponent iconName="Block" />} 
            {...args} 
          />
        </div>
      </div>
    </div>
  ),
};