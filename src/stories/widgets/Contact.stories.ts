import type { Meta, StoryObj } from '@storybook/react';
import { IconMail, IconMapPin, IconPhoneCall } from '@tabler/icons-react';

import Component from '~/components/widgets/Contact';
import { ContactProps } from '~/shared/types';

// Mock data for Contact stories
const mockData: ContactProps = {
  header: {
    title: 'Get in touch',
    subtitle: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    tagline: 'Contact',
  },
  content: 'Have questions about our services? Need support? We\'re here to help and would love to hear from you.',
  items: [
    {
      title: 'Email us',
      description: 'contact@aitrophy.com',
      icon: IconMail,
    },
    {
      title: 'Call us',
      description: '+1 (555) 123-4567',
      icon: IconPhoneCall,
    },
    {
      title: 'Visit us',
      description: ['123 Main Street', 'Suite 100', 'City, State 12345'],
      icon: IconMapPin,
    },
  ],
  form: {
    title: 'Send us a message',
    description: 'Fill out the form below and we\'ll get back to you as soon as possible.',
    inputs: [
      {
        type: 'text',
        name: 'name',
        label: 'Name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'Your email',
      },
      {
        type: 'text',
        name: 'subject',
        label: 'Subject',
        placeholder: 'Subject',
      },
    ],
    textarea: {
      rows: 4,
      name: 'message',
      label: 'Message',
      placeholder: 'Your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Contact',
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
