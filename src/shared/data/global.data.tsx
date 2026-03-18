import {
  IconBrandGithub,
  IconBrandInstagram,
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
      label: 'News',
      href: '/news',
    },
  ],
  actions: [
    {
      text: 'Get Involved',
      href: 'https://forms.gle/Es3AbsS6a1YEvTTt5',
      targetBlank: true,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
const footerData: FooterProps = {
  title: 'Columbia Forward',
  links: [],
  columns: [
    {
      title: 'Party',
      links: [
        {
          label: 'News',
          href: '/news',
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
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/columbia.forward/' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/ColumbiaForwardParty' },
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
      texts: ['New York, NY'],
    },
    {
      title: 'Email',
      texts: ['columbiauniversityforward@gmail.com'],
    },
  ],
  socials: [
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/columbia.forward/' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/ColumbiaForwardParty' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span>
        © 2025{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-primary-600 hover:underline dark:hover:text-primary-400"
          href="https://columbiaforward.vercel.app/"
        >
          Columbia Forward
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};
