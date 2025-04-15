import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './checkbox';
import Checkboxgroup from './checkboxgroup';
import { fn } from '@storybook/test';
import IconComponent from '../../core/iconComponent/iconComponent';

// @ts-ignore
const MuiIconComponent = IconComponent as React.ComponentType<{
  iconName: string;
  color?: string;
  size?: string;
  [key: string]: any;
}>;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    onChange: fn(),
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email notifications',
    description: 'Receive email notifications when there are updates to your account.',
    onChange: fn(),
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    checked: true,
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
    onChange: fn(),
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked option',
    checked: true,
    disabled: true,
    onChange: fn(),
  },
};

export const Error: Story = {
  args: {
    label: 'Required field',
    variant: 'error',
    errorMessage: 'This field is required',
    onChange: fn(),
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all items',
    indeterminate: true,
    onChange: fn(),
  },
};

export const WithReactNodeLabel: Story = {
  args: {
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <MuiIconComponent iconName="Verified" color="var(--color-success)" />
        Verified option
      </span>
    ),
    onChange: fn(),
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        size="small"
        label="Small checkbox"
        description="Compact size for dense UIs"
        onChange={fn()}
      />
      <Checkbox
        size="medium"
        label="Medium checkbox"
        description="Default size for most use cases"
        onChange={fn()}
      />
      <Checkbox
        size="large"
        label="Large checkbox"
        description="Larger size for better visibility or touch targets"
        onChange={fn()}
      />
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(['gaming']);

    const handleChange = (value: string) => (checked: boolean) => {
      if (checked) {
        setSelected([...selected, value]);
      } else {
        setSelected(selected.filter((id) => id !== value));
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3>Vertical with Label</h3>
          <Checkboxgroup label="Select Hobbies" direction="vertical">
            <Checkbox
              value="reading"
              label="Reading"
              checked={selected.includes('reading')}
              onChange={handleChange('reading')}
            />
            <Checkbox
              value="gaming"
              label="Gaming"
              checked={selected.includes('gaming')}
              onChange={handleChange('gaming')}
            />
            <Checkbox
              value="traveling"
              label="Traveling"
              checked={selected.includes('traveling')}
              onChange={handleChange('traveling')}
            />
          </Checkboxgroup>
        </div>

        <div>
          <h3>Horizontal with Label</h3>
          <Checkboxgroup label="Select Preferences" direction="horizontal">
            <Checkbox
              value="email"
              label="Email"
              checked={selected.includes('email')}
              onChange={handleChange('email')}
            />
            <Checkbox
              value="sms"
              label={
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MuiIconComponent iconName="Message" color="var(--color-primary)" />
                  SMS
                </span>
              }
              checked={selected.includes('sms')}
              onChange={handleChange('sms')}
            />
            <Checkbox
              value="push"
              label="Push"
              checked={selected.includes('push')}
              onChange={handleChange('push')}
            />
          </Checkboxgroup>
        </div>

        <div>
          <h3>With Disabled Option</h3>
          <Checkboxgroup label="Select Options">
            <Checkbox
              value="option1"
              label="Option 1"
              checked={selected.includes('option1')}
              onChange={handleChange('option1')}
            />
            <Checkbox
              value="option2"
              label="Option 2"
              checked={selected.includes('option2')}
              onChange={handleChange('option2')}
            />
            <Checkbox
              value="option3"
              label="Option 3"
              disabled
              checked={selected.includes('option3')}
              onChange={handleChange('option3')}
            />
          </Checkboxgroup>
        </div>

        <div>
          <h3>With Indeterminate</h3>
          <Checkboxgroup label="Select Items">
            <Checkbox
              value="all"
              label="Select All"
              indeterminate={
                selected.length > 0 &&
                selected.length < ['item1', 'item2', 'item3'].length
              }
              checked={selected.length === ['item1', 'item2', 'item3'].length}
              onChange={(checked) => {
                if (checked) {
                  setSelected(['item1', 'item2', 'item3']);
                } else {
                  setSelected([]);
                }
              }}
            />
            <Checkbox
              value="item1"
              label="Item 1"
              checked={selected.includes('item1')}
              onChange={handleChange('item1')}
            />
            <Checkbox
              value="item2"
              label="Item 2"
              checked={selected.includes('item2')}
              onChange={handleChange('item2')}
            />
            <Checkbox
              value="item3"
              label="Item 3"
              checked={selected.includes('item3')}
              onChange={handleChange('item3')}
            />
          </Checkboxgroup>
        </div>

        <div style={{ marginTop: '8px' }}>
          Selected: {selected.join(', ')}
        </div>
      </div>
    );
  },
};

export const CompleteExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Basic States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox label="Unchecked" onChange={fn()} />
          <Checkbox label="Checked" checked onChange={fn()} />
          <Checkbox label="Indeterminate" indeterminate onChange={fn()} />
          <Checkbox label="Disabled" disabled onChange={fn()} />
          <Checkbox label="Disabled Checked" checked disabled onChange={fn()} />
          <Checkbox label="Disabled Indeterminate" indeterminate disabled onChange={fn()} />
        </div>
      </div>
      
      <div>
        <h3>With Description</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox 
            label="Enable notifications" 
            description="You'll receive notifications about important updates." 
            onChange={fn()}
          />
          <Checkbox 
            label="Share usage data"
            description="Help us improve by sharing anonymous usage statistics." 
            checked
            onChange={fn()}
          />
        </div>
      </div>
      
      <div>
        <h3>Error States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox 
            label="Accept terms and conditions"
            variant="error" 
            errorMessage="You must accept the terms to continue"
            onChange={fn()}
          />
          <Checkbox 
            label="Required field"
            variant="error" 
            errorMessage="This field is required"
            checked
            onChange={fn()}
          />
        </div>
      </div>
      
      <div>
        <h3>Custom Styling</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)' }}>
          <Checkbox 
            label={
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-primary)' }}>
                <MuiIconComponent iconName="Star" color="var(--color-warning)" />
                Premium feature
              </span>
            }
            description="Unlock advanced features with our premium plan"
            onChange={fn()}
          />
        </div>
      </div>
    </div>
  ),
};