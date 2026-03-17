import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.png';
import aspencrgLogo from '~/assets/images/aspen-crg-logo.png';
import bffLogo from '~/assets/images/bff-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      (AI)trophy - Empowering the kids with AI
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          K-12
        </span>{' '}
        are often neglected in the digital age.
      </span>{' '}
      We are doing something about it and it's all{' '}
      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
        open source.
      </span>
    </>
  ),
  callToAction: {
    text: 'See Curriculum',
    href: 'https://github.com/AI-trophy/',
    icon: IconBulb,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Join Mailing List',
    icon: IconMail,
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  imageSize: 'w-32 md:w-48 lg:w-56',
  containerClass: 'py-6 md:py-8 lg:py-10',
  images: [
    {
      link: 'https://www.risinggenerations.org/',
      src: aspencrgLogo,
      alt: 'Aspen CRG Logo',
    },
    {
      link: 'https://www.bezosfamilyfoundation.org/story/introducing-the-center-for-rising-generations',
      src: bffLogo,
      alt: 'Bezo Foundation Logo',
    },
  ],
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Workshop Workflow',
  },
  items: [
    {
      title: 'The Dream',
      description:
        'Artificial intelligence provides the dream of democratized knowledge, no matter where you are or what connections you hold. We provide a vision of why you should care and the potential to answer any question with an expert-level first approximation.',
      icon: IconArrowDown,
    },
    {
      title: 'Introduction to Large Language Models',
      description:
        'While AI is broad, we focus on Large Language Models (LLMs) like ChatGPT. These are neural networks that use math and vast data to predict the next word. You will learn how they function, emphasizing that they are not sentient but predictive engines.',
      icon: IconArrowDown,
    },
    {
      title: 'AI Safety and Atrophy',
      description:
        'We discuss how to use AI responsibly and the promises it holds if used accordingly. The objective is to learn how to use LLMs well and understand how irresponsible usage can lead to cognitive decline.',
      icon: IconArrowDown,
    },
    {
      title: 'Interactive Workshop',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Ms. Tayla Kirsten',
      job: 'K-5 Principal',
      testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Co-Founder & CEO',
      testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
  ],
};


// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    // Note: You may want to update this subtitle text as well, as it is still Latin.
    subtitle:
      'Common questions regarding our educational goals, curriculum expansion, and partnerships.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'Why is it important to educate students about AI rather than strictly prohibiting it?',
      description: `While AI has the power to democratize knowledge and open career pathways, without proper education, students may mistakenly view it as sentient or infallible. The organization believes that simply avoiding AI leads to overreliance and a lack of critical thinking. By teaching students what AI actually is, they can learn to use it as a powerful tool for the workforce while maintaining their problem-solving skills and academic integrity.`,
    },
    {
      title: 'How does the organization plan to reach students and expand its curriculum?',
      description: `The initiative plans to develop extensive partnerships with public schools, libraries, and the New York City Department of Education to reach every child in NYC. Additionally, they will host workshops to gather data to refine their curriculum. This curriculum is intended to be readily accessible to anyone in the world who is curious or wants to educate others.`,
    },
    {
      title: 'Which organizations represent your current key partners?',
      description: `The initiative has established partnerships with several notable entities, including: Aspen Institution, Millennium High School, Tutor The Community, and Bezos Foundation.`,
    },
  ],
};



// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
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
