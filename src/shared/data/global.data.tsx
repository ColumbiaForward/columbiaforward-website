import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Columbia Forward — Join the movement for common-sense leadership »',
    href: '/',
  },
  callToAction2: {
    text: 'Follow @ForwardPartyUSA on Twitter',
    href: 'https://twitter.com/ForwardPartyUSA',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  actions: [
    {
      text: 'Get Involved',
      href: '/#contact',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'Columbia Forward',
  links: [],
  columns: [
    {
      title: 'Party',
      links: [
        {
          label: 'About Us',
          href: '/about',
        },
        {
          label: 'Our Platform',
          href: '/',
        },
        {
          label: 'Team',
          href: '/team',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        {
          label: 'Volunteer',
          href: '/#contact',
        },
        {
          label: 'Donate',
          href: '/#contact',
        },
        {
          label: 'Events',
          href: '/#contact',
        },
      ],
    },
    {
      title: 'Connect',
      links: [
        {
          label: 'Contact Us',
          href: '/#contact',
        },
        {
          label: 'Mailing List',
          href: '/#contact',
        },
        {
          label: 'Forward Party',
          href: 'https://www.forwardparty.com',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/ForwardPartyUSA' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span>
        © 2025 Columbia Forward · All rights reserved.
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [],
  columns: [
    {
      title: 'Address',
      texts: ['Columbia, USA'],
    },
    {
      title: 'Email',
      texts: ['info@columbiaforward.org'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/ForwardPartyUSA' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span>
        © 2025{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-primary-600 hover:underline dark:hover:text-primary-400"
          href="https://www.forwardparty.com"
        >
          Columbia Forward
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};
