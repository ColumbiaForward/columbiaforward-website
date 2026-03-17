import type { Meta, StoryObj } from '@storybook/react';
import { IconCheck, IconRocket, IconBulb, IconClock } from '@tabler/icons-react';

import Component from '~/components/widgets/Content';
import { ContentProps } from '~/shared/types';
import cameraFrontImg from '~/assets/images/camera-front.jpg';

// Mock data for Content stories
const mockData: ContentProps = {
  header: {
    title: 'Discover Amazing Features',
    subtitle: 'Explore our innovative solutions designed to enhance your experience and boost productivity.',
    tagline: 'Features',
  },
  content: 'Our platform offers cutting-edge technology and user-friendly interfaces that help you achieve your goals more efficiently than ever before.',
  items: [
    {
      title: 'Modern Design',
      description: 'Clean and intuitive interface that makes complex tasks simple.',
      icon: IconBulb,
    },
    {
      title: 'Fast Performance',
      description: 'Optimized for speed with lightning-fast load times.',
      icon: IconRocket,
    },
    {
      title: 'Reliable Support',
      description: '24/7 customer support to help you whenever you need assistance.',
      icon: IconClock,
    },
    {
      title: 'Secure Platform',
      description: 'Enterprise-grade security to keep your data safe and protected.',
      icon: IconCheck,
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Content showcase image',
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Content',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    ...mockData,
    hasBackground: false,
  },
};

export const WithBackground: Story = {
  args: {
    ...mockData,
    hasBackground: true,
  },
};

export const Reverse: Story = {
  args: {
    ...mockData,
    isReversed: true,
  },
};

export const Mobile: Story = {
  args: {
    ...mockData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'SMALL',
    },
  },
};
