import {
  IconArrowDown,
  IconBulb,
  IconMail,
  IconUsers,
  IconStar,
  IconCheck,
  IconFlag,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  FAQsProps,
  HeroProps,
  SocialProofProps,
  StepsProps,
} from '../../types';
import heroImg from '~/assets/images/hero-bg.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Moving Columbia Forward — Together
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-400 decoration-wavy decoration-1 underline-offset-2">
          Columbia
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
    href: '/#contact',
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

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: heroImg,
    alt: 'Columbia community coming together',
  },
  header: {
    title: 'How We Move Forward',
  },
  items: [
    {
      title: 'Find Common Ground',
      description:
        'We reject the idea that every issue must be a partisan battle. Columbia Forward brings together residents of all backgrounds to identify shared values and the solutions most people actually agree on.',
      icon: IconArrowDown,
    },
    {
      title: 'Propose Bold Solutions',
      description:
        'We are not bound by ideology. We look at what works — drawing on evidence, local expertise, and community input — to champion practical policies that move Columbia forward.',
      icon: IconArrowDown,
    },
    {
      title: 'Citizen-Led Action',
      description:
        'Our movement is powered by residents, not party machines. We empower volunteers, host town halls, and amplify the voices of everyday Columbians who want real change.',
      icon: IconArrowDown,
    },
    {
      title: 'Deliver Real Results',
      description:
        'We hold ourselves accountable to outcomes. Elected Columbia Forward leaders will be measured by results — safer streets, better schools, a thriving local economy — not party loyalty.',
      icon: IconCheck,
    },
  ],
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
      description: `Columbia Forward champions electoral reform (ranked-choice voting, open primaries), government accountability, fiscal responsibility, and community-centered policy. We believe in finding the best ideas regardless of which "side" they come from, and working together to make Columbia a better place to live, work, and raise a family.`,
    },
    {
      title: 'How is Columbia Forward different from the major parties?',
      description: `Unlike the Republican and Democratic parties, we are not beholden to national donors, ideological litmus tests, or partisan leaders. Our candidates answer to Columbia residents first and foremost. We welcome members from all political backgrounds who are tired of the status quo and ready to focus on results over rhetoric.`,
    },
    {
      title: 'How can I get involved?',
      description: `Getting involved is easy! You can volunteer for events and canvassing, join our mailing list to stay updated, attend a town hall or community meeting, donate to support our local campaigns, or simply spread the word. Every action — big or small — helps move Columbia forward.`,
    },
  ],
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Join Columbia Forward Today',
  subtitle:
    'Be part of a growing movement of Columbians who believe in putting community first. Together we can break partisan gridlock and build the future Columbia deserves.',
  callToAction: {
    text: 'Get Involved',
    href: '/#contact',
    icon: IconUsers,
  },
  items: [
    {
      title: 'Volunteer',
      description: 'Give your time to help build a better Columbia.',
      href: '/#contact',
    },
    {
      title: 'Learn more',
      description: 'Read about our platform and vision for Colombia.',
      href: '/about',
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
