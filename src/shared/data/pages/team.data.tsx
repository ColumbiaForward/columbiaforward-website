import { IconMail } from '@tabler/icons-react';
import { TeamProps } from '~/shared/types';
import ryanImg from '~/assets/images/ryan.jpg';
import celineImg from '~/assets/images/celine.jpg';


// Team data on Team page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Meet the dedicated Columbians driving Columbia Forward — community members who believe in putting people over party and building the future our city deserves.',
  },
  teams: [
    {
      name: 'Ryan Zhang',
      occupation: 'Co-Founder',
      image: {
        src: ryanImg,
        alt: 'Ryan Zhang',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'mailto:rz2716@columbia.edu',
        },
      ],
    },
    {
      name: 'Celine Cotran',
      occupation: 'Co-Founder',
      image: {
        src: celineImg,
        alt: 'Celine Cotran',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'mailto:cgc2153@columbia.edu',
        },
      ],
    },
  ],
};