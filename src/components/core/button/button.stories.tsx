import { fn } from '@storybook/test';
import Button from './button';
import GoogleIcon from '../iconComponent/iconComponent';
import { Meta, StoryObj } from '@storybook/react';

interface ButtonStoryArgs {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large' | 'icon' | 'iconSmall' | 'iconLarge';
  disabled?: boolean;
  loading?: boolean;
  fluid?: boolean;
  startIcon?: boolean;
  endIcon?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const meta: Meta<ButtonStoryArgs> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'icon', 'iconSmall', 'iconLarge'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fluid: {
      control: 'boolean',
    },
    startIcon: {
      control: { type: 'boolean' },
    },
    endIcon: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
    disabled: false,
    loading: false,
    fluid: false,
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
    disabled: false,
    loading: false,
    fluid: false,
    onClick: fn(),
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'medium',
    children: 'Outline Button',
    disabled: false,
    loading: false,
    fluid: false,
    onClick: fn(),
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
    fluid: false,
    onClick: fn(),
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
    fluid: false,
    onClick: fn(),
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
    fluid: false,
    onClick: fn(),
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
    fluid: false,
    onClick: fn(),
  },
};

export const Icon: Story = {
  args: {
    variant: 'primary',
    size: 'icon',
    children: <GoogleIcon />,
    fluid: false,
  },
};

export const IconSmall: Story = {
  args: {
    variant: 'primary',
    size: 'iconSmall',
    children: <GoogleIcon />,
    fluid: false,
  },
};

export const IconLarge: Story = {
  args: {
    variant: 'primary',
    size: 'iconLarge',
    children: <GoogleIcon />,
    fluid: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
    fluid: false,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading Button',
    fluid: false,
  },
};

export const WithStartIcon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    startIcon: true,
    children: 'Button with Start Icon',
    fluid: false,
    onClick: fn(),
  },
};

export const WithEndIcon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    endIcon: true,
    children: 'Button with End Icon',
    fluid: false,
    onClick: fn(),
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    startIcon: true,
    endIcon: true,
    children: 'Button with Both Icons',
    fluid: false,
    onClick: fn(),
  },
};

export const WithChildrenIcons: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: (
      <>
        <GoogleIcon />
        Button with Children Icons
        <GoogleIcon />
      </>
    ),
    fluid: false,
    onClick: fn(),
  },
};

export const FluidWidth: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Fluid Width Button',
    fluid: true,
    onClick: fn(),
  },
};

export const FluidWithBothIcons: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    startIcon: true,
    endIcon: true,
    children: 'Fluid Button with Both Icons',
    fluid: true,
    onClick: fn(),
  },
};

export const StateExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Hover States (hover over buttons)</h3>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={fn()}>
            Primary
          </Button>
          <Button variant="secondary" onClick={fn()}>
            Secondary
          </Button>
          <Button variant="outline" onClick={fn()}>
            Outline
          </Button>
          <Button variant="ghost" onClick={fn()}>
            Ghost
          </Button>
          <Button variant="danger" onClick={fn()}>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <h3>Focus States (click and tab through)</h3>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={fn()}>
            Primary
          </Button>
          <Button variant="secondary" onClick={fn()}>
            Secondary
          </Button>
          <Button variant="outline" onClick={fn()}>
            Outline
          </Button>
          <Button variant="ghost" onClick={fn()}>
            Ghost
          </Button>
          <Button variant="danger" onClick={fn()}>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <h3>Active States (press and hold)</h3>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={fn()}>
            Primary
          </Button>
          <Button variant="secondary" onClick={fn()}>
            Secondary
          </Button>
          <Button variant="outline" onClick={fn()}>
            Outline
          </Button>
          <Button variant="ghost" onClick={fn()}>
            Ghost
          </Button>
          <Button variant="danger" onClick={fn()}>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <h3>Disabled States</h3>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
          <Button variant="danger" disabled>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <h3>Icon Positioning</h3>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
          <Button startIcon={<GoogleIcon />} onClick={fn()}>
            Start Icon
          </Button>
          <Button endIcon={<GoogleIcon />} onClick={fn()}>
            End Icon
          </Button>
          <Button startIcon={<GoogleIcon />} endIcon={<GoogleIcon />} onClick={fn()}>
            Both Icons
          </Button>
        </div>
      </div>
    </div>
  ),
};