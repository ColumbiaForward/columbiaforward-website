import { IconBrandTwitter, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { HeroProps, TeamProps } from '~/shared/types';


// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Russell Zhang',
      occupation: 'Founder',
      image: {
        src: 'https://raw.githubusercontent.com/AI-trophy/aitrophy-website/main/src/assets/images/russell.jpg',
        alt: 'Russell Zhang',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Ryan Zhang',
      occupation: 'Advisor',
      image: {
        src: 'https://raw.githubusercontent.com/Rhyzhang/rhyzhang.github.io/main/assets/img/me.jpg',
        alt: 'Ryan Zhang',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};