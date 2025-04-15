import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Select from './select';
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

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    fluid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    searchable: {
      control: 'boolean',
    },
    clearable: {
      control: 'boolean',
    },
    multiple: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// 模拟选项数据
const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'br', label: 'Brazil' },
  { value: 'ar', label: 'Argentina', disabled: true },
  { value: 'cl', label: 'Chile' },
  { value: 'cn', label: 'China' },
  { value: 'jp', label: 'Japan' },
  { value: 'kr', label: 'South Korea' },
  { value: 'in', label: 'India' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'it', label: 'Italy' },
  { value: 'es', label: 'Spain' },
];

const iconCountries = [
  { value: 'us', label: 'United States', icon: <MuiIconComponent iconName="Flag" /> },
  { value: 'ca', label: 'Canada', icon: <MuiIconComponent iconName="Flag" /> },
  { value: 'mx', label: 'Mexico', icon: <MuiIconComponent iconName="Flag" /> },
  { value: 'br', label: 'Brazil', icon: <MuiIconComponent iconName="Flag" /> },
  { value: 'ar', label: 'Argentina', disabled: true, icon: <MuiIconComponent iconName="Flag" /> },
];

export const Default: Story = {
  args: {
    options: countries,
    label: 'Select a country',
    placeholder: 'Choose a country',
    onChange: fn(),
  },
};

export const WithIcons: Story = {
  args: {
    options: iconCountries,
    label: 'Select a country',
    placeholder: 'Choose a country',
    startIcon: <MuiIconComponent iconName="Public" />,
    onChange: fn(),
  },
};

export const Searchable: Story = {
  args: {
    options: countries,
    label: 'Searchable Select',
    placeholder: 'Search and select...',
    searchable: true,
    onChange: fn(),
  },
};

export const Clearable: Story = {
  args: {
    options: countries,
    label: 'Clearable Select',
    placeholder: 'Select with clear button',
    clearable: true,
    defaultValue: 'us',
    onChange: fn(),
  },
};

export const MultiSelect: Story = {
  args: {
    options: countries,
    label: 'Multiple Selection',
    placeholder: 'Select multiple countries',
    multiple: true,
    defaultValue: ['us', 'ca'],
    onChange: fn(),
  },
};

export const MultiSelectWithSearch: Story = {
  args: {
    options: countries,
    label: 'Multiple Selection with Search',
    placeholder: 'Search and select multiple',
    multiple: true,
    searchable: true,
    clearable: true,
    onChange: fn(),
  },
};

export const DisabledSelect: Story = {
  args: {
    options: countries,
    label: 'Disabled Select',
    placeholder: 'Cannot be changed',
    disabled: true,
    defaultValue: 'us',
    onChange: fn(),
  },
};

export const ErrorState: Story = {
  args: {
    options: countries,
    label: 'Error State',
    placeholder: 'Invalid selection',
    variant: 'error',
    errorMessage: 'Please select a valid country',
    onChange: fn(),
  },
};

export const Loading: Story = {
  args: {
    options: countries,
    label: 'Loading State',
    placeholder: 'Loading options...',
    loading: true,
    onChange: fn(),
  },
};

export const CustomSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Select
        options={countries}
        label="Small Size"
        placeholder="Small dropdown"
        size="small"
        onChange={fn()}
      />
      <Select
        options={countries}
        label="Medium Size (Default)"
        placeholder="Medium dropdown"
        size="medium"
        onChange={fn()}
      />
      <Select
        options={countries}
        label="Large Size"
        placeholder="Large dropdown"
        size="large"
        onChange={fn()}
      />
    </div>
  ),
};

export const Fluid: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Select
        options={countries}
        label="Full Width"
        placeholder="Width 100%"
        fluid
        onChange={fn()}
      />
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <h3>Default States</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Select
          options={countries}
          placeholder="Default"
          fluid
          onChange={fn()}
        />
        <Select
          options={countries}
          placeholder="With Label"
          label="Country"
          fluid
          onChange={fn()}
        />
      </div>
      
      <h3>Feature Combinations</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Select
          options={iconCountries}
          label="Icons + Searchable"
          placeholder="Search countries"
          startIcon={<MuiIconComponent iconName="Search" />}
          searchable
          fluid
          onChange={fn()}
        />
        <Select
          options={countries}
          label="Multiple + Clearable"
          placeholder="Select multiple"
          multiple
          clearable
          fluid
          onChange={fn()}
        />
        <Select
          options={countries}
          label="All Features"
          placeholder="Complete select"
          multiple
          searchable
          clearable
          fluid
          onChange={fn()}
        />
      </div>
      
      <h3>States</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Select
          options={countries}
          label="Error State"
          placeholder="Error"
          variant="error"
          errorMessage="Please make a selection"
          fluid
          onChange={fn()}
        />
        <Select
          options={countries}
          label="Disabled State"
          placeholder="Disabled"
          disabled
          fluid
          onChange={fn()}
        />
        <Select
          options={countries}
          label="Loading State"
          placeholder="Loading..."
          loading
          fluid
          onChange={fn()}
        />
      </div>
    </div>
  ),
};