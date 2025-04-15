import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Radio from './radio';
import Radiogroup from './radiogroup';
import { fn } from '@storybook/test';
import IconComponent from '../../core/iconComponent/iconComponent';

// @ts-ignore
const MuiIconComponent = IconComponent as React.ComponentType<{
  iconName: string;
  color?: string;
  size?: string;
  [key: string]: any;
}>;

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option 1',
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
      <Radio
        size="small"
        label="Small radio"
        description="Compact size for dense UIs"
        onChange={fn()}
      />
      <Radio
        size="medium"
        label="Medium radio"
        description="Default size for most use cases"
        onChange={fn()}
      />
      <Radio
        size="large"
        label="Large radio"
        description="Larger size for better visibility or touch targets"
        onChange={fn()}
      />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string>('option2');

    const handleChange = (value: string) => (checked: boolean) => {
      if (checked) {
        setSelected(value);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3>Vertical with Label</h3>
          <Radiogroup label="Select Gender" name="gender" direction="vertical">
            <Radio
              value="male"
              label="Male"
              checked={selected === 'male'}
              onChange={handleChange('male')}
            />
            <Radio
              value="female"
              label="Female"
              checked={selected === 'female'}
              onChange={handleChange('female')}
            />
            <Radio
              value="other"
              label="Other"
              checked={selected === 'other'}
              onChange={handleChange('other')}
            />
          </Radiogroup>
        </div>

        <div>
          <h3>Horizontal with Label</h3>
          <Radiogroup label="Select Plan" name="plan" direction="horizontal">
            <Radio
              value="basic"
              label="Basic"
              checked={selected === 'basic'}
              onChange={handleChange('basic')}
            />
            <Radio
              value="premium"
              label={
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MuiIconComponent iconName="Star" color="var(--color-warning)" />
                  Premium
                </span>
              }
              checked={selected === 'premium'}
              onChange={handleChange('premium')}
            />
            <Radio
              value="pro"
              label="Pro"
              checked={selected === 'pro'}
              onChange={handleChange('pro')}
            />
          </Radiogroup>
        </div>

        <div>
          <h3>With Disabled Option</h3>
          <Radiogroup label="Select Option" name="option">
            <Radio
              value="option1"
              label="Option 1"
              checked={selected === 'option1'}
              onChange={handleChange('option1')}
            />
            <Radio
              value="option2"
              label="Option 2"
              checked={selected === 'option2'}
              onChange={handleChange('option2')}
            />
            <Radio
              value="option3"
              label="Option 3"
              disabled
              checked={selected === 'option3'}
              onChange={handleChange('option3')}
            />
          </Radiogroup>
        </div>

        <div>
          <h3>With Error</h3>
          <Radiogroup label="Select Required Option" name="required">
            <Radio
              value="yes"
              label="Yes"
              variant="error"
              errorMessage="This field is required"
              checked={selected === 'yes'}
              onChange={handleChange('yes')}
            />
            <Radio
              value="no"
              label="No"
              variant="error"
              errorMessage="This field is required"
              checked={selected === 'no'}
              onChange={handleChange('no')}
            />
          </Radiogroup>
        </div>

        <div style={{ marginTop: '8px' }}>
          Selected: {selected}
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
          <Radio label="Unchecked" onChange={fn()} />
          <Radio label="Checked" checked onChange={fn()} />
          <Radio label="Disabled" disabled onChange={fn()} />
          <Radio label="Disabled Checked" checked disabled onChange={fn()} />
        </div>
      </div>
      
      <div>
        <h3>With Description</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Radio 
            label="Enable notifications" 
            description="You'll receive notifications about important updates." 
            onChange={fn()}
          />
          <Radio 
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
          <Radio 
            label="Accept terms and conditions"
            variant="error" 
            errorMessage="You must accept the terms to continue"
            onChange={fn()}
          />
          <Radio 
            label="Required field"
            variant="error" 
            errorMessage="This field is required"
            onChange={fn()}
          />
        </div>
      </div>
      
      <div>
        <h3>Custom Styling</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)' }}>
          <Radio 
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