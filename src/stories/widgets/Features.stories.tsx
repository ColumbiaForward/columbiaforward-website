import type { Meta, StoryObj } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Story, Stories } from '@storybook/blocks';
import { IconRocket, IconShield, IconClock, IconBulb, IconSettings, IconUsers } from '@tabler/icons-react';

import Component from '~/components/widgets/Features';
import { FeaturesProps } from '~/shared/types';

// Mock data for Features stories
const mockData: FeaturesProps = {
  header: {
    title: 'Powerful Features',
    subtitle: 'Discover everything our platform has to offer with these amazing features designed to boost your productivity.',
    tagline: 'Features',
  },
  items: [
    {
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your applications run smoothly and efficiently.',
      icon: IconRocket,
    },
    {
      title: 'Secure by Design',
      description: 'Built-in security features protect your data and ensure privacy.',
      icon: IconShield,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you when you need it most.',
      icon: IconClock,
    },
    {
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology that stays ahead of industry trends.',
      icon: IconBulb,
    },
    {
      title: 'Easy Configuration',
      description: 'Simple setup and configuration tools that save you time.',
      icon: IconSettings,
    },
    {
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team using our collaboration features.',
      icon: IconUsers,
    },
  ],
  columns: 3,
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Features',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    // Offers several doc blocks to help document your components. More info: https://storybook.js.org/docs/writing-docs/doc-blocks
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls exclude={['id', 'header', 'image', 'isImageDisplayed', 'isBeforeContent', 'isAfterContent']} />
          <Stories includePrimary={false} title={'Stories'} />
        </>
      ),
    },
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
  },
};

export const WithBackground: Story = {
  args: {
    ...mockData,
    hasBackground: true,
  },
};

export const OneColumn: Story = {
  args: {
    ...mockData,
    columns: 1,
  },
};

export const TwoColumns: Story = {
  args: {
    ...mockData,
    columns: 2,
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
