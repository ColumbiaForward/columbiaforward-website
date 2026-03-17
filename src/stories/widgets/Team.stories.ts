import type { Meta, StoryObj } from '@storybook/react';
import { IconBrandLinkedin, IconBrandTwitter, IconMail } from '@tabler/icons-react';

import Component from '~/components/widgets/Team';
import { TeamProps } from '~/shared/types';

// Mock data for Team stories
const mockData: TeamProps = {
  header: {
    title: 'Meet Our Team',
    subtitle: 'Get to know the talented people behind our success.',
    tagline: 'Our Team',
  },
  teams: [
    {
      name: 'Sarah Johnson',
      occupation: 'CEO & Founder',
      image: {
        src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        alt: 'Sarah Johnson',
      },
      items: [
        {
          title: 'LinkedIn',
          href: '#',
          icon: IconBrandLinkedin,
        },
        {
          title: 'Twitter',
          href: '#',
          icon: IconBrandTwitter,
        },
        {
          title: 'Email',
          href: '#',
          icon: IconMail,
        },
      ],
    },
    {
      name: 'Michael Chen',
      occupation: 'CTO',
      image: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        alt: 'Michael Chen',
      },
      items: [
        {
          title: 'LinkedIn',
          href: '#',
          icon: IconBrandLinkedin,
        },
        {
          title: 'Twitter',
          href: '#',
          icon: IconBrandTwitter,
        },
      ],
    },
    {
      name: 'Emily Rodriguez',
      occupation: 'Head of Design',
      image: {
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        alt: 'Emily Rodriguez',
      },
      items: [
        {
          title: 'LinkedIn',
          href: '#',
          icon: IconBrandLinkedin,
        },
        {
          title: 'Email',
          href: '#',
          icon: IconMail,
        },
      ],
    },
    {
      name: 'David Thompson',
      occupation: 'Lead Developer',
      image: {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        alt: 'David Thompson',
      },
      items: [
        {
          title: 'LinkedIn',
          href: '#',
          icon: IconBrandLinkedin,
        },
        {
          title: 'Twitter',
          href: '#',
          icon: IconBrandTwitter,
        },
      ],
    },
  ],
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Team',
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
  },
};

export const WithBackground: Story = {
  args: {
    ...mockData,
    hasBackground: true,
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
