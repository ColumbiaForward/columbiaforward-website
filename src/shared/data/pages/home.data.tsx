import {
  IconArrowDown,
  IconMail,
  IconUsers,
  IconCheck,
  IconFlag,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  FAQsProps,
  HeroProps,
  SocialProofProps,
} from '../../types';
import heroImg from '~/assets/images/hero-bg.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Moving Forward Together at Columbia
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-400 decoration-wavy decoration-1 underline-offset-2">
          The USA
        </span>{' '}
        deserves leaders who put people over party.
      </span>{' '}
      We are building a community-driven movement for{' '}
      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
        common-sense solutions.
      </span>
    </>
  ),
  callToAction: {
    text: 'Our Platform',
    href: '/#steps-on-home',
    icon: IconFlag,
    targetBlank: false,
  },
  callToAction2: {
    text: 'Get Involved',
    icon: IconUsers,
    href: 'https://forms.gle/Es3AbsS6a1YEvTTt5',
  },
  image: {
    src: heroImg,
    alt: 'Columbia Forward — Community & Civic Engagement',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  imageSize: 'w-32 md:w-48 lg:w-56',
  containerClass: 'py-6 md:py-8 lg:py-10',
  images: [],
};


// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Common questions about Columbia Forward and the Forward Party movement.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What is the Forward Party?',
      description: `The Forward Party is a national political movement founded on the belief that America's broken two-party system is failing everyday citizens. Rather than leaning left or right, Forward focuses on pragmatic, evidence-based solutions — prioritizing people over party. Columbia Forward is our local chapter bringing that energy to our community.`,
    },
    {
      title: 'What does Columbia Forward stand for?',
      description: `Columbia Forward champions electoral reform (ranked-choice voting, open primaries), government accountability, fiscal responsibility, and community-centered policy. We believe in finding the best ideas regardless of which "side" they come from, and working together to make our country a better place to live, work, and raise a family.`,
    },
    {
      title: 'How is Columbia Forward different from the major parties?',
      description: `Unlike the Republican and Democratic parties, we are not beholden to national donors, ideological litmus tests, or partisan leaders. We welcome members from all political backgrounds who are tired of the status quo and ready to focus on results over rhetoric.`,
    },
    {
      title: 'How can I get involved?',
      description: `Getting involved is easy! We are ultra grass roots. Just email cgc2153@columbia.edu, rz2716@columbia.edu, or columbiauniversityforward@gmail.com.`,
    },
  ],
};

// CallToAction data *******************
const callToAction2Home: CallToActionProps = {
  title: 'Join Columbia Forward Today',
  subtitle:
    'Be part of a growing movement of Columbians who believe in putting community first. Together we can break partisan gridlock and build the future our country deserves.',
  callToAction: {
    text: 'Get Involved',
    href: 'https://forms.gle/Es3AbsS6a1YEvTTt5',
    icon: IconUsers,
  },
  items: [
    {
      title: 'Volunteer',
      description: 'Give your time to help build a better Columbia.',
      href: 'https://forms.gle/Es3AbsS6a1YEvTTt5',
    },
    {
      title: 'Learn more',
      description: 'Read about what we have been up to!',
      href: '/news',
    },
    {
      title: 'Stay Updated',
      description: 'Join our mailing list for news and events.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
