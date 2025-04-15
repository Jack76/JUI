import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';
import IconComponent from '../iconComponent/iconComponent';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy', 'none'],
    },
    bordered: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User Avatar',
    size: 'md',
  },
};

export const Initials: Story = {
  args: {
    initials: 'JD',
    size: 'md',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'invalid-url',
    fallback: <IconComponent iconName="Person" color="white" />,
    size: 'md',
  },
};

export const WithStatus: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    status: 'online',
    size: 'md',
  },
};

export const WithBorder: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    bordered: true,
    size: 'md',
  },
};

export const Square: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    shape: 'square',
    size: 'md',
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar size="xs" src="https://i.pravatar.cc/300?img=1" />
      <Avatar size="sm" src="https://i.pravatar.cc/300?img=2" />
      <Avatar size="md" src="https://i.pravatar.cc/300?img=3" />
      <Avatar size="lg" src="https://i.pravatar.cc/300?img=4" />
      <Avatar size="xl" src="https://i.pravatar.cc/300?img=5" />
    </div>
  ),
};

export const InitialVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar initials="AB" size="xs" />
      <Avatar initials="CD" size="sm" />
      <Avatar initials="EF" size="md" />
      <Avatar initials="GH" size="lg" />
      <Avatar initials="IJ" size="xl" />
    </div>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar src="https://i.pravatar.cc/300?img=11" status="online" />
      <Avatar src="https://i.pravatar.cc/300?img=12" status="offline" />
      <Avatar src="https://i.pravatar.cc/300?img=13" status="away" />
      <Avatar src="https://i.pravatar.cc/300?img=14" status="busy" />
      <Avatar src="https://i.pravatar.cc/300?img=15" status="none" />
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Default Group (max 5)</h3>
        <Avatar.Group>
          <Avatar src="https://i.pravatar.cc/300?img=21" />
          <Avatar src="https://i.pravatar.cc/300?img=22" />
          <Avatar src="https://i.pravatar.cc/300?img=23" />
          <Avatar src="https://i.pravatar.cc/300?img=24" />
          <Avatar src="https://i.pravatar.cc/300?img=25" />
          <Avatar src="https://i.pravatar.cc/300?img=26" />
          <Avatar src="https://i.pravatar.cc/300?img=27" />
          <Avatar src="https://i.pravatar.cc/300?img=28" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with max 3</h3>
        <Avatar.Group max={3}>
          <Avatar src="https://i.pravatar.cc/300?img=31" />
          <Avatar src="https://i.pravatar.cc/300?img=32" />
          <Avatar src="https://i.pravatar.cc/300?img=33" />
          <Avatar src="https://i.pravatar.cc/300?img=34" />
          <Avatar src="https://i.pravatar.cc/300?img=35" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with initials</h3>
        <Avatar.Group>
          <Avatar src="https://i.pravatar.cc/300?img=41" />
          <Avatar initials="JD" />
          <Avatar src="https://i.pravatar.cc/300?img=43" />
          <Avatar initials="AB" />
          <Avatar initials="CD" />
          <Avatar src="https://i.pravatar.cc/300?img=46" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with different sizes (inherits from group)</h3>
        <Avatar.Group size="lg">
          <Avatar src="https://i.pravatar.cc/300?img=51" />
          <Avatar src="https://i.pravatar.cc/300?img=52" />
          <Avatar src="https://i.pravatar.cc/300?img=53" />
          <Avatar src="https://i.pravatar.cc/300?img=54" size="xl" />
          <Avatar src="https://i.pravatar.cc/300?img=55" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with overflow at start</h3>
        <Avatar.Group max={3} overflowPosition="start">
          <Avatar src="https://i.pravatar.cc/300?img=61" />
          <Avatar src="https://i.pravatar.cc/300?img=62" />
          <Avatar src="https://i.pravatar.cc/300?img=63" />
          <Avatar src="https://i.pravatar.cc/300?img=64" />
          <Avatar src="https://i.pravatar.cc/300?img=65" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with status indicators</h3>
        <Avatar.Group>
          <Avatar src="https://i.pravatar.cc/300?img=71" status="online" />
          <Avatar src="https://i.pravatar.cc/300?img=72" status="away" />
          <Avatar src="https://i.pravatar.cc/300?img=73" status="busy" />
          <Avatar src="https://i.pravatar.cc/300?img=74" status="offline" />
          <Avatar src="https://i.pravatar.cc/300?img=75" />
        </Avatar.Group>
      </div>
    </div>
  ),
};

export const CustomizedAvatars: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Custom Background Colors</h3>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Avatar initials="P" backgroundColor="var(--color-error)" />
          <Avatar initials="Q" backgroundColor="var(--color-success)" />
          <Avatar initials="R" backgroundColor="var(--color-warning)" />
          <Avatar initials="S" backgroundColor="var(--color-info)" />
          <Avatar initials="T" backgroundColor="#8B5CF6" />
        </div>
      </div>
      
      <div>
        <h3>Icons as Fallback</h3>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Avatar fallback={<IconComponent iconName="Person" color="white" />} />
          <Avatar fallback={<IconComponent iconName="Star" color="white" />} backgroundColor="var(--color-secondary)" />
          <Avatar fallback={<IconComponent iconName="Lock" color="white" />} backgroundColor="var(--color-warning)" />
          <Avatar fallback={<IconComponent iconName="Home" color="white" />} backgroundColor="var(--color-error)" />
        </div>
      </div>
    </div>
  ),
};