import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tooltip from './tooltip';
import { fn } from '@storybook/test';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    theme: {
      control: 'select',
      options: ['dark', 'light'],
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    hasArrow: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'wide'],
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
    },
    animationDuration: {
      control: 'select',
      options: ['fast', 'normal'],
    },
    disabled: {
      control: 'boolean',
    },
    content: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '100px',
          minHeight: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    theme: 'dark',
    placement: 'top',
    hasArrow: true,
    size: 'default',
    trigger: 'hover',
    animationDuration: 'normal',
  },
};

export const LightTheme: Story = {
  args: {
    content: 'Light theme tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    theme: 'light',
  },
};

export const NoArrow: Story = {
  args: {
    content: 'Tooltip without arrow',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    hasArrow: false,
  },
};

export const BottomPlacement: Story = {
  args: {
    content: 'Bottom tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    placement: 'bottom',
  },
};

export const LeftPlacement: Story = {
  args: {
    content: 'Left tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    placement: 'left',
  },
};

export const RightPlacement: Story = {
  args: {
    content: 'Right tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    placement: 'right',
  },
};

export const SmallSize: Story = {
  args: {
    content: 'Small tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    size: 'small',
  },
};

export const WideSize: Story = {
  args: {
    content: 'A very wide tooltip with long content.',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    size: 'wide',
  },
};

export const ClickTrigger: Story = {
  args: {
    content: 'Click to toggle tooltip',
    children: <button style={{ padding: '8px 16px' }}>Click me</button>,
    trigger: 'click',
  },
};

export const FastAnimation: Story = {
  args: {
    content: 'Fast animation tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    animationDuration: 'fast',
  },
};

export const Disabled: Story = {
  args: {
    content: 'Disabled tooltip',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    disabled: true,
  },
};

export const LongContent: Story = {
  args: {
    content:
      'This is a very long tooltip content that demonstrates how the tooltip handles extended text.',
    children: <button style={{ padding: '8px 16px' }}>Hover me</button>,
    size: 'wide',
  },
};

export const EdgeCaseTopLeft: Story = {
  render: () => (
    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
      <Tooltip content="Tooltip near top-left edge" placement="bottom">
        <button style={{ padding: '8px 16px' }}>Hover me</button>
      </Tooltip>
    </div>
  ),
};

export const EdgeCaseBottomRight: Story = {
  render: () => (
    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <Tooltip content="Tooltip near bottom-right edge" placement="top">
        <button style={{ padding: '8px 16px' }}>Hover me</button>
      </Tooltip>
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px',
        padding: '100px',
        minHeight: '500px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tooltip content="Dark Top" theme="dark" placement="top">
        <button style={{ padding: '8px 16px' }}>Dark Top</button>
      </Tooltip>
      <Tooltip content="Light Bottom" theme="light" placement="bottom">
        <button style={{ padding: '8px 16px' }}>Light Bottom</button>
      </Tooltip>
      <Tooltip content="No Arrow Left" hasArrow={false} placement="left">
        <button style={{ padding: '8px 16px' }}>No Arrow Left</button>
      </Tooltip>
      <Tooltip content="Small Right" size="small" placement="right">
        <button style={{ padding: '8px 16px' }}>Small Right</button>
      </Tooltip>
      <Tooltip content="Click Trigger" trigger="click">
        <button style={{ padding: '8px 16px' }}>Click Trigger</button>
      </Tooltip>
      <Tooltip content="Fast Animation" animationDuration="fast">
        <button style={{ padding: '8px 16px' }}>Fast Animation</button>
      </Tooltip>
    </div>
  ),
};