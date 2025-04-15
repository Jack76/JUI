import { fn } from '@storybook/test';
import ToggleSwitch from './ToggleSwitch';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

interface ToggleSwitchStoryArgs {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  fluid?: boolean;
  onChange?: (checked: boolean) => void;
}

const meta: Meta<ToggleSwitchStoryArgs> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
    fluid: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn(),
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn(),
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn(),
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn(),
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn(),
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'small',
    label: 'Small toggle',
    onChange: fn(),
  },
};

export const Medium: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Medium toggle',
    onChange: fn(),
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'large',
    label: 'Large toggle',
    onChange: fn(),
  },
};

export const WithoutLabel: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Disabled toggle',
    disabled: true,
    onChange: fn(),
  },
};

export const DisabledChecked: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Disabled checked toggle',
    disabled: true,
    defaultChecked: true,
    onChange: fn(),
  },
};

export const Fluid: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Full width toggle',
    fluid: true,
    onChange: fn(),
  },
};

export const ControlledExample: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ToggleSwitch
          checked={checked}
          onChange={setChecked}
          label={`Controlled toggle (${checked ? 'ON' : 'OFF'})`}
        />
        <button onClick={() => setChecked(!checked)}>
          Toggle from outside
        </button>
      </div>
    );
  },
};

export const StateExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Color Variants</h3>
        <div style={{ display: 'flex', gap: '24px', marginTop: '12px', flexWrap: 'wrap' }}>
          <ToggleSwitch color="primary" label="Primary" defaultChecked />
          <ToggleSwitch color="secondary" label="Secondary" defaultChecked />
          <ToggleSwitch color="success" label="Success" defaultChecked />
          <ToggleSwitch color="warning" label="Warning" defaultChecked />
          <ToggleSwitch color="error" label="Error" defaultChecked />
        </div>
      </div>
      
      <div>
        <h3>Sizes</h3>
        <div style={{ display: 'flex', gap: '24px', marginTop: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <ToggleSwitch size="small" label="Small" defaultChecked />
          <ToggleSwitch size="medium" label="Medium" defaultChecked />
          <ToggleSwitch size="large" label="Large" defaultChecked />
        </div>
      </div>
      
      <div>
        <h3>States</h3>
        <div style={{ display: 'flex', gap: '24px', marginTop: '12px', flexWrap: 'wrap' }}>
          <ToggleSwitch label="Unchecked" />
          <ToggleSwitch label="Checked" defaultChecked />
          <ToggleSwitch label="Disabled unchecked" disabled />
          <ToggleSwitch label="Disabled checked" disabled defaultChecked />
        </div>
      </div>
      
      <div>
        <h3>Without Labels</h3>
        <div style={{ display: 'flex', gap: '24px', marginTop: '12px', flexWrap: 'wrap' }}>
          <ToggleSwitch size="small" />
          <ToggleSwitch size="medium" defaultChecked />
          <ToggleSwitch size="large" />
        </div>
      </div>
    </div>
  ),
};