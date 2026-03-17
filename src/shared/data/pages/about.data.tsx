import { HeroProps, ContentProps, FeaturesProps } from '~/shared/types';
import kids1 from '~/assets/images/kids1.jpg';
import kids2 from '~/assets/images/kids2.jpg';
import kids3 from '~/assets/images/kids3.png';


// Our Mission
export const missionAbout: ContentProps = {
  header: {
    title: 'Our Mission',
  },
  content: 'Artificial intelligence has the power to democratize knowledge by giving people worldwide access to expert-level information, regardless of background or connections. For underprivileged children, AI can open pathways to careers once thought unreachable. However, without proper education, many students mistakenly view AI as sentient or infallible, relying on it as a shortcut rather than a tool. This overreliance risks weakening critical thinking, problem-solving, and academic integrity skills that are essential for long-term learning and personal development.',
  image: {
    src: kids1,
    alt: 'Kids learning',
  },
  isReversed: false,
  isAfterContent: false,
};

// Empowering the Next Generation
export const empowermentAbout: ContentProps = {
  header: {
    title: 'Empowering the Next Generation',
  },
  content: 'Our organization aims to educate students on what Artificial intelligence is. With this familiarity, they can use it as a tool for efficient knowledge, understand how to leverage it in the future workforce, whilst also avoiding its dangers.',
  image: {
    src: kids2,
    alt: 'Empowering students',
  },
  isReversed: true,
  isAfterContent: false,
};

// Partnerships
export const partnershipsAbout: FeaturesProps = {
  header: {
    title: 'Partnerships',
  },
  columns: 2,
  items: [
    {
      title: 'Aspen Institution',
      description: 'Partner',
    },
    {
      title: 'Millennium High School',
      description: 'Partner',
    },
    {
      title: 'Tutor The Community',
      description: 'Partner',
    },
    {
      title: 'Bezos Foundation',
      description: 'Partner',
    },
  ],
};

// The Impact We Seek
export const impactAbout: ContentProps = {
  header: {
    title: 'The Impact We Seek',
  },
  content: 'We plan to develop extensive partnerships with organizations, public schools, libraries, and the New York City Department of Education to bring this opportunity to every single kid in New York. I will also host workshops across these platforms to gather data and expand our curriculum, which will be readily accessible to anyone in the world who is curious, wants to educate others, and learn about the goals (AI)trophy intends to facilitate within our communities',
  image: {
    src: kids3,
    alt: 'Impact',
  },
  isReversed: false,
  isAfterContent: false,
};

// Our Vision for the Future
export const visionAbout: ContentProps = {
  header: {
    title: 'Our Vision for the Future',
  },
  content: 'AI is consistently being alienated in educational settings, but, we can change the perspective on AI into someone good if we teach our younger generation what it is. The opportunity provided by Artificial Intelligence can be provided to underprivileged kids is a complete revelation. We dream to provide the opportunity of knowledge on how to properly utilize this technology to every underprivileged child around the world.',
  isReversed: true,
  isAfterContent: false,
};



