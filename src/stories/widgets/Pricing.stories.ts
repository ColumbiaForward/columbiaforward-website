import type { Meta, StoryObj } from '@storybook/react';

import Component from '~/components/widgets/Pricing';
import { PricingProps } from '~/shared/types';

// Mock data for Pricing stories
const mockData: PricingProps = {
  header: {
    title: 'Choose Your Plan',
    subtitle: 'Select the perfect plan that fits your needs and budget.',
    tagline: 'Pricing',
  },
  prices: [
    {
      title: 'Basic',
      subtitle: 'Perfect for getting started',
      price: 9,
      period: 'per month',
      items: [
        { title: 'Up to 5 projects' },
        { title: '10GB storage' },
        { title: 'Email support' },
        { title: 'Basic analytics' },
      ],
      callToAction: {
        text: 'Get Started',
        href: '#',
      },
    },
    {
      title: 'Pro',
      subtitle: 'Best for growing teams',
      price: 29,
      period: 'per month',
      items: [
        { title: 'Unlimited projects' },
        { title: '100GB storage' },
        { title: 'Priority support' },
        { title: 'Advanced analytics' },
        { title: 'Team collaboration' },
      ],
      callToAction: {
        text: 'Choose Pro',
        href: '#',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'Enterprise',
      subtitle: 'For large organizations',
      price: 99,
      period: 'per month',
      items: [
        { title: 'Unlimited everything' },
        { title: '1TB storage' },
        { title: '24/7 phone support' },
        { title: 'Custom integrations' },
        { title: 'Advanced security' },
        { title: 'Dedicated account manager' },
      ],
      callToAction: {
        text: 'Contact Sales',
        href: '#',
      },
    },
  ],
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Pricing',
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
