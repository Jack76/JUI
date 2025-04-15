import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from '.';
import Button from '../../core/button';

interface CardStoryArgs {
  variant?: 'elevated' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  isInteractive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const meta: Meta<CardStoryArgs> = {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardHeader, CardBody, CardFooter },
  parameters: {
    componentSubtitle: 'A container for content that groups related information and actions',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'The visual style of the card',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the card, affecting border radius',
    },
    isInteractive: {
      control: 'boolean',
      description: 'Whether the card has interactive hover effects',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the card is disabled',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'elevated',
    size: 'medium',
    style: { maxWidth: '400px' },
    children: (
      <>
        <CardHeader title="Card Title" subtitle="Card Subtitle" />
        <CardBody>
          <p>This is a basic card with a header, body, and footer. Cards can be used to group related content and actions.</p>
        </CardBody>
        <CardFooter>
          <Button variant="ghost">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    style: { maxWidth: '400px' },
    children: (
      <>
        <CardHeader title="Outlined Card" subtitle="With a subtle border" />
        <CardBody>
          <p>This card uses the outlined variant which has a border instead of a shadow.</p>
        </CardBody>
        <CardFooter>
          <Button variant="outline">Learn More</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    style: { maxWidth: '400px' },
    children: (
      <>
        <CardHeader title="Filled Card" subtitle="With a background color" />
        <CardBody>
          <p>This card uses the filled variant which has a subtle background color.</p>
        </CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Interactive: Story = {
  args: {
    variant: 'elevated',
    isInteractive: true,
    style: { maxWidth: '400px', cursor: 'pointer' },
    onClick: () => alert('Card clicked!'),
    children: (
      <>
        <CardHeader title="Interactive Card" subtitle="Click me!" />
        <CardBody>
          <p>This card is interactive. Try clicking on it!</p>
        </CardBody>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    variant: 'elevated',
    size: 'small',
    style: { maxWidth: '300px' },
    children: (
      <>
        <CardHeader title="Small Card" />
        <CardBody>
          <p>This is a small card with a more compact border radius.</p>
        </CardBody>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    variant: 'elevated',
    size: 'large',
    style: { maxWidth: '500px' },
    children: (
      <>
        <CardHeader title="Large Card" subtitle="With a larger border radius" />
        <CardBody>
          <p>This is a large card with a more prominent border radius.</p>
        </CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const CustomHeader: Story = {
  args: {
    variant: 'elevated',
    style: { maxWidth: '400px' },
    children: (
      <>
        <CardHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              AB
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Custom Header</h3>
              <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>With avatar</p>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <p>This card demonstrates a custom header layout with an avatar.</p>
        </CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'elevated',
    isDisabled: true,
    style: { maxWidth: '400px' },
    children: (
      <>
        <CardHeader title="Disabled Card" subtitle="Cannot be interacted with" />
        <CardBody>
          <p>This card is disabled and cannot be interacted with.</p>
        </CardBody>
        <CardFooter>
          <Button disabled>Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      <Card variant="elevated" style={{ width: '300px' }}>
        <CardHeader title="Elevated Card" />
        <CardBody>Standard card with shadow</CardBody>
      </Card>
      
      <Card variant="outlined" style={{ width: '300px' }}>
        <CardHeader title="Outlined Card" />
        <CardBody>Card with border</CardBody>
      </Card>
      
      <Card variant="filled" style={{ width: '300px' }}>
        <CardHeader title="Filled Card" />
        <CardBody>Card with background</CardBody>
      </Card>
      
      <Card variant="elevated" isInteractive style={{ width: '300px' }}>
        <CardHeader title="Interactive Card" />
        <CardBody>Card with hover effect</CardBody>
      </Card>
      
      <Card variant="elevated" isDisabled style={{ width: '300px' }}>
        <CardHeader title="Disabled Card" />
        <CardBody>Card in disabled state</CardBody>
      </Card>
      
      <Card variant="elevated" size="small" style={{ width: '300px' }}>
        <CardHeader title="Small Card" />
        <CardBody>Card with small radius</CardBody>
      </Card>
    </div>
  ),
};

export const WithIconButton: Story = {
  args: {
    variant: 'elevated',
    size: 'medium',
    style: { maxWidth: '400px' },
    children: (
      <>
        <CardHeader
          title="Card with Icon Button"
          subtitle="Icon button in top-right corner"
          iconButton={{
            iconName: 'Close',
            onClick: () => alert('Icon button clicked!'),
          }}
        />
        <CardBody>
          <p>This card has an icon button in the top-right corner for additional actions.</p>
        </CardBody>
        <CardFooter>
          <Button variant="ghost">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </>
    ),
  },
};